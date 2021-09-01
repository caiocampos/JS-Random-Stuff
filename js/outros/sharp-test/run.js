const Sharp = require("sharp");

const images = ["P20210210135237510-capa páscoa semana 4 12P.png"];

const run = async () => {
  for (const path of images) {
    for (const q of [80, 90, 95, 99, 100]) {
      const b = new Date();
      await Sharp(path)
        .webp({ quality: q })
        .toFile(
          path
            .replace("img/", "res/")
            .replace(/(\.jpg|\.png|\.jpeg)$/g, `-${q}.webp`)
        );
      const t = new Date() - b;
      console.log(`${path}, q ${q}: ${t}ms`);
    }
  }
};

run();
