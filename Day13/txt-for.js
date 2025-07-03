// console.log("Hello World")

// const a=10;
// const n=102;

// console.log(a+n);

// const getcapstext = (str) => {
//     console.log("input string is", str)
//     const res = str.toUpperCase();
//     return res;
// }

// const res = getcapstext("hello world");
// console.log(res);

const getcaptext = (str) => {
    const words = str.split(" ");
    const res = words.map((word) => {
        const firstchar = word[0];
        const rest = word.slice(1);
        return firstchar.toUpperCase() + rest;
    })
    return res.join(" ");
}
// console.log(getcaptext("in a good world"));

// Create the same for camel case:

const camelCaseTxt = (str) => {
    const words = str.toLowerCase().split(" ");
    const res = words.map((word, index) => {
        if (index === 0) {
            return word;}
        const rest = word.slice(1);
        return word[0] + rest;
    })
    return res.join(" ");
}
// console.log(camelCaseTxt("heLLO world")); 

module.exports = {
    getcaptext : getcaptext,
    camelCaseTxt : camelCaseTxt,
};

