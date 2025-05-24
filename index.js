const mconnect = require('./db')
const express = require('express');
const cp = require('cookie-parser');
const cors = require('cors');
const dy = require('body-parser');
const app = express();


mconnect() ;


// app.use(cp());
app.use(cors({
    origin: "https://ecommerce-cyan-nine.vercel.app/",
    preflightContinue : true ,
    // methods: ["POST", "GET"],
    credentials: true
}));
app.use(dy.json());
app.use(dy.urlencoded({ extended: true }));
 

app.get('/' , (req,res) => {
    res.send("hi1") ;
})
 

app.use('/', require('./router/add-cart'));
app.use('/', require('./router/delete'));
app.use('/', require('./router/login'));
app.use('/', require('./router/sign_in'));
app.use('/', require('./router/data'));
app.use('/', require('./router/get-cart')); 
app.use('/', require('./router/payment')); 
app.use('/', require('./router/emptyCart')); 

app.listen(800 , () => {
    console.log("listening") ;
})