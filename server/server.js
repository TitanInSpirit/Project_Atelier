require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '/client/dist')));
app.use((req,res,next) => {
  console.log(
    `*=== New Request Logged: Type: ${req.method} REQUEST, URL: ${req.url} ===*`
  );
  next();
})

// Routes
app.get('/answers', (req, res) => {
  res.status(200).send('answers test');
});

app.get('/cart', (req, res) => {
  res.status(200).send('cart test');
});

app.get('/reviews', (req, res) => {
  res.status(200).send('reviews test');
});

app.get('/products', (req, res) => {
  res.status(200).send('products test');
});

app.get('/questions', (req, res) => {
  res.status(200).send('questions test');
});

app.get('/related', (req, res) => {
  res.status(200).send('related test');
});

app.get('/reviews/meta', (req, res) => {
  res.status(200).send('/reviews/meta test');
});

app.get('/styles', (req, res) => {
  res.status(200).send('styles test');
});

const port = process.env.port || 3000; // test

app.listen(port, () => console.log(`listening to port ${port}`));


