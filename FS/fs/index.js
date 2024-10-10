const fs = require("node:fs");

const fileContents = fs.readFileSync("./file.txt", "utf-8");

console.log(fileContents); // Hello World!

fs.readFile("./file.txt", (error, data) => {
  // this callback is also called as "Error First callback pattern"
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString()); // Hello World!
  }
});

fs.writeFileSync("./greet.txt", "Hello World!");

fs.writeFile("./greet2.txt", "Hello Anmol!", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File Written"); // File Written
  }
});

//Two ways to append data to file

//1. using writeFile with flag:"a"

fs.writeFile("./greet2.txt", " How are you?", { flag: "a" }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File Written"); // File Written
  }
});

// 2. using appendFile (we also have appendFileSync for synchronously appending file)

fs.appendFile("./greet2.txt", " how you doing?", "utf-8", (error) => {
  // appends text to greet2.txt file
  if (error) {
    console.log(error);
  } else {
    console.log("File Appended"); // File Appended
  }
});
