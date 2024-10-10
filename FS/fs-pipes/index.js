const fs = require("node:fs");
const zlib = require("node:zlib");

const gzib = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
}); // default buffer size is 64KB

// Pipe returns a stream which can be chained with another pipe if the returned stream is either
// Readable, dubplex or a Transform stream
// hence we used zlib library here as it has a built in transform stream  hence it returns transform stream if we pipe it
// zlib allows us to create zip files
readableStream.pipe(gzib).pipe(fs.WriteStream("./file3.txt.gz"));

const writeableStream = fs.createWriteStream("./file2.txt");
readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   // OUTPUT (because we set highWaterMark = 2 hence each chunk will have only 2 byte of data)
//   //   We
//   //  a
//   // re
//   //  n
//   // ow
//   //  S
//   // tr
//   // ea
//   // mi
//   // ng
//   // !

//   writeableStream.write(chunk);
// });
