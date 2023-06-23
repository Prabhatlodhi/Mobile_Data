const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Product name must"]
    },
    imagePath:{
        type:String,
        required:[true, "Product name must 22"]
    },
    landingPage:{
        type:String,
        required:[true, "Product name must 33"]
    },
})

module.exports = mongoose.model('Product', productSchema)