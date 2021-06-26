const express=require('express')
const app=express();
const morgan=require('morgan')
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

app.use(express.static('uploads'))

app.use(express.urlencoded({extended:false}));
app.use(express.json());
mongoose.connect('mongodb+srv://nisarg:'+process.env.mongo_pass+'@cluster0.z74iz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin' , '*')
    res.header('Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization')

    if(req.method==="OPTIONS"){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET')
        return res.status(200).json({})
    }
    next();
})

const productroute=require('./../api/routes/products')
const orderroute=require('./../api/routes/order')
const userroute=require('./../api/routes/user');

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/about.html')
})

app.post('/takeact',(req,res)=>{
    console.log(req.body)
    console.log(req.body.nnn)
    res.redirect('/')
})

app.use('/products',productroute);
app.use('/orders',orderroute);
app.use('/user',userroute)

app.use((req,res,next)=>{
    const error=new Error("Not Found !!!");
    error.status=404;                                   // for handling errorrs
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
})

module.exports=app;