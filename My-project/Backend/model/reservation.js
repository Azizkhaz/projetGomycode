const mongoose = require('mongoose')

const reservationSchema = mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId,
         ref: 'authSchema', 
         required: true },
    name:{
        type:String,
        required:true
       },
        number:{
            type:String,
            required:true,
        },
        date:{
            type:String,
            required:true,
        },
        time:{
            type:String,
            required:true,
        },
        guests:{
            type:String,
            required:true,
        },
        status: {
             type: String,
             enum: ['pending', 'confirmed', 'cancelled'],
              default: 'pending' },

})

module.exports = mongoose.model('reservationSchema', reservationSchema) 