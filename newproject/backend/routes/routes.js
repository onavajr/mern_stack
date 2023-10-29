const express = require('express')
const Portfolio = require('../model/portfoliomodel')
const {
    getPortfolios,
    getPortfolio,
    createPortfolio
} = require('../controllers/controller')

const router = express.Router()

//GET all projects
router.get('/', getPortfolios)

//GET a single projects
router.get('/:id', getPortfolio)

//POST a new project
router.post('/',createPortfolio)

//DELETE a new project
router.delete('/:id', (req, res) => {
    res.json('Delete new project')
})

//UPDATE a new project
router.patch('/:id', (req, res) => {
    res.json('Update new project')
})

module.exports = router