const express = require('express');
const router = express.Router();
const Product = require('../model/Products');

// Controllers
const {
  getProducts,
  addProduct,
  getProductByID,
  updateProduct,
  deleteProduct,
} = require('../controllers/product-controller');

router.get('/', getProducts);
router.post('/', addProduct);
router.get('/:id', getProductByID);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
