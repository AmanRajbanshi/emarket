const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
        trim:true,
        unique:true
    },
    status:{
        type:Boolean,
       default:true,
    },
    createdBy:{
        type:String,
        required:[true," CreaterName is required"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    // product:{
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'Product',
    //     required:true
    // }
})

module.exports = mongoose.model('Category', categorySchema)