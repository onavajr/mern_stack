const Portfolio = require('../model/portfoliomodel')
const mongoose = require('mongoose')

//get all project portfolio
const getPortfolios = async (req, res) => {
    const portfolio = await Portfolio.find({}).sort({createdAt: -1})
    res.status(200).json(portfolio)
}

//get a single projectportfolio
const getPortfolio = async(req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Cannot find ID'})
    }
    
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
const deletePortfolio = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: error.mssg})
    }

    const portfolio = await Portfolio.findOneAndDelete({_id: id})

    if(!portfolio){
        return res.status(404).json({error: "Cannot find Id to delete"})
    }

    res.status(200).json(portfolio)
} 

//update a projectportfolio
const updatePortfolio = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Cannot find id'})
    }
    const portfolio = await Portfolio.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Cannot find id'})
    }

    res.status(200).json(portfolio)
}


module.exports = {
    getPortfolios,
    getPortfolio,
    createPortfolio,
    deletePortfolio,
    updatePortfolio
}