const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

//setting
app.set('port', process.env.PORT || 8080);


//implementando hbs
app.set('view engine', 'hbs');

//registrar el partials
hbs.registerPartials(__dirname + '/views/partials');

/*para ir a un sitio estático*/
app.use(express.static('public'));


//Elementos de la página principal 

app.get('/', function(req, res){
    res.render('index');
});

app.get('/index', function(req, res){
    res.render('index');
});

app.get('/#menu', function(req, res){
    res.render('index');
});

app.get('/#AcercaDe', function(req, res){
    res.render('index');
});

app.get('/#modelo', function(req, res){
    res.render('index');
});

app.get('/#video', function(req, res){
    res.render('index');
});

app.get('/#contacto', function(req, res){
    res.render('index');
});

app.get('*', function(req,res){
    res.sendFile(__dirname+'/public/template/error404.html')
})

app.listen(app.get('port'), () =>{
    console.log('Escuchando en el puerto', app.get('port'));
});
