const CandyController = require("../controller/candy.controller");

module.exports = (app) => {
    app.get("/api/candies", CandyController.getAll);
    app.get("/api/candies/:id", CandyController.findOne);
    app.post("/api/candies", CandyController.create);
};