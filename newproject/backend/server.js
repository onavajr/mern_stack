require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const newprojectRoutes = require('./routes/routes')



//exrpess app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/newproject', newprojectRoutes)

//listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening to port', process.env.PORT)
})


