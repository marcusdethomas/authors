const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [
            true,
            'Author name is required.'
        ]
    },
    },
    {timestamps: true}
);
const Author = mongoose.model("Author", AuthorSchema);
//const test = new Author({name:'Flo Jo'});
//Author.create(test);
//console.log(test); 
module.exports = Author;