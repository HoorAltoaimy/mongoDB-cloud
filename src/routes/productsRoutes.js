const express = require('express')

const {
    getAllProducts,
    getProduct,
    createProduct
} = require('../controllers/productController')

const productsRouter = express.Router()

productsRouter.get('/', getAllProducts)
productsRouter.get('/:id', getProduct)
productsRouter.post('/', createProduct)

module.exports = productsRouter
