const express = require('express')

const contactSchema = require('../model/contact')

const contactRoute = express.Router()

// http://localhost:5000/food/getall

contactRoute.get('/getall', async(req,res)=>{
    try{
        const contact = await contactSchema.find()
        res.status(200).json({msg:'you get all contact', contact})
    }
    catch(err){
     console.log(err)
     res.send('have a problem')
    }
})

//http://localhost:5000/contact/addcontact

contactRoute.post('/addcontact', async(req,res)=>{
    try{
        const newContact = new contactSchema(req.body)
        await newContact.save()
        res.status(200).json({msg:'you add contact', newContact})
    }
    catch(err){
        console.log(err)
        res.send('you have a problem')
    }
})

// http://localhost:5000/contact/update/:id

contactRoute.put('/update/:id', async (req,res)=>{
    try{
        const {id} = req.params
        const updateContact = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg:'you update your contact', updateContact})
    }
    catch(err){
        console.log(err)
        res.send('you have a problem')
    }
})

// http://localhost:5000/contact/delete/:id
contactRoute.delete('/delete/:id', async (req,res)=>{
    try{
    const {id} = req.params
    const deleteContact = await contactSchema.findByIdAndDelete(id)
    res.status(200).json({msg:'you delete contact'})
}
catch(err){
    console.log(err)
    res.send('you have a problem')
}
})

// localhost:5000/contact/getunique/:id

contactRoute.get('/getunique/:id', async(req,res)=>{
    try{
        const {id} = req.params

        const getcontact = await contactSchema.findById(id)
        res.status(200).json({msg: "you get contact", getcontact})
        }
    catch(err){
        console.log(err)
        res.send("you have a problem")
    }
})

module.exports = contactRoute

