const express = require('express');
const hbs = require('hbs');

var app = express();

//hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname + "/public"));


app.get('/',(req,res) => {
    res.render('home.hbs',{
        message : 'Hello World',
        pageTitle: 'Home Pagee',
        CurrentYear:new Date().getFullYear()
    });
});


app.get('/about',(req,res) => {
    res.render('about.hbs',{
        pageTitle: 'About Pagee',
        CurrentYear:new Date().getFullYear()
    });
});

app.get('/bad',(req,res) => {
    res.send({
        ErroeMessage : " hai"
    });
});


app.listen(3000,() => {
    console.log("Server is Running");
});