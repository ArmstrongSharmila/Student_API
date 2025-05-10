const routes = require("../routes/products")

const Product = require ('../models/productModels')


exports . getAllProducts= async(req,res)=>{
  try{
    const products = await Product.find();
   res.status(200).json({
    success:true,
    message:"get all products",
     data: products
   })
  }catch(error){
    res.status(500).json({
      success:false,
      message:"failed get",
      error:error.message
    })
  }
};


exports.getSingleProducts=async(req,res)=>{
  try{
    const {id} = req.params;
    const product = await Product.findById(id);

    if(!product){
      return res.status(404) .json({message:'product not found!'})
    }
    res.status(200).json(product)
  }catch(error){
    res.status(500).json({message:"server error",error:error.message})
  }
};

exports.createProduct=async(req,res)=>{
  try{
  const newProduct =new Product(req.body);
  const saveproduct = await newProduct.save();
  
  res.status(201).json({
    success:true,
    message:"product successfull created!",
    data:saveproduct,
  })

}catch(error){
  res.status(500).json({
    success:false,
    message:'server error',
    error:error.message
  })
}
}

exports.updateProduct=async(req,res)=>{
  try{
    const updateProduct =await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    )
    res.status(200).json({
      success:true,
      message:'update success',
      data:updateProduct
    })
  }catch(error){
    return res.status(500).json({
      success:false,
      message:'server error',
      error:error.message
    })
  }
}

exports.deleteProduct = async(req,res)=>{try{
const deleteProduct = await Product.findByIdAndDelete(
    req.params.id,
    req.body

  )
  res.status(200).json({
    success:true,
    message:'deleted successfully!',
    data:deleteProduct
  })
}catch(error){
  return res.status(500).json({
    success:false,
    message:"server error",
    error:error.message
  })
}
  
}