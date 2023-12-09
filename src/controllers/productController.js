const Product = require('../models/productModel')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).send({
            products,
        })
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

const getProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        if(!product){
            return res.status(404).send({message: `no product found with this id ${id}`})
        }
        res.status(200).send({
            product,
        })
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

const createProduct = async (req, res) => {
    try {
        const {title, price} = req.body
        const newProduct = new Product({title, price})
        await newProduct.save()
        
        res.status(200).send({
            message: 'new product is created',
            newProduct,
        })
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

module.exports = {getAllProducts, getProduct, createProduct}
