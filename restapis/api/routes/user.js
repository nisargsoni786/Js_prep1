const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require('./../models/usermodel')

router.post('/signup',(req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length!==0){   
            return res.status(422).json({error:"User Exist Already",usr_id:user[0]._id})
        }
        else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{ 
                if(err){
                    return res.status(200).json({errorrrrrrrrrrr:err})
                }
                else{
                    const user=new User({
                        _id:new mongoose.Types.ObjectId(),
                        email:req.body.email,
                        password: hash
                        }) 
                    user.save()
                    .then(doc=>{
                        res.status(201).json({user_data:doc,message:"user created"})
                    })
                    .catch(err=> res.status(200).json({error:err}))
                }
            })
        }
    })    

})

router.post('/login',(req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        console.log(user+"..."+req.body.email)
        if(user.length===0){
            res.status(401).json({error:"user doesn't Exist"})
        }
        else{
            bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                if(err){
                    res.status(401).json({error:"error ocured !!!"})
                }
                else{
                    if(result){      // here we will use jwt token if password is correct
                        const token=jwt.sign(
                        {
                            userid:user[0]._id,
                            email:user[0].email,

                        }, process.env.jwt_key,
                        {
                            expiresIn:"1h",

                        }) 
                        res.status(200).json({message:"Auth Successful !", Token:token , user:result})
                    }
                    else{
                        res.status(401).json({error:"Auth failed !!!"})
                    }
                }
            })
        }
    })
    .catch(err=>{
        res.status(200).json({error:err})
    })
})



module.exports=router;