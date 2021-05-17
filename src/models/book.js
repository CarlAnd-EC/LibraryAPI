/*----------------------------------------------------------
* Name: book.js (models)
* Alias: 
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Luna
* Created: 06/05/2021       Updated: 14/05/2021
* Description:
----------------------------------------------------------*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
  title:{type:String, required:true}, 
  author:{type:String, required:true},
  year:{type:Number, required:true, min:1454, max:2021},
  edition:{type:Number, max:2},
  publisher:{type:String},
  country:{type:String},
  genre:{type:String},
  language:{type:String},
  ISBN:{type:Number, max:13},
  DOI:{type:String},
  pages:{type:Number, max:5},
  tags:{type:Array}
});

module.exports = mongoose.model('Book',BookSchema);