const express=require('express')
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('cors')
const PORT=process.env.PORT || 5000;
const connectDB=require('./config/db');
const Product=require('./models/product')


// ROUTES
const productroute=require('./routes/productroute')


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())
connectDB();

// @Route api/product
app.use('/api/products',productroute);

app.listen(PORT,()=>{
    console.log('listening at port number ',PORT)
})