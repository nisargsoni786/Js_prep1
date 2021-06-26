const Product=require('./../models/product');
const mongoose=require('mongoose');

// const getallproducts=async (req,res)=>{
//     try{
//         Product.find()
//     }
// }

const getallproduct=async(req,res)=>{
    Product.find({})
    .then(doc=>{
        res.json(doc)
    })
    .catch(err=>{
        res.status(500).json({message:err})
    })
}

const getallproductbyId=async(req,res)=>{
    Product.findById(req.params.id)
    .then(doc=>{
        
        res.json(doc)
    })
    .catch(err=>{
        res.status(500).json({message:err})
    })
}

module.exports={
    getallproduct,
    getallproductbyId,
}

