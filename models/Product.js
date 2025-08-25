const mongoose = require ('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    name: {
        type: String, required: [true, "Name"]
    },
    description: {
        type: String, required: [true,  "Description"]
    },
    price: {
        type: Number, required: [true, "Price"],
        min: [0, 'Must be greater than zero']
    },
    category: {
        type: String, required: [true, "Category"]
    },
    inStock: {
        type: Boolean,
        default: true
    },
    tags: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product

