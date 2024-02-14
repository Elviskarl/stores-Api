const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the product name']
  },
  price: {
    type: Number,
    required: [true, 'The product Price should be provided']
  },
  featured:{
    type: Boolean,
    default: false
  },
  rating:{
    type: Number,
    default: 4.5
  },
  createdAt:{
    type: Date,
    default: Date.now()
  },
  company:{
    type: String,
    // enum:['IKEA','liddy','caressa','marcos'],
    enum:{
      values: ['IKEA','liddy','caressa','marcos'],
      message: '{VALUE} is not supported.'
    }
  }
});

module.exports = mongoose.model('product',productSchema);