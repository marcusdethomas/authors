const express = require('express');
const cors = require('cors');
const app = express(); 

app.use(cors()); 
app.use(express.json());
app.use(require('body-parser').urlencoded({extended: true}));   
app.use(express.urlencoded({ extended: true })); 

app.use(cors({ 
    origin:"http://localhost:3000" 
}));

require('../server/config/author.config');
require('../server/models/authors.model');
require('../server/controller/author.controller');
require('../server/routes/authors.routes')(app);

const server = app.listen(8000, () =>{
    console.log(`Up and running on port: ${server.address().port}`)
    });
    