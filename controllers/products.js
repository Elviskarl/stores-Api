const product = require('../models/product');

async function getAllProducts(req,res){
  console.log(req.query);
  const {company} = req.query;
  const products = await product.find({
    company: {$regex:company, $options: 'i'},
    price: {$gt: 10, $lt: 30}
  })
    .sort('company price')
    .select('company createdAt price')
    // .limit(1)
  // throw new Error('testing Express Async-errors package');
  if(products){
    res.status(200).json({
      message:  'Products testing route',
      length: products.length,
      products
    });
  }else{
    res.status(404).json({message:'Could not find the requested item'});
  }
}

module.exports = getAllProducts;