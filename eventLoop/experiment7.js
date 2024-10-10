/** Experiment 7 - Timer anamoly. Order of execution can never be guaranteed */

const fs = require("fs");

setTimeout(() => console.log("this is setTimeout 1"), 0);

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});
