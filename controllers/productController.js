const routes = require("../routes/products")

// exports.getAllProducts=((req,res)=>{
//   res.json({
//     message:'get all products is successfull!'
//   })
  

// });


exports . getAllProducts=(req,res)=>{
  try{
   res.status(200).json({
    success:true,
    message:"get all products",
    
   })
  }catch(error){
    res.status(500).json({
      success:false,
      message:"failed get",
      error:error.message
    })
  }
};
