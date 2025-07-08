const fspromises = require("fs/promises");

const main = async () => {
    console.log("----------Start---------------");

    const response = await fspromises.readFile("./notes.txt", "utf-8");
    console.log(response);
    
    console.log("----------Mid--------------");

    const response1 = await fspromises.readFile("./std.txt", "utf-8");
    console.log(response1);

    console.log("----------End---------------");
}

main();


// const response1 = fs.readFileSync("./std.txt","utf-8");


// console.log(response.toString());