require('dotenv').config()

const express = require('express')
const portfolioRoutes = require('./routes/portfolios')
//express app
const app = express()

//middleware
app.use(express. json())

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/newproject/', portfolioRoutes)

//listening to port
app.listen(process.env.PORT, () => {
    console.log('listening to port', process.env.PORT)
})