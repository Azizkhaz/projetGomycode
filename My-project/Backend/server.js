// importation l dotenv
require('dotenv').config()
// importation lel express 
const express = require('express')

const app = express()

// importation lel cors

const cors = require('cors')

// l port eli bech ne5edmou aalyh
const port = process.env.port

// importation lel mongoose 

const connectdb = require('./config/connectdb')

const foodRoute = require('./routes/foodRoute')

const authRoute = require('./routes/auth')

const reservationRoute = require('./routes/reservationRoute')

const contactRoute = require('./routes/contactRoute')

connectdb()







app.use(express.json())

app.use(cors())

// path principale mte3 l movie eli bech t5adem byh les path lkol 
app.use('/food', foodRoute)

app.use('/auth',authRoute)

app.use('/reservation', reservationRoute )

app.use('/contact', contactRoute)

app.listen(port,err =>{
    err?console.log(err):console.log(`go to the port ${port}`)
})