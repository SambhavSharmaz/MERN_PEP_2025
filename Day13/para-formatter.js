const texthelper = require("./txt-for.js")

function formatPara(text) {
    const sentences = text.split(".");
    const capitalizedSentences = sentences.map((sentence) => {
        return texthelper.getcaptext(sentence);
    });
    return capitalizedSentences.join(".\n");
}

module.exports = {
    formatPara: formatPara
}