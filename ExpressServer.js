const express = require('express');
const app = express();
const path = require('path');
const view_dir='./View';

app.use(express.static('View'));

app.get('/',(req,res)=>{
  res.send('Hola mundo!');  
});

app.get('/about',(req,res)=>{
  res.send('Acerca de nosotros ');  
});

app.get('/contact',(req,res)=>{
  res.send('Contacto ');  
});

app.get('/work',(req,res)=>{
  res.send('Trabajos destacados ');  
});

app.get('/practica1',(req,res)=>{
  res.sendFile(path.join(__dirname,view_dir,'responsiva.html'));  
});

app.listen(process.env.PORT, ()=>{
    console.log('Server on port: ',process.env.PORT)
});