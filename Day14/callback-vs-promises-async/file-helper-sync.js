// const fs = require('fs');

// const savedatatofile = ({ data, path }) => {
//     const text = JSON.stringify(data);
//     fs.writeFileSync(path, text, "utf-8");
// };

// module.exports = { savedatatofile };

const fspromises = require("fs/promises");

const savedatatofile = async ({ data, path }) => {
  const text = JSON.stringify(data);
  await fspromises.writeFile(path, text, "utf-8");
}

module.exports = { savedatatofile };
