const mongoose=require("mongoose")

const Schema=mongoose.Schema

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['electronics', 'furniture', 'vehicles', 'study', 'sports','music', 'other'], // Predefined types
        trim: true
    },
    originalPrice: {
        type: Number,
        required: true,
        min: 0 // Price cannot be negative
    },
    sellingPrice: {
        type: Number,
        required: true,
        min: 0
    },
    isNegotiable: {
        type: Boolean,
        default: false
    },
    dateOfPurchase: {
        type: Date,
        required: true
    },
    isBillAvailable: {
        type: Boolean,
        default: false
    },      //if bill is available then we have to create option for uploading the bill
    inWarranty: {
        type: Boolean,
        default: false
    },
    images: [{   // Still need to decide how images to be stored
        type: String 
    }],
    address: {
        type: String,
        required: true,
        enum: ['GH1', 'Hall1', 'Hall2', 'Hall3', 'Hall4', 'Hall5', 'Hall6', 'Hall7', 'Hall8', 'Hall9', 'Hall10', 'Hall11', 'Hall12', 'Hall13', 'Hall14'],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model("Product",productSchema) //creating a module of type workoutschema


