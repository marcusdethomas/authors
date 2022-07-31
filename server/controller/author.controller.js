const Author = require('../models/authors.model');

module.exports = { 
    index:(req, res) =>{
        res.json({});
    },
    create:(req, res) =>{
        console.log(req.body);
    Author.create(req.body,
            )  
        .then((add) => {                
            res.json(add);
            console.log("Item was succesfully created.");
        })
        .catch((err) =>{
            console.log(err);
            res.status(400).json(err) // Multiple json responses will an http header error
        });
    },
    getSingle:(req, res) =>{
    Author.findById({_id: req.params._id})
        .then((single) => {
            res.json(single);
        })
        .catch((err) =>{
            console.log(err);
            res.json({msg: "Error retrieving from database", error:err})
        });

    },
    getAll:(req, res) =>{
    Author.find({})
        .then((allAuthors) => {
            res.json(allAuthors)
        })
        .catch((err) => {
            console.log(err, "Error getting all from database.");
            res.json({msg: "Error gathering from database.", error:err})
        })
    },
    update:(req, res) =>{
        Author.findByIdAndUpdate({_id: req.params._id},req.body,
        { runValidators: true,})
        .then((updated) => {
            res.json(updated);
        })
        .catch((err) =>{
        console.log(err);
        res.status(400).json(err)
    });},
    delete:(req, res) =>{
        Author.deleteOne({_id: req.params._id})
        .then((destroy) => {
            res.json(destroy);
        })
        .catch((err) =>{
        console.log(err);
        res.json({msg: "Error deleting from database", error:err});
    });}
}