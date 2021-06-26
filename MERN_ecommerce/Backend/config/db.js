require('dotenv').config()
const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser:true,useUnifiedTopology:true })
        console.error("MONGODB connection successfulll !")
    }
    catch(error){
        console.error("MONGODB connection FAIL !")
        process.exit(1)
    }
}

module.exports=connectDB;