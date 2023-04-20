const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
    Title: String,
    Genre: String,
    Date: Date,
}, {timestamps:true})

const Anime = mongoose.model("Anime", AnimeSchema);

module.exports = Anime;