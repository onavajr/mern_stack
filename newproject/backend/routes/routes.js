const express = require('express')

const {
    getPortfolios,
    getPortfolio,
    createPortfolio,
    deletePortfolio,
    updatePortfolio
} = require('../controllers/controller')

const router = express.Router()

//GET all projects
router.get('/', getPortfolios)

//GET a single projects
router.get('/:id', getPortfolio)

//POST a new project
router.post('/',createPortfolio)

//DELETE a new project
router.delete('/:id', deletePortfolio)

//UPDATE a new project
router.patch('/:id', updatePortfolio)

module.exports = router