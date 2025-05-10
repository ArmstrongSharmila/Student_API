const mongoose=require('mongoose');


const productschema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true

  },
  category:{
    type:String,
    required:true
  }
})

const products = mongoose.model('product' , productschema);
module.exports=products