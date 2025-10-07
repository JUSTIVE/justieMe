import fs from "node:fs";
import os from "node:os";

console.log(os.platform(), os.arch());

const cwebpDir =
  os.platform() === "darwin" && os.arch() === "arm64"
    ? "./lib/libwebp-1.6.0-mac-arm64/bin/cwebp"
    : os.platform() === "linux" && os.arch() === "x64"
      ? "./lib/libwebp-1.6.0-linux-arm64/bin/cwebp"
      : "";

const images = fs.readdirSync("./src/asset/gallery");
