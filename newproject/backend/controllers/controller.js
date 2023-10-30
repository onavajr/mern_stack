const Portfolio = require('../model/portfoliomodel')
const mongoose = require('mongoose')

//get all project portfolio
const getPortfolios = async (req, res) => {
    const portfolio = await Portfolio.find({}).sort({createdAt: -1})
    res.status(200).json(portfolio)
}


//get a single projectportfolio
const getPortfolio = async(req, res) => {
    const {id} = req.params
    const portfolio = await Portfolio.findById(id)

    if(!portfolio){
        return res.status(404).json({error: error.mssg})
    }

    res.status(200).json(portfolio)
}


//create new projectportfolio
const createPortfolio = async (req, res) => {
    const {title, phone, address} = req.body

    try {
        const portfolio = await Portfolio.create({title, phone, address})
        res.status(200).json(portfolio)
    } catch (error) {
        res.status(400).json({error: error.mssg})
    }
}

//delete a projectportfolio


//update a projectportfolio


module.exports = {
    getPortfolios,
    getPortfolio,
    createPortfolio
}