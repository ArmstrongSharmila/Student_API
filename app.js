const express=  require ('express');
const mongoose= require('mongoose');
const path = require('path');
const app = express();
const PORT = 3000


// envirment load?
require('dotenv').config();
app.use(express.json()); 
// connect mongodb
const connectDB = require('./config/connectDB');

connectDB()

//  middleware


const routeProducts =require('./routes/products')

app.use('/api/product' , routeProducts)



// error handlinng

// EXAMPLE route basic
app.get('/',(req,res)=>{
  res.send('hello');
  console.log('correct');
  
})


// SERVER
app.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`);
  
});