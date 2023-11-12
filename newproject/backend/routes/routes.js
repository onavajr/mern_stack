const express = require('express')

const {
    getPortfolios,
    getPortfolio,
    createPortfolio,
    deletePortfolio,
    updatePortfolio
} = require('../controllers/controller')

const router = express.Router()

//GET all portfolios
router.get('/', getPortfolios)

//GET a single portfolios
router.get('/:id', getPortfolio)

//POST a new portfolio
router.post('/',createPortfolio)

//DELETE a new portfolio
router.delete('/:id', deletePortfolio)

//UPDATE a new portfolio
router.patch('/:id', updatePortfolio)

module.exports = router