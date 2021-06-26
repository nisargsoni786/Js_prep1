const express=require('express');
const router=express.Router();

const {getallproduct,getallproductbyId}=require('./../controller/productcontroller')

// @Route api/products
// @access public
router.get('/',getallproduct);

// @Route api/products/id
// @access public
router.get('/:id',getallproductbyId);

module.exports=router;