import fs from "node:fs";
import os from "node:os";
import { exec } from "node:child_process";

console.log(os.platform(), os.arch());

const GALLERY_DIR = "./src/asset/gallery";
const THUMB_DIR = "./src/asset/gallery/thumbs";

const thumbs = fs.readdirSync(THUMB_DIR);

const images = fs
  .readdirSync("./src/asset/gallery")
  .filter((x) => !fs.statSync(`${GALLERY_DIR}/${x}`).isDirectory())
  .filter((x) => x !== ".DS_Store")
  .filter((x) => !thumbs.includes(x.replaceAll(".jpg", ".webp")));

const convert = async (filename: string): Promise<void> => {
  console.log(filename);
  const imagePath = `${GALLERY_DIR}/${filename}`;
  const thumbPath = `${THUMB_DIR}/${filename.replaceAll(".jpg", ".webp")}`;
  const command = `.scripts/cwebp -q 100 -m 6 -quiet -lossless -resize 256 0 ${imagePath} -o ${thumbPath}`;
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
