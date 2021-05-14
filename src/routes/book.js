/*----------------------------------------------------------
* Name: book.js (routes)
* Alias: Routes addressing
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Luna
* Created: 06/05/2021       Updated: 13/05/2021
* Description:
 ----------------------------------------------------------*/
 const express = require('express');
 const router = express.Router();
 
 const path = require('path');
 const controllerBook = require('../controllers/book');
 
 router.get('/search',controllerBook.search);
 router.post('/add', controllerBook.addBook);
 router.update('/update',controllerBook.updateBook);
 router.delete('/delete',controllerBook.deleteBook);
 
 router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/../views/index.html'));
 });
 
 
 module.exports = router;