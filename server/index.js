const express = require('express');
const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

const app = express();

app.listen(8080, () => console.log('listening on port 8080'));

app.get('/api/products', getProducts);

app.get('/api/products/:id', getProduct) 