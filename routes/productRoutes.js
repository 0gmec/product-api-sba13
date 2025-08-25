const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.post('/api/products', async(req,res)=>{
    try{
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
        if (newProduct === 400 ) {

        }
    }catch (error) {
        res.status(400).json({error: 'Failed to create Product', details: error.message})
    }
})


router.get('api/products/:id', async(req,res)=> {
    try{
        const productId = await Product.findById(req.body, req.params.id)
        res.status(201).json(productId)
    }catch (error){
        res.status(400).json({error: 'Failed to find book'})
    }
})

router.put('/api/products/:id', async(req,res)=> {
    try{
        const updateProductId = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
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
        res.status(201).json('/api/products')
    }catch (error) {
        res.status(400).json({error: 'Failed to delete book'})
    }
})

router.get('/api/products/', async (req,res)=> {
    const category = req.query.category
    try{
        const allProducts = await Product.find({id:0})
        res.status(201).json(allProducts)
    }catch (error) {
res.status(400).json({error: 'Failed to find all products'})
    }
})

module.exports = router