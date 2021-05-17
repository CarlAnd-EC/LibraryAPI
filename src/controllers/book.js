/*----------------------------------------------------------
* Name: book.js (controllers)
* Alias: 
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Luna
* Created: 06/05/2021       Updated: 14/05/2021
* Description:
----------------------------------------------------------*/

const Book = require('../models/book');
const { isValidObjectId } = require('mongoose');
const validator = require('validator');
exports.addBook=(req,res)=>{
  const validation = validate(req.body);
  if(validation.status===true){
    try {
      Book.findOne({title:req.body.title},(err,book)=>{
        if(err) throw err;
        if (book){
          res.status(400);
          res.send("Book already exists.");
        }
        else{
          const book = new Book({
            title:req.body.title,
            author:req.body.author,
            year:req.body.year
          });
          if(req.body.edition) book.edition = req.body.edition;
          if(req.body.publisher) book.publisher = req.body.publisher;
          if(req.body.country) book.country = req.body.country;
          if(req.body.genre) book.genre = req.body.genre;
          if(req.body.language) book.language = req.body.language;
          if(req.body.ISBN) book.ISBN = req.body.ISBN;
          if(req.body.DOI) book.DOI = req.body.DOI;
          if(req.body.pages) book.pages = req.body.pages;
          book.save((err)=>{
            if(err){
              res.status(400);
              res.send('Error 400: Bad request');
              throw err;
            }
            else{
              res.status(201);
              Book.findOne({title:req.body.title},(err,book)=>{
                res.send(`Successful addition. GUID: ${book._id}`);
              })
            }
          })
        }
      });
    } catch (err) {console.log(err);}
  }
  else{
    res.status(400);
    res.send("Invalid value(s).");
    return;
  }
};
exports.searchAll = (req,res)=>{
  Book.find((err,books)=>{
    if(err) throw err;
    if (books===null){
      res.send('The library is empty');
    }
    res.send(books);
  });
};
exports.searchByGUID = (req,res)=>{
  try {
    if(isValidObjectId(req.query.GUID)){
      Book.findById(req.query.GUID,(err,book)=>{
        if(err) throw err;
        if (book===null){
          res.status(404);
          res.send('The book was not found');
        }
        res.send(book);
      });
    }
    else{
      res.status(400);
      res.send('Error 400: Invalid GUID.');
    }
  } catch (err) {
    console.error(err);
  }
};
exports.searchByParams=(req,res)=>{
  try {
    if(req.query.year) req.query.year = Number(req.query.year);
    Book.findOne(req.query,(err,book)=>{
      if(err) throw err;
      if (book){
        res.send(book);
      }
      else{
        res.status(404);
        res.send('The book was not found');
      }
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updateBook=(req,res)=>{
  const validation = validate(req.body);
  if(validation.status===true){
    let data={};
    if(req.body.title) data.title = req.body.title;
    if(req.body.author) data.autho = req.body.author;
    if(req.body.year) data.year = eq.body.year;
    if(req.body.edition) data.edition = req.body.edition;
    if(req.body.publisher) data.publisher = req.body.publisher;
    if(req.body.country) data.country = req.body.country;
    if(req.body.genre) data.genre = req.body.genre;
    if(req.body.language) data.language = req.body.language;
    if(req.body.ISBN) data.ISBN = req.body.ISBN;
    if(req.body.DOI) data.DOI = req.body.DOI;
    if(req.body.pages) data.pages = req.body.pages;
    Book.findOneAndUpdate({title:req.body.title},{$set:data}, (err,book)=>{
      if(err){
        res.status(404);
        res.send('Error 404: Not found');
        throw err;
      }else{
        res.status(201);
        res.send('Successful update.');
      }
    });
  }
  else{
    res.status(400);
    res.send("Invalid value(s).");
    return;
  }
};

exports.deleteByGUID=(req,res)=>{
  try {
    if(isValidObjectId(req.query.GUID)){
      Book.findByIdAndRemove(req.query.GUID,(err)=>{
        if(err){
          res.status(400);
          res.send('Error 400: Bad request');
          throw err;
        }else{
          res.send('Successful deletion');
        }
      })
    }
    else{
      res.status(400);
      res.send('Error 400: Invalid GUID.');
    }
  } catch (err) {
    console.error(err);
  }
};
exports.deleteByParams=(req,res)=>{
  Book.findOneAndRemove(req.query,(err)=>{
    if(err){
      res.status(400);
      res.send('Error 400: Bad request');
      throw err;
    }else{
      res.send('Successful deletion');
    }
  })
};
exports.deleteAll=(req,res)=>{
  Book.deleteMany({},(err)=>{
    if(err){
      res.status(400);
      res.send('Error 400: Bad request');
      throw err;
    }else{
      res.send('All library entries were deleted.');
    }
  })
};

function validate(body){
  const val = {status:true};
  try {
    if(!body.title || !body.author || !body.year) throw new Error("Required value(s) are missing.")
    if(!validator.isAscii(body.title)) throw new Error("Invalid title name");
    if(!validator.isAscii(body.author)) throw new Error("Invalid author name");
    if(body.ISBN && !validator.isISBN(body.ISBN)) throw new Error("Invalid ISBN");
    if(body.DOI && !validator.isAlphanumeric(body.DOI)) throw new Error("Invalid DOI");
    if(body.tags){
      body.tags.forEach(element => {
        if(!validator.isAlpha(element)) throw new Error("Invalid Tag");
      });
    };
    if(body.publisher && !validator.isAscii(body.publisher)) throw new Error("Invalid publisher name");
    if(body.country && !validator.isAscii(body.country)) throw new Error("Invalid country");
    if(body.language && !validator.isAlpha(body.language)) throw new Error("Invalid language");
  } catch (error) {
    console.error(error);
    val.status = false;
    return val;
  }
  return val;
}
