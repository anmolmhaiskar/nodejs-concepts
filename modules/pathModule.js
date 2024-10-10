// If you want to use import keyword to use __dirname and __filename then do the following in the commented section below

// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// add this to package.json
// "type": "module",

const path = require("path");

console.log(__filename); // /home/anmol/interview_prep/Node/modules/pathModule.js
console.log(__dirname); // /home/anmol/interview_prep/Node/modules

console.log(path.basename(__filename)); // pathModule.js
console.log(path.basename(__dirname)); // modules

console.log(path.dirname(__filename)); // /home/anmol/interview_prep/Node/modules
console.log(path.dirname(__dirname)); // /home/anmol/interview_prep/Node

console.log(path.extname(__filename)); // .js
console.log(path.extname(__dirname)); // "cle"

console.log(
  path.isAbsolute("/home/anmol/interview_prep/Node/modules/pathModule.js")
); // true
console.log(path.isAbsolute("interview_prep/Node/modules/pathModule.js")); // false

console.log(path.parse(__filename));
// {
//     root: '/',
//     dir: '/home/anmol/interview_prep/Node/modules',
//     base: 'pathModule.js',
//     ext: '.js',
//     name: 'pathModule'
//   }

//JOIN
console.log(path.join(__dirname, "index.js")); // /home/anmol/interview_prep/Node/modules/index.js
console.log(
  path.join("/home/anmol/interview_prep/Node/", "../modules", "/index.js")
); // /home/anmol/interview_prep/modules/index.js (Skipped "Node" directory here)

console.log(
  path.join("/home/anmol/interview_prep/Node/", "//modules", "//index.js")
); // /home/anmol/interview_prep/Node/modules/index.js

//RESOLVE
console.log(path.resolve("Node", "modules", "index.js")); // /home/anmol/interview_prep/Node/modules/Node/modules/index.js (Absolute path to the index.js file)

console.log(path.resolve("/Node", "modules", "index.js")); // /Node/modules/index.js (if it starts from a slash '/' in this case it gives path from that directory itself and not from root)

console.log(path.resolve("/Node", "//modules", "index.js")); // /modules/index.js (if we use double slash then it skips or removes all the directory names used before double slash '//')

console.log(path.resolve("/Node", "//modules", "../index.js")); // /index.js

console.log(path.resolve(__dirname, "index.js")); // /home/anmol/interview_prep/Node/modules/index.js
