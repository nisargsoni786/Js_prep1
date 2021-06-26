const express=require('express')
const mongoose=require('mongoose')
const router=express.Router();
const multer=require('multer');
const checkauth=require('./../middleware/checkauth')

const storage=multer.diskStorage({
    destination:function(req,file,cb) {
        cb(null,'./uploads');
    },
    filename: function(req,file,cb){
        cb(null,file.originalname) 
    }
})

const upload=multer({storage:storage});

const Product=require('./../models/productmodel')

router.get('/',checkauth,(req,res,next)=>{
    Product.find()
    .exec()
    .then(docs=>{
        console.log(docs)
        res.status(200).json(docs);
    })
    .catch(err => console.log(err))

})
    
router.post('/', checkauth, upload.single('productimage'),(req,res,next)=>{
    console.log(req.file)
    const prod=new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price,
        productimage: req.file.path
    })
    // const result=Product.insertMany(prod)
    prod.save()
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=> res.status(200).json({error:err}))

    // console.log(prod)
    // res.status(200).json({
    //     inproduct:"in the product...helloo....POST method",
    //     createdprod:prod
    // })
})


router.get('/:productid',checkauth ,(req,res,next)=>{
    const id=req.params.productid 
    console.log(id)
    Product.findById(id)
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc)
    })
    .catch(err=> console.log(err))   
});

router.patch('/:productid',checkauth,  (req,res,next)=>{
    const id=req.params.productid 
    console.log(id)
    Product.update({_id:id},{$set:{name:req.body.newname}})
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc)
    })
    .catch(err=> console.log(err))   
})

router.delete('/:productid',checkauth,(req,res,next)=>{
    const id=req.params.productid 
    console.log(id)
    Product.remove({_id:id})
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc)
    })
    .catch(err=> console.log(err))
})



module.exports=router
