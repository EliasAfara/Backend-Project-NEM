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

router.post('/', async (req, res, next) => {
  console.log(req.body);
  const { name, description, price, imgURL, quantity, isFeatured } = req.body;
  let product = new Product({
    name,
    description,
    price,
    imgURL,
    quantity,
    isFeatured,
  });

  product = await product.save();

  if (!product) {
    return res.status(500).json({
      message: 'Cannot add product',
    });
    next();
  }

  res.status(201).json({ product });
});

module.exports = router;
