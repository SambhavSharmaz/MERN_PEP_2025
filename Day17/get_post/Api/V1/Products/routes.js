const express = require('express');
const { createProdController } = require('./controllers');
const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.json({
        isSuccess: true,
        message: 'Products fetched successfully',
        data: {},
    });
});

productRouter.post('/', createProdController)

module.exports = { productRouter };
