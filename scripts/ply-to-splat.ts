#!/usr/bin/env bun
// One-off converter: gaussian-splatting .ply → antimatter15 .splat (32 bytes/splat).
// Drops SH degree 3 (keeps DC as RGB), quantizes rotation to uint8.
//
// usage: bun scripts/ply-to-splat.ts <input.ply> [output.splat] [opacityMinRaw]

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

type Prop = { name: string; offset: number; size: number };

const TYPE_BYTES: Record<string, number> = {
  float: 4,
  float32: 4,
  double: 8,
  uchar: 1,
  uint8: 1,
  char: 1,
  int8: 1,
  ushort: 2,
  uint16: 2,
  short: 2,
  int16: 2,
  uint: 4,
  uint32: 4,
  int: 4,
  int32: 4,
};

const INPUT = process.argv[2];
if (!INPUT) {
  console.error(
    "usage: bun scripts/ply-to-splat.ts <input.ply> [output.splat] [opacityMinRaw]",
  );
  process.exit(2);
}
const OUTPUT = process.argv[3] ?? INPUT.replace(/\.ply$/i, ".splat");
const OPACITY_MIN_RAW = Number(process.argv[4] ?? -2);

const inPath = resolve(INPUT);
const outPath = resolve(OUTPUT);
const buf = readFileSync(inPath);

const marker = "end_header\n";
const headerText = buf.toString("utf8", 0, Math.min(buf.length, 128 * 1024));
const idx = headerText.indexOf(marker);
if (idx < 0) throw new Error("PLY header not found");
const header = headerText.slice(0, idx + marker.length);
const bodyStart = Buffer.byteLength(header, "utf8");
const body = buf.subarray(bodyStart);
const view = new DataView(body.buffer, body.byteOffset, body.byteLength);

const lines = header.split("\n");
if (!lines[0]?.startsWith("ply")) throw new Error("not a PLY file");
const fmt = lines.find((l) => l.startsWith("format "));
if (!fmt?.includes("binary_little_endian")) {
  throw new Error(`unsupported format: ${fmt ?? "(missing)"}`);
}

let vertexCount = 0;
const props: Prop[] = [];
let inVertex = false;
let stride = 0;
for (const line of lines) {
  if (line.startsWith("element ")) {
    const [, name, n] = line.split(" ");
    inVertex = name === "vertex";
    if (inVertex) vertexCount = Number(n);
  } else if (line.startsWith("property ") && inVertex) {
    const parts = line.split(" ");
    const t = parts[1]!;
    const name = parts[2]!;
    const size = TYPE_BYTES[t];
    if (!size) throw new Error(`unsupported prop: ${t}`);
    props.push({ name, offset: stride, size });
    stride += size;
  }
}

function prop(name: string): Prop {
  const p = props.find((q) => q.name === name);
  if (!p) throw new Error(`missing PLY prop: ${name}`);
  return p;
}
const xP = prop("x");
const yP = prop("y");
const zP = prop("z");
const s0 = prop("scale_0");
const s1 = prop("scale_1");
const s2 = prop("scale_2");
const r0 = prop("rot_0");
const r1 = prop("rot_1");
const r2 = prop("rot_2");
const r3 = prop("rot_3");
const op = prop("opacity");
const dc0 = prop("f_dc_0");
const dc1 = prop("f_dc_1");
const dc2 = prop("f_dc_2");

// Detect quaternion order by average magnitude heuristic.
let sumW = 0;
let sumL = 0;
const sample = Math.min(vertexCount, 2000);
for (let i = 0; i < sample; i++) {
  sumW += Math.abs(view.getFloat32(i * stride + r0.offset, true));
  sumL += Math.abs(view.getFloat32(i * stride + r3.offset, true));
}
const quatWXYZ = sumW >= sumL;
console.log(
  `[ply-to-splat] ${vertexCount} splats, stride ${stride}B, quat order ${quatWXYZ ? "wxyz" : "xyzw"}`,
);

const SH_C0 = 0.28209479177387814;
function clampByte(x: number): number {
  return x < 0 ? 0 : x > 255 ? 255 : Math.round(x);
}

// First pass: count kept splats (filtered by opacity).
let kept = 0;
for (let i = 0; i < vertexCount; i++) {
  if (view.getFloat32(i * stride + op.offset, true) >= OPACITY_MIN_RAW) kept++;
}

const out = new Uint8Array(kept * 32);
const outView = new DataView(out.buffer);
let writeIdx = 0;

for (let i = 0; i < vertexCount; i++) {
  const base = i * stride;
  const rawOp = view.getFloat32(base + op.offset, true);
  if (rawOp < OPACITY_MIN_RAW) continue;

  const o = writeIdx * 32;
  // position
  outView.setFloat32(o + 0, view.getFloat32(base + xP.offset, true), true);
  outView.setFloat32(o + 4, view.getFloat32(base + yP.offset, true), true);
  outView.setFloat32(o + 8, view.getFloat32(base + zP.offset, true), true);
  // scale (linear, exp of log-space)
  outView.setFloat32(
    o + 12,
    Math.exp(view.getFloat32(base + s0.offset, true)),
    true,
  );
  outView.setFloat32(
    o + 16,
    Math.exp(view.getFloat32(base + s1.offset, true)),
    true,
  );
  outView.setFloat32(
    o + 20,
    Math.exp(view.getFloat32(base + s2.offset, true)),
    true,
  );
  // color (DC SH → RGB) + alpha (sigmoid(opacity))
  const rC = 0.5 + SH_C0 * view.getFloat32(base + dc0.offset, true);
  const gC = 0.5 + SH_C0 * view.getFloat32(base + dc1.offset, true);
  const bC = 0.5 + SH_C0 * view.getFloat32(base + dc2.offset, true);
  const alpha = 1 / (1 + Math.exp(-rawOp));
  out[o + 24] = clampByte(rC * 255);
  out[o + 25] = clampByte(gC * 255);
  out[o + 26] = clampByte(bC * 255);
  out[o + 27] = clampByte(alpha * 255);
  // rotation → normalize + quantize, stored as (w, x, y, z)
  const q0 = view.getFloat32(base + r0.offset, true);
  const q1 = view.getFloat32(base + r1.offset, true);
  const q2 = view.getFloat32(base + r2.offset, true);
  const q3 = view.getFloat32(base + r3.offset, true);
  let qw: number;
  let qx: number;
  let qy: number;
  let qz: number;
  if (quatWXYZ) {
    qw = q0;
    qx = q1;
    qy = q2;
    qz = q3;
  } else {
    qx = q0;
    qy = q1;
    qz = q2;
    qw = q3;
  }
  const n = Math.hypot(qw, qx, qy, qz) || 1;
  qw /= n;
  qx /= n;
  qy /= n;
  qz /= n;
  out[o + 28] = clampByte(qw * 128 + 128);
  out[o + 29] = clampByte(qx * 128 + 128);
  out[o + 30] = clampByte(qy * 128 + 128);
  out[o + 31] = clampByte(qz * 128 + 128);

  writeIdx++;
}

writeFileSync(outPath, out);
const inSize = buf.byteLength / 1024 / 1024;
const outSize = out.byteLength / 1024 / 1024;
console.log(
  `[ply-to-splat] wrote ${outPath}: ${kept}/${vertexCount} splats, ${outSize.toFixed(2)} MB (was ${inSize.toFixed(2)} MB, ${((outSize / inSize) * 100).toFixed(1)}%)`,
);
