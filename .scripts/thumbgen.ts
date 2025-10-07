import fs from "node:fs";
import os from "node:os";
import { exec, execSync } from "node:child_process";

console.log(os.platform(), os.arch());

const GALLERY_DIR = "./public/asset/gallery";
const THUMB_DIR = "./public/asset/gallery/thumbs";

const thumbs = fs.readdirSync(THUMB_DIR);

const images = fs
  .readdirSync(GALLERY_DIR)
  .filter((x) => !fs.statSync(`${GALLERY_DIR}/${x}`).isDirectory())
  .filter((x) => x !== ".DS_Store")
  .filter((x) => !thumbs.includes(x.replaceAll(".jpg", ".webp")));

const convert = async (filename: string): Promise<void> => {
  console.log(filename);
  const imagePath = `${GALLERY_DIR}/${filename}`;
  const thumbPath = `${THUMB_DIR}/${filename.replaceAll(".jpg", ".webp")}`;
  const command = [
    `.scripts/cwebp -q 100 -m 6 -quiet -resize 256 0 ${imagePath} -o ${thumbPath}`,
    `.scripts/cwebp -q 90 -m 6 -quiet -resize 1024 0 ${imagePath} -o ${imagePath.replaceAll(".jpg", ".webp")}`,
  ].join(" && ");

  return new Promise((resolve, reject) =>
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return reject(error);
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return reject(stderr);
      }
      console.log(`generated: ${filename.replaceAll(".jpg", ".webp")}`);
      resolve();
    }),
  );
};

const res = await Promise.allSettled(images.map(convert));
