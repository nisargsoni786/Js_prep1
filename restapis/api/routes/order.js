const express=require('express')
const mongoose=require('mongoose')
const router=express.Router();
const checkauth=require('./../middleware/checkauth')

const Order=require('./../models/ordermodel')

router.get('/',checkauth,(req,res,next)=>{
    Order.find()
    .select('_id product quantity')
    .populate('product')
    .exec()
    .then(doc =>{   
        res.status(200).json(doc)
    })
    .catch(err =>{
        res.status(200).json({error:err})
    })
})
router.post('/', checkauth, (req,res,next)=>{
    const order=new Order({
        _id:mongoose.Types.ObjectId(),
        quantity:req.body.quantity,
        product:req.body.product
    })
    
    order.save()
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err =>{
        res.status(200).json({error:err})
    })
})

router.get('/:orderid',checkauth ,(req,res,next)=>{
    const id=req.params.orderid
    Order.find({_id:id}).exec()
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(200).json({error:err})
    })
})

router.patch('/:orderid', checkauth , (req,res,next)=>{
    id=req.params.orderid
    Order.update({_id:id},{ $set:{quantity:req.body.quantity} }).exec()
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(200).json({error:err})
    })
})

router.delete('/:orderid',(req,res,next)=>{
    id=req.params.orderid;
    Order.remove({_id:id}).exec()
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(200).json({error:err})
    })
})

module.exports=router;