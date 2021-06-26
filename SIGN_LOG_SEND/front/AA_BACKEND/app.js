const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors')
// var bodyParser = require('body-parser')
const dotenv =require('dotenv')

dotenv.config()

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex: true} )
const userrouter=require('./routes/user')

app.get('/',(req,res,next)=>{
    res.json("hello its home page")
})

app.use('/',userrouter)


module.exports=app;