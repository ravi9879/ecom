const express = require('express') ;
const mconnect = require('./db')

mconnect() ;

const app = express() ;

app.get('/' , (req,res) => {
    res.send("hi") ;
})

app.listen(800 , () => {
    console.log("listening") ;
})