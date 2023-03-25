const Candy = require('../nideks/candy.models');

module.exports({
    findAll: (req, res) => {
        Candy.find()
            .then(allCandies => res.json(allCandies))
            .catch(err => res.json({message: "Something went wrong", error:err}))
    },

    findOne: (req, res) => {
        Candy.findById(req,params.id)
            .then(candy => res.json(candy))
            .catch(err => res.json({message:"Something went wrong", error:err}));
    },

    create: (req,res) => {
        
    }
})