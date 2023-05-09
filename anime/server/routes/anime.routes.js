const AnimeController = require("../controller/Anime.controller");

module.exports = (app) => {
    app.get("/api/anime", AnimeController.findAll);
    app.get("/api/anime/:id", AnimeController.findOne);
    app.post("/api/anime", AnimeController.create);
};