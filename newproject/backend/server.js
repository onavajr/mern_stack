require('dotenv').config()
const express = require('express')
const myroutes = require('./routes/routes')
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
})

app.get('/',(req, res) => {
    res.json({msg: 'Welcome to my webpage'})
})

app.listen(process.env.PORT, () => {
    console.log('Listening to port', process.env.PORT)
})


