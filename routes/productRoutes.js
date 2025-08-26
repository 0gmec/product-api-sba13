const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.post('/', async(req,res)=>{
    try{
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
    }catch (error) {
        res.status(400).json({error: 'Failed to create Product', details: error.message})
    }
})


router.get('/:id', async(req,res)=> {
    try{
        const productId = await Product.findById(req.params.id)
        if(!productId ) {
            res.status(404).json({error: 'Failed to find Product'})
        }
        res.status(200).json(productId)
    }catch (error){
        res.status(500).json({error: 'API failed'})
    }
})

router.put('/:id', async(req,res)=> {
    try{
        const updateProductId = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updateProductId) {
            res.status(404).json({error: 'Failed to update product'})
        }
        res.status(200).json(updateProductId)
    }catch (error) {
        res.status(500).json({error: 'Server failed'})
    }
})

router.delete('/:id', async(req,res)=> {
    try{
        const deleteProductId = await Product.findByIdAndDelete(req.params.id)
        if (!deleteProductId) {
            res.status(404).json({error: 'Failed to delete Product'})
        }
         res.status(200).json(deleteProductId)
    }catch (error) {
        res.status(500).json({error: 'API Failed'})
    }
})

router.get('/', async (req,res)=> {
    try{
        const allProducts = await Product.find({category: category, minPrice:{$gte:price}, maxPrice: {$lte:price}, page:1, limit:10})
        .sort({price: -1 || price +1 })
        .skip((page -1 )* limit)
        .limit(limit)
        res.status(200).json(allProducts)
    }catch (error) {
res.status(400).json({error: 'Failed to find all products'})
    }
})

module.exports = router