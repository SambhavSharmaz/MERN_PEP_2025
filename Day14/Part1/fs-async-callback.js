const fs = require("node:fs");

console.log("----------Start---------------");
fs.readFile("./notes.txt", (err, response) => {
    if (err) {
        console.log(err);
    }else {
        console.log(response.toString());
    }
})

console.log("----------Mid--------------");

fs.readFile("./std.txt", (err, response1) => {
    if (err) {
        console.log(err);
    }else {
        console.log(response1.toString());
    }
})
console.log("----------End---------------");

// const response1 = fs.readFileSync("./std.txt","utf-8");


// console.log(response.toString());