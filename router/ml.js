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
