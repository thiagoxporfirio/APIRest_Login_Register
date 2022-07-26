require('dotenv').config();

const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const assRouter = require('./routes/AssRouter')
const mongoose = require('mongoose')
const e = require('express')
const { subscribe } = require('./routes/userRouter')

mongoose.connect(process.env.MONGO_CONNECTION_URL, 
    { useNewUrlParse: true, useUnifiedTopology: true},
    (error) => {
       if(error) 
       console.log(error)
       else
       console.log("Mongo Connected")
    })

app.use('/user', express.json() ,userRouter)

app.use('/subscribe', express.json(), assRouter)

app.listen(process.env.PORT, () => {
    console.log('Server running')
})