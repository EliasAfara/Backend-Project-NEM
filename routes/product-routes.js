const express = require('express');
const router = express.Router();
const Product = require('../model/Products');

router.get('/', async (req, res, next) => {
  let products = await Product.find();

  if (!products) {
    return res.status(404).json({
      message: 'No products',
    });
  }

  res.status(200).json({ products });
});

module.exports = router;
