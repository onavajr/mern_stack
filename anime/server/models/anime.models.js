const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
    title: String,
    genre: String,
    date: Date,
}, {timestamps:true})

const Anime = mongoose.model("Anime", AnimeSchema);

module.exports = Anime;