// const express= require("express")
import express from 'express'
import mongoose from 'mongoose'
import Userroute from './routes/user.routes.js'


// import dotenv from 'dovenv'


const app = express()

mongoose.connect( process.env.MONGO ).then( () => {
    console.log('Connected to data base')
} ).catch( (e) =>{
    console.log('Error')
})

app.use('/api/user' , Userroute)


app.listen( 3000, () => {
    console.log('Server is running on port 3000.........')
})