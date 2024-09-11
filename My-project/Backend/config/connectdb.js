const mongoose = require('mongoose')



const connectdb = async()=>{

    await mongoose.connect(process.env.mongo_url)
    try{
        console.log('you are connected to database')
    }

    catch(err){
        console.log(err)
    }
}

module.exports = connectdb