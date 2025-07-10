// Node file system module import
const fs = require("fs");

// Writing to a file using fs module
//# writeFileSync is synchronous, writeFile is asynchronous & always better.
// but for now we use writeFileSync
fs.writeFileSync("hello.txt", "Hello form Node.js");

console.log("Hello, World!");
