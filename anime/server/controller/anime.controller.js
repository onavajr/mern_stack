const Anime = require('../models/anime.models');

module.exports = {
    findAll: (req, res) => {
        Candy.find()
        .then((allAnime) => res.json(allAnime));
    },
}

