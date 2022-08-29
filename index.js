const express = require('express');
const orderDetail = require('./orderDetail.json');
const cartDetail = require('./cartDetail.json');
const app = express();

app.get('/order-cart-api/order/orderDetail', (req, res) => {
  res.json(orderDetail);
})

app.get('/order-cart-api//cart/cartDetail', (req, res) => {
  res.json(cartDetail);
})

app.listen(3232, () => {
  console.log('mock is running');
})