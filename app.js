const express = require("express");
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.get("/",(req,res)=>{
    res.render('home');
});



app.get("/register",(req,res)=>{
    res.render('register');
});

app.get("/login",(req,res)=>{
    res.render('login');
});





app.listen(3000,()=>{
    console.log('server started on port 3000');
});