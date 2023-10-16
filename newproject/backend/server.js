require('dotenv').config()
const express = require('express')

//exrpess app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/',(req, res) => {
    res.json({msg: 'Welcome to my webpage'})
})

//listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening to port', process.env.PORT)
})


