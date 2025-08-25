const express = require('express')
const app = express()
require('dotenv').config()

const productRoutes = require('./routes/productRoutes')

app.use(express.json())


app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 4444
app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`))