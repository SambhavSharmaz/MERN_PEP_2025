const { savedatatofile } = require('./file-helper-sync.js');
const { fethc } = require('./net-helper.js');

const getrecipes = async () => {
    try {
        const response = await fethc("https://dummyjson.com/recipes");
        const data = await response.json();
        console.log("Recipes Total:", data.total);
        savedatatofile({ data, path: "recipes.json" });
    } catch (err) {
        console.error("Error in getrecipes:", err);
    }
};

const getprod = async () => {
    try {
        const response = await fethc("https://dummyjson.com/products");
        const data = await response.json();
        console.log("Products Total:", data.total);
        savedatatofile({ data, path: "products.json" });
    } catch (err) {
        console.error("Error in getprod:", err);
    }
};

const main = async () => {
    console.time("Total Time");
    await Promise.all([getrecipes(), getprod()]);
    console.timeEnd("Total Time");
};

main(); 
