// var express = require('express'); 
// var path=require('path')
// const bodyParser=require('body-parser')
// var app = express(); 
const http=require('http')
const app=require('./app')

const port=process.env.PORT || 9000;

const server=http.createServer(app);

server.listen(port);


































// app.set('view engine','hbs');
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json());
// app.use(express.static('views/img')); 
// app.get('/',(req,res)=>{
//     param={name:'Nisarg Soni',pic:`nisarg.png`}
//     res.render('home',param)
// });
// app.get('/about',(req,res)=>{
//     param={clg:"PDPU",rollno:"17BIT053"}
//     res.render('about',param)
// })
// app.listen(9000, function(err){ 
//     if (err) console.log("Error in server setup") 
//     console.log("Server listening on Port", 9000); 
// });