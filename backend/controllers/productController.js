const Product = require('../models/productModel')
const mongoose = require('mongoose')

//get all products
const getProducts = async(req, res) => {
    const products = await Product.find({}).sort({createdAt: -1}) //to find attribute specific : Product.find({reps:20,other:10})
    res.status(200).json(products) //sending back to browser/client
}   

//get single product
const getProduct = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such product'})
    }
    const product = await Product.findById(id)

    if(!product) {
        return res.status(404).json({error: 'No such product'})
    }
    res.status(200).json(product)
}

//create new product
const createProduct = async (req, res) => {
    const {productName, category,originalPrice,sellingPrice,isNegotiable,dateOfPurchase,isBillAvailable,inWarranty,
        images,address,createdAt,updatedAt} = req.body

    // add user's email to the product
     const userEmail = req.user.email
    //add doc to db
    try {
        const product = await Product.create( {
            productName, 
            category,
            originalPrice,
            sellingPrice,
            isNegotiable,
            dateOfPurchase,
            isBillAvailable,
            inWarranty,
            images,
            address,
            userEmail,
            createdAt,
            updatedAt}) //Product.create() is asynchronous in nature
        res.status(200).json(product)
        //await used when we use async
    } catch (error){
        res.status(400).json({error: error.message}) //400 is error code here
    }
    // res.json({mssg:'POST a new product'})
}

//delete product
const deleteProduct = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such product found!'})
    }

    const product = await Product.findOneAndDelete({_id: id}) // underscore_id : ye syntax hai
    
    if(!product) {
        return res.status(404).json({error: 'No such product!'})
    }
    res.status(200).json(product)
}

//update product
const updateProduct = async ( req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such product!'})
    }

    const product = await Product.findOneAndUpdate({_id: id}, {
        ...req.body //IMP REM
    }) // underscore_id : ye syntax hai

    if(!product) {
        return res.status(404).json({error: 'No such product!'})
    }
    res.status(200).json(product)
}


//exporting
module.exports = {
    createProduct,
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct
}