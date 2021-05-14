/*----------------------------------------------------------
* Name: book.js (controllers)
* Alias: 
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Luna
* Created: 06/05/2021       Updated: 13/05/2021
* Description:
 ----------------------------------------------------------*/

const Book = require('../models/book');

exports.addBook=(req,res)=>{
    let book = new Book({
        title:req.body.title,
        author:req.body.author,
        year:req.body.year
    });
    //res.send(book);
    book.save((err)=>{
        if(err){
            res.redirect('/practica7/fracaso');
            throw err;
        }
        else{
            res.redirect('/practica7/exito');
        }
    })
};

exports.redireccionarConsulta=(req,res)=>{
    res.redirect('/practica7/'+req.body.nombre+'/Consulta');
};
exports.consultarMarca=(req,res)=>{
    let mensaje='';
    Marca.find({title:req.params.title},(err,book)=>{
        if(err) throw err;
        if (book.length==0/*JSON.stringify(book)=='[]'*/){
            mensaje='No está registrado el book '+ req.params.nombre;
        }
        res.render('../views/resultadoConsulta.html',{encabezado:mensaje,lista:book});
    });
};

exports.actualizarMarca=(req,res)=>{
    let datos={};
    if(req.body.nombre) datos.nombre=req.body.nombre;
    if(req.body.establecimiento) datos.establecimiento=req.body.establecimiento;
    if(req.body.origen) datos.origen=req.body.origen;
    if(req.body.url) datos.url=req.body.url;
    console.log(datos);
    Marca.findOneAndUpdate({nombre:req.body.nombre},{$set:datos}, (err,book)=>{
       if(err){
           res.redirect('/practica7/fracaso');
           throw err;
       }else{
           res.redirect('/practica7/exito');
       }
    });
};

exports.eliminarMarca=(req,res)=>{
    Marca.findOneAndRemove({nombre:req.body.nombre},(err)=>{
        if(err){
           res.redirect('/practica7/fracaso');
           throw err;
       }else{
           res.redirect('/practica7/exito');
       }
    })
};