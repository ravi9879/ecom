const mconnect = require('./db')
const express = require('express');
const cp = require('cookie-parser');
const cors = require('cors');
const dy = require('body-parser');
const app = express();


mconnect() ;


// app.use(cp());
app.use(cors());
app.use(dy.json());
app.use(dy.urlencoded({ extended: true }));
 

app.get('/' , (req,res) => {
    res.send("hi") ;
})

app.listen(800 , () => {
    console.log("listening") ;
})