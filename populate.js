require('dotenv').config();
const connectDB = require('./db/connect');
const productModel = require('./models/product');
const jsonProduct = require('./products.json');

async function start(){
  try{
    // connect to database
    await connectDB(process.env.MONGO_URI);
    await productModel.deleteMany();
    await productModel.create(jsonProduct);
    console.log('Connected to the database');
    process.exit(0);
  }catch(err){
    console.log(err);
    process.exit(1)
  }
}
start();