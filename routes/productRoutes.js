const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.post('/api/products', async(req,res)=>{
    try{
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
        if (!newProduct === 400 ) {
            res.status(400).json({error: 'Failed to create Product', details: error.message})
        }
    }catch (error) {
        res.status(500).json({error: 'API failed'})
    }
})


router.get('api/products/:id', async(req,res)=> {
    try{
        const productId = await Product.findById(req.body, req.params.id)
        res.status(201).json(productId)
        if(!productId === 400 ) {
            res.status(400).json({error: 'Failed to find book'})
        }
    }catch (error){
        res.status(500).json({error: 'API failed'})
    }
})

router.put('/api/products/:id', async(req,res)=> {
    try{
        const updateProductId = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true},options)
        res.status(201).json(updateProductId)
        if(!updateProductId === 404) {
            res.status(404).json({error: 'Failed to update book'})
        }
    }catch (error) {
        res.status(500).json({error: 'Server failed'})
    }
})

router.delete('/api/products/:id', async(req,res)=> {
    try{
        const deleteProductId = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json(deleteProductId)
        if (!deleteProductId === 404) {
            res.status(404).json({error: 'Failed to delete book'})
        }
    }catch (error) {
        res.status(500).json({error: 'API Failed'})
    }
})

router.get('/api/products/', async (req,res)=> {
    const category = req.query.category
    const minPrice = {$gte, minPrice}
    const maxPrice = {$lte, maxPrice}
    try{
        const allProducts = await Product.find({category ,id:0})
        .sort({price: -1 || price +1 })
        .skip((page -1 )* limit)
        .limit(limit)
        res.status(201).json(allProducts)
    }catch (error) {
res.status(400).json({error: 'Failed to find all products'})
    }
})

module.exports = router