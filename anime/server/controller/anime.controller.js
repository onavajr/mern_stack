const Anime = require('../models/anime.models');

module.exports = {
    findAll: (req, res) => {
        Anime.find()
            .then((allCandies) => res.json(allCandies))
            .catch((err) => res.json({message: "Something went wrong", error:  err}));
    },

    findOne: (req, res) => {
        Anime.findById(req, params.id)
            .then((anime) => res.json(anime))
            .catch((err) => res.json({message:"Something went wrong", error:err}));
    },

    create: (req,res) => {
        Anime.create(req.body)
        .then((newAnime) => res.json(newAnime))
        .catch((err)=> res.json({ message: "Something went wrong", error:err}));
        
    }
};