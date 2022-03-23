const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  isFeatured: {
    type: Boolean,
  },
});

// 1st parameter is the name of the model, 2nd parameter contains the schema
module.exports = mongoose.model('Product', productSchema);

// stored as products in mongodb (plural form)
