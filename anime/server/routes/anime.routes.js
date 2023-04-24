const AnimeController = require('../controller/anime.controller');

module.exports = () => {
    app.get('/api/anime', AnimeController.findAll);
    app.get('/api/anime/:id' AnimeController.findOne);
    app.
}