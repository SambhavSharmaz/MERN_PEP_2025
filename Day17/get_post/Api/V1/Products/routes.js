const express = require('express');
const { createProdController,createAllProducts , updateProdController, deleteProdController} = require('./controllers');
const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.json({
        isSuccess: true,
        message: 'Products fetched successfully',
        data: {},
    });
});

productRouter.post('/', createProdController)

productRouter.delete('/:prodId', deleteProdController)

productRouter.patch('/:prodId', updateProdController)

productRouter.get('/all', createAllProducts)

module.exports = { productRouter };
