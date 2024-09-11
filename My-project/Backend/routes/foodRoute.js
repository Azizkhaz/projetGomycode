const express = require('express')

const foodSchema = require('../model/food')

const foodRoute = express.Router()

// http://localhost:5000/food/getall 

foodRoute.get('/getall', async(req,res)=>{
    try{
        const food = await foodSchema.find()
        res.status(200).json({msg:'get all food', food})
    }
    catch(err){
     console.log(err)
     res.send('have a problem')
    }
})

//http://localhost:5000/food/addfood

foodRoute.post('/addfood', async(req,res)=>{
    try{
        const newFood = new foodSchema(req.body)
        await newFood.save()
        res.status(200).json({msg:'you add a food', newFood})
    }
    catch(err){
        console.log(err)
        res.send('you have a problem')
    }
})


// http://localhost:5000/food/update/:id
foodRoute.put('/update/:id', async (req,res)=>{
    try{
        const {id} = req.params
        const updateFood = await foodSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg:'you could update your food', updateFood})
    }
    catch(err){
        console.log(err)
        res.send('you have a problem')
    }
})

// http://localhost:5000/food/delete/:id
foodRoute.delete('/delete/:id', async (req,res)=>{
    try{
    const {id} = req.params
    const deleteFood = await foodSchema.findByIdAndDelete(id)
    res.status(200).json({msg:'you could delete food'})
}
catch(err){
    console.log(err)
    res.send('you have a problem')
}
})

// localhost:5000/food/getunique/:id

foodRoute.get('/getunique/:id', async(req,res)=>{
    try{
        const {id} = req.params

        const getfood = await foodSchema.findById(id)
        res.status(200).json({msg: "you get the food", getfood})
        }
    catch(err){
        console.log(err)
        res.send("you have a problem")
    }
})






module.exports = foodRoute