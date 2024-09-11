const express = require('express');
const reservationSchema = require('../model/reservation'); // Import the Reservation schema
const User = require('../model/auth')
const reservationRoute = express.Router();

// http://localhost:5000/reservation/:userId
// Create a new reservation
reservationRoute.post('/:userId', async (req, res) => {
    try {

      const {userId} = req.params;
      const newReservation = new reservationSchema(req.body);
      const user = await User.findById(userId)
      await newReservation.save();
      res.status(201).json({msg:"Reservation created successfully",newReservation});
    } catch (err) {
      console.log(err)
    }
  });


// http://localhost:5000/reservation/getall
  reservationRoute.get('/getall', async (req, res) => {
    try {
      const reservations = await reservationSchema.find();
      res.status(200).json({msg:"you get all reservation",reservations});
    } catch (err) {
      console.log(err)
    }
  });

// http://localhost:5000/reservation/delete/:id
reservationRoute.delete('/delete/:id', async (req,res)=>{
  try{
  const {id} = req.params
  const deleteReservation = await reservationSchema.findByIdAndDelete(id)
  res.status(200).json({msg:'you delete reservation'})
}
catch(err){
  console.log(err)
  res.send('you have a problem')
}
})

// localhost:5000/reservation/getunique/:id

reservationRoute.get('/getunique/:id', async(req,res)=>{
  try{
      const { id } = req.params

      const getreservation = await reservationSchema.findById( id )
      res.status(200).json({msg: "you get reservation", getreservation})
      }
  catch(err){
      console.log(err)
      res.send("you have a problem")
  }
})




module.exports = reservationRoute;
