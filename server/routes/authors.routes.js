const authorController = require('../controller/author.controller')

module.exports = (app) =>{
    app.get("/api/healthcheck",(req, res) => {
        res.json({msg:"All good!"})
    });
    app.get("/api", authorController.index);
    app.post("/api/authors", authorController.create);
    app.get("/api/authors", authorController.getAll);
    app.get("/api/authors/:_id", authorController.getSingle);
    app.put("/api/authors/:_id", authorController.update);
    app.delete("/api/authors/:_id", authorController.delete); 


    // Group Project

    app.get("/api/movies");
};