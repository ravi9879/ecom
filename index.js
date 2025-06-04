const mconnect = require('./db')
const express = require('express'); 
const cors = require('cors');
const dy = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');

mconnect() ;


// app.use(cp());
app.use(cors({ 
    origin: [
    "https://ecommerce-cyan-nine.vercel.app",
    "http://localhost:3000"
  ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

app.use(cookieParser());
app.use(dy.json());
app.use(dy.urlencoded({ extended: true }));


// app.use((req , res , next) => {
//     req.isLogin = req.get('Cookie')?.split('=')[1] || false 
//     const token = req.get('Cookie')//?.split('token=')[1] || false ;
//     // let isLogin = "Ravi" , i = 0  ; 
//     // while(token[i] != ';') {
//     //     isLogin = isLogin + token[i] ;
//     //     i++ ;
//     // }
//     req.token = token ;
//     // req.isLogin = isLogin ;
//     console.log(req.isLogin , req.token) ; 
//     next() ;
// }) ;
 

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
app.use('/', require('./router/check-auth'));  
// app.use('/', require('./router/search'));  

app.listen(800 , () => {
    console.log("listening") ;
})