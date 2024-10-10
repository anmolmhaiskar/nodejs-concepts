const fs = require("node:fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("./file.txt");
    console.log(data); //  <Buffer 4c 65 74 27 73 20 50 72 6f 6d 69 73 65 21>
    console.log(data.toString()); // Let's promise
  } catch (error) {
    console.log(error);
  }
}

readFile();

fs.readFile("file.txt", "utf-8")
  .then((data) => {
    console.log(data); //Let's promise (file.txt content)
  })
  .catch((err) => {
    console.log(err);
  });
