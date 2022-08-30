var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/', function(req,res){
    res.render("home/index");
});
app.get('/formulario', function(req,res){
    res.render("admin/formulario");
});
app.get('/noticias', function(req,res){
    res.render("noticias/noticias");
});
app.listen(3000, function(){
    console.log('rodando...');
});