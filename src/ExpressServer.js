/*----------------------------------------------------------
* Name: ExpressServer.js
* Alias: A basic library API hosted in an Express server.
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Luna
* Created: 06/05/2021       Updated: 13/05/2021
* Description:
 ----------------------------------------------------------*/
const express = require('express');
const book = require('./routes/book');
const path = require('path');
const app = express();
const PORT = 5000;
const publicURL = path.join(__dirname+'/views');

//Mongoose Configuration
const mongoose = require('mongoose');
const db_url = 'mongodb://localhost/dbLibraryAPI';
mongoose.connect(db_url,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error',console.error.bind(console,"Connection error"));

app.use(express.json());
app.use(express.static('views'));
app.use('/books',book);

app.get('/',(req,res)=>{
   res.sendFile(path.join(publicURL+'/index.html'));
});

app.listen(PORT,()=>{
    console.log(`Server running and listening on port: ${PORT}`);
});