/*----------------------------------------------------------
* Name: book.js (routes)
* Alias: Routes addressing
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Luna
* Created: 06/05/2021       Updated: 14/05/2021
* Description:
 ----------------------------------------------------------*/
const express = require('express');
const router = express.Router();

const path = require('path');
const controllerBook = require('../controllers/book');

router.get('/',controllerBook.searchAll);
router.get('/searchByGUID',controllerBook.searchByGUID);
router.get('/searchByParams',controllerBook.searchByParams);
router.post('/add', controllerBook.addBook);
router.put('/update',controllerBook.updateBook);
router.delete('/deleteByGUID',controllerBook.deleteByGUID);
router.delete('/deleteByParams',controllerBook.deleteByParams);
router.delete('/reset',controllerBook.deleteAll);
module.exports = router;