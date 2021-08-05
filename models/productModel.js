const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
        trim:true,
        unique:true
    },
    price:{
     type:Number,
     required:[true,"Number is required"]   
    },
    status:{
        type:Boolean,
        required:[true,"status is required"],
    },
    createdBy:{
        type:String,
        required:[true," CreaterName is required"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    category:{
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required:true
    }

})

module.exports = mongoose.model('Product', productSchema)