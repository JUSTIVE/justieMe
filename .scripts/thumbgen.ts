import fs from "node:fs";
import os from "node:os";

console.log(
  os.platform(),
  os.cpus().map((x) => x.model),
);

// const images = fs.readdirSync("./src/asset/gallery");
