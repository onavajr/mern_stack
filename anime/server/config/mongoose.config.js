const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://127.0.0.0.1:27017/anime', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    .then(() => console.log('Connected to the database'))
    .catch((err) => console.log('Failed to connet to the database', err));