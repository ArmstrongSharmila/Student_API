const mongoose= require('mongoose');

const connectDB= async()=>{
  try{
    const connectDB=await(mongoose.connect(process.env.DB_URL||"mongodb://localhost:27017/student"));

    
console.log('connected success!');

    
      
    }catch(error){
      console.log('error'.error.message);
      
    }
  }

  module.exports =connectDB;