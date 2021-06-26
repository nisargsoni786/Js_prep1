const express=require('express')
const router=express.Router()
const User=require('../models/usermodel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const checkaouth=require('../middleware/checkaouth');

router.get('/', (req,res,next)=>{
    res.json({dd:'bd'})
})
router.get('/checkjwt', checkaouth ,(req,res,next)=>{
    res.send('yes you are authenticated !!!')

})

router.post('/signup',(req,res,next)=>{
    User.find({username:req.body.username}).exec()
    .then(result=>{
        // console.log(result)
        if(result.length==0){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err){
                    // console.log('abc')
                    res.json({error:err})
                }
                else{
                    // console.log('akhvehk')
                    const user = new User({
                                fullname:req.body.fullname,
                                username:req.body.username,
                                password:hash
                            })
                            user.save()
                            .then(data=>{
                                res.status(200).json(data)
                            })
                            .catch(err=>{
                                res.status(200).json({error:err})
                            })
                }
            })
        }
        else{
            // console.log(';lklnkhvjgv')
            res.status(200).json({message:"User already Exist !"})
        }
    })
    .catch(err=>{res.status(200).json({error:err})})

})

router.post('/login',(req,res,next)=>{
    User.find({username:req.body.username}).find()
    .then(doc=>{
        if(doc.length>0){
                bcrypt.compare(req.body.password,doc[0].password,(err,result)=>{
                    if(err){
                        res.json({error:err})
                    }
                    else{
                        if(result){
                            const token=jwt.sign(
                                {
                                    username:doc[0].username
                        
                                }, process.env.jwt_key,
                                {
                                    expiresIn:"1h",
                        
                                })
                                console.log(token+' \n login successful....')
                                res.status(200).json({result:result,Token:token,LOGIn:'Successful'})   

                        }
                        else{
                            res.json({error:"password not match !!"})
                        }
                    }
                })
        }
        else{
            res.json({error:"User not found !"})
        }
    })
    .catch(err=> res.json({error:err}))
})

module.exports=router;