const AnimeController = require("../controller/Anime.controller");

module.exports = (app) => {
    app.get("/api/candies", AnimeController.findAll);
    app.get("/api/candies/:id", AnimeController.findOne);
    app.post("/api/candies", AnimeController.create);
};