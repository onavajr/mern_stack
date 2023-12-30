const express = require('express')

const router = express.Router()

//get all portfolios
router.get('/', (req, res) => {
    res.json({mssg: ' GET all portfolios'})
})

//get single portfolio
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single portfolio'})
})

//post new portfolio
router.post('/',(req,res) => {
    res.json({mssg: 'post a new workout'})
})

//delete portfolio
router.delete('/:id', (req,res) => {
    res.json({mssg: 'portfolio deleted'})
})

//update portfolio
router.patch('/:id',(req,res) => {
    res.json({mssg: 'post a new workout'})
})

module.exports = router