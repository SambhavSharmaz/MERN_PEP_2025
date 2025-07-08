const waitforsometime = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 5000);
});

const fethc = async (url) => {
    await waitforsometime;
    const response = await fetch(url);
    return response;
};

module.exports = { fethc };
