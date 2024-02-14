const express = require('express');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const storeApiRouter = require('./routes/products');
require('express-async-errors');

const app = express();

// Middleware 
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
  res.send('<h1><a href="/api/v1/products">Store API</a></h1>');
});

// Products route
app.use('/api/v1/products',storeApiRouter);

// Error handling
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

async function start(){
  try{
    // Connect to Database
    await connectDB(process.env.MONGO_URI);
    app.listen(port,()=>{
    console.log(`The server was initialized on port: ${port}.`);
    })

  }catch(err){
  }
}
start();