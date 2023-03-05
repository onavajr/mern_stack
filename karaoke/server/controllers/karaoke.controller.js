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

    getOne: (req, res) => {
        console.log(req.params.id);

        Karaoke.findById(req.params.id)
            .then((oneKaraokeSongs) => {
                console.log(oneKaraokeSongs);
                res.json(oneKaraokeSongs);
            })

            .catch((err)=> {
                console.log("error found in getone");
                console.log(err);
                res.json(err);
            });
    },

    update: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);

        Karaoke.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updateKaraokeSongs) => {
                console.log(updateKaraokeSongs);
                res.json(updateKaraokeSongs);
            })

            .catch((err)=> {
                console.log("error found in update");
                console.log(err);
                res.json(err);
            });
    },

    delete: (req, res) => {
        console.log(req.params.id);

        Karaoke.findByIdAndDelete(req.params.id)
            .then((deletedKaraokeSongs) => {
                console.log(deletedKaraokeSongs);
                res.json(deletedKaraokeSongs);
            })

            .catch((err)=> {
                console.log("error found in delete");
                console.log(err);
                res.json(err);
            });
    },

}