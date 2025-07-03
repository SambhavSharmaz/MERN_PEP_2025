// const temp = require('./txt-for.js')

// const response = temp.camelCaseTxt("Hi how are you")

// console.log(response)

// //Require is used to import modules

const txt = require('./txt-for.js')
const para = require('./para-formatter.js')

const response = para.formatPara("Hi how are you", 5)
const response2 = txt.camelCaseTxt(response)

console.log(response2)

console.log(response)