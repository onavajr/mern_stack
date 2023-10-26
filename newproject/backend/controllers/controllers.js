const controller = require('../model/portfoliomodel')

//get all project portfolio



//get a single projectportfolio



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
    createPortfolio
}