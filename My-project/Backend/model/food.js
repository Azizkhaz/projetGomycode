const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:String,
    price:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model('foodSchema', foodSchema)