const CandyController = require("../controller/candy.controller");

module.exports = (app) => {
    app.get("/api/candies", CandyController.findAll);
    app.("/api/candies/:id", CandyController.findOne);
    app.post("/api/candies", CandyController.create);
};