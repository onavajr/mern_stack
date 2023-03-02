const KaraokeController = require('../controllers/karaoke.controller');

module.exports = (app) => {
    app.get('/api/karaoke', KaraokeController.getAll);
    app.post('/api/karaoke', KaraokeController.create);
}