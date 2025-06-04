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
app.options('*', cors()); 
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
app.use('/', require('./router/check-auth'));  
// app.use('/', require('./router/search'));  

app.listen(800 , () => {
    console.log("listening") ;
})






// const router = require('express').Router();
// const { getSimilarProducts } = require('./ml'); 

// const sampleProducts = [
//   { id: 1, name: 'Red Nike Running Shoes' },
//   { id: 2, name: 'Adidas Gym Shorts' },
//   { id: 3, name: 'Apple iPhone 13 Pro' },
//   { id: 4, name: 'Wireless Bluetooth Headphones' },
// ];

// router.post('/search', async (req, res) => {
//   const { query } = req.body;
//   const results = await getSimilarProducts(query, sampleProducts);
//   res.json({ results });
// }); 




// const use = require('@tensorflow-models/universal-sentence-encoder');
// const tf = require('@tensorflow/tfjs-node');

// let model;

// async function loadModel() {
//   if (!model) {
//     model = await use.load();
//   }
//   return model;
// }

// async function getSimilarProducts(query, products) {
//   const model = await loadModel();
//   const productNames = products.map(p => p.name);
//   const embeddings = await model.embed([query, ...productNames]);

//   const queryEmbedding = embeddings.slice([0, 0], [1]);
//   const productEmbeddings = embeddings.slice([1, 0]);
//   const scores = await tf.matMul(queryEmbedding, productEmbeddings, false, true).array();

//   const ranked = products
//     .map((p, i) => ({ ...p, score: scores[0][i] }))
//     .sort((a, b) => b.score - a.score);

//   return ranked.slice(0, 5); // top 5 results
// }

// module.exports = { getSimilarProducts };

