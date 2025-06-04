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