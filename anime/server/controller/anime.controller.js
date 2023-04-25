const Anime = require('../models/anime.models');

module.exports = {
    findAll: (req, res) => {
        Anime.find()
        .then((allAnime) => res.json(allAnime));
    },
}

