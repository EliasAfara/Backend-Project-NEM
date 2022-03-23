const Product = require('../model/Products');

const getProducts = async (req, res, next) => {
  let products = await Product.find();

  if (!products) {
    return res.status(404).json({
      message: 'No products',
    });
  }

  res.status(200).json({ products });
};

const addProduct = async (req, res, next) => {
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
};

const getProductByID = async (req, res, next) => {
  const productID = req.params.id;
  let product = await Product.findById(productID);

  console.log(product);

  if (!product) {
    res.status(404).json({ message: 'No product' });
    next();
  }

  res.status(200).json({ product });
};

const updateProduct = async (req, res, next) => {
  const productID = req.params.id;
  const { name, description, price, imgURL, quantity, isFeatured } = req.body;
  let product = await Product.findByIdAndUpdate(productID, {
    name,
    description,
    price,
    imgURL,
    quantity,
    isFeatured,
  });

  product = await product.save();

  if (!product) {
    return res.status(500).json({ message: 'Cannot save product' });
  }

  res.status(200).json({ product });
};

const deleteProduct = async (req, res, next) => {
  const productID = req.params.id;
  let product = await Product.findByIdAndRemove(productID);
  if (!product) {
    return res.status(500).json({ message: 'Cannot delete product' });
  }

  res.status(200).json({ message: 'Product deleted' });
};

exports.getProducts = getProducts;
exports.addProduct = addProduct;
exports.getProductByID = getProductByID;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
