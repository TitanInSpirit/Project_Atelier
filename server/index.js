require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json);

app.get('/products', (req, res) => {
  res.send('Hello Products Endpoint!');
});

app.get('/cart', (req, res) => {
  res.send('Hello Cart Endpoint!');
});

app.get('/answers', (req, res) => {
  res.send('Hello Answers Endpoint!');
});

app.get('/questions', (req, res) => {
  res.send('Hello Questions Endpoint!');
});

app.get('/relatedProducts', (req, res) => {
  res.send('Hello Related Products Endpoint!');
});

app.get('/reviews', (req, res) => {
  res.send('Hello Questions Endpoint!');
});

app.get('/reviewsMetadata', (req, res) => {
  res.send('Hello Reviews Metadata Endpoint!');
});

app.get('/styles', (req, res) => {
  res.send('Hello Styles Endpoint!');
});

app.listen(port, () => {
  console.log(`Express server listening on Port ${port}`);
});
