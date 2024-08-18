const express = require("express")
const {
    createProduct,
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct
} = require("../controllers/productController")
const router = express.Router()

//get all workouts
router.get('/', getProducts)
//get single workout
router.get('/:id', getProduct)

//post a new workout
router.post('/',createProduct)

//delete a  workout
router.delete('/:id',deleteProduct)

//update a  workout
router.patch('/:id',updateProduct)

module.exports = router