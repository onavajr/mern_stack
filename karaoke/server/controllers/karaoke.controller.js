const Karaoke = require('../models/karaoke.model');



module.exports = {
    getAll: (req, res) => {
        Karaoke.find({})
            .then((allKaraokeSongs) => {
                console.log(allKaraokeSongs);
                res.json(allKaraokeSongs);
            })

            .catch((err)=> {
                console.log("error found in getAll");
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {
        console.log(req.body);

        Karaoke.create(req.body)
            .then((newKaraokeSongs) => {
                console.log(newKaraokeSongs);
                res.json(newKaraokeSongs);
            })

            .catch((err)=> {
                console.log("error found in create");
                console.log(err);
                res.json(err);
            });
    },

}