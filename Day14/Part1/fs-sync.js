const fs = require("node:fs");

const response = fs.readFileSync("./notes.txt");

const response1 = fs.readFileSync("./std.txt","utf-8");

console.log(response1);
console.log(response,"utf-8");
console.log(response.toString());