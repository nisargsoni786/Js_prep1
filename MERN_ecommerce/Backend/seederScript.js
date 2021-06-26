require('dotenv').config()
const productdata=require('./data/product')

const connectDB=require('./config/db')
connectDB();

const Product=require('./models/product')

const importData= async ()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(productdata);
        console.log('data import successfully !')
        process.exit();
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }

}

importData();