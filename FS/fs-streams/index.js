const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
}); // default buffer size is 64KB

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  // OUTPUT (because we set highWaterMark = 2 hence each chunk will have only 2 byte of data)
  //   We
  //  a
  // re
  //  n
  // ow
  //  S
  // tr
  // ea
  // mi
  // ng
  // !

  writeableStream.write(chunk);
});
