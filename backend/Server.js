require('dotenv').config()

const express = require('express')
const userRoutes = require('./routes/user')

const mongoose = require('mongoose')
const productRoutes = require('./routes/products')

//flow : server.js ->routes->controllers->models

const app = express() //creates an express app

//MIDDLEWARE -> code that gets executed between getting request and we sending a reply
//eg. the app.get('/') is a middleware

//app.use(express.json()) looks if the request has some body in it
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//reacting to requests, we need route handler
app.get('/', (req,res) => {
    res.json({mssg:'Welcome to the app'})
}) //responds to incoming GET requests

//POST req handler :app.post()
//DELETE req handler :app.delete()
//But ye app to server.js me direct accessible hai.
//wo workouts.js me kaise kare?
//Soln : express router

//routes
app.use('/api/products', productRoutes) // Jobhi workout me created routes hai
app.use('/api/user', userRoutes)

//wo yaha direct use karskte
//syntax app.use(url,function)
//If I want to turn on these routes when we come to a specific path then
//app.use('/api/workouts', productRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => { //code runs this when we succcessfully connect db
        //listen for requests i.e listen to a certain port number
        app.listen(process.env.PORT, () => {
        console.log('Connected to db & listening on port',process.env.PORT)
        })
    })
    .catch((error) => { //iske waqt op me 'bad auth' likhke aata
        console.log(error)
    })


// //listen for requests i.e listen to a certain port number
// app.listen(process.env.PORT, () => {
//     console.log('listening on port',process.env.PORT)
// })


