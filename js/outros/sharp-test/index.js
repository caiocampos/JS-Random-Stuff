const Sharp = require("sharp");

const images = [
  "img/01_774_01.png",
  "img/01_100441_01.png",
  "img/03_1185_01.png",
  "img/03_1188_01.jpg",
  "img/03_11874_01.jpg",
  "img/03_11890_01.jpg",
  "img/03_11891_01.jpg",
  "img/03_11910_01.jpg",
  "img/03_11911_01.jpg",
];

const run = async () => {
  for (const path of images) {
    const b = new Date();
    const image = Sharp(path);
    const metadata = await image.metadata();
    let res = null;
    if (metadata.width >= metadata.height && metadata.width > 1000) {
      res = image.resize(1000);
    } else if (metadata.height > 1000) {
      res = image.resize(null, 1000);
    } else {
      res = image;
    }
    await res
      .webp()
      .toFile(
        path.replace("img/", "res/").replace(/(\.jpg|\.png|\.jpeg)$/g, ".webp")
      );
    const t = new Date() - b;
    console.log(`${path}: ${t}ms`);
  }
};

run();
