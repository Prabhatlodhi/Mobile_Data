const Product = require('../models/product')

const getAllProductsStatic = async (req,res) =>{
    const products = await Product.find({})
    // throw new Error('testing async errors')
    res.status(200).json(products)
}


const getAllProducts = async (req,res) =>{
    const products = await Product.find({})
    res.status(200).json(products)
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}