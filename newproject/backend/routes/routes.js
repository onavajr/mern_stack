const express = require('express')
const Portfolio = require('../model/portfoliomodel')
const router = express.Router()

//GET all projects
router.get('/', (req, res) => {
    res.json({mssg: 'Get all newprojects'})
})

//GET a single projects
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get single projects'})
})

//POST a new project
router.post('/', async(req, res) => {
    const {title, phone, address} = req.body

    try {
        const portfolio = await Portfolio.create({title, phone, address})
        res.status(200).json(portfolio)
    } catch (error) {
        res.status(400).json({error: error.mssg})
    }

    res.json({mssg: 'New Employer'})
})

//DELETE a new project
router.delete('/:id', (req, res) => {
    res.json('Delete new project')
})

//UPDATE a new project
router.patch('/:id', (req, res) => {
    res.json('Update new project')
})

module.exports = router