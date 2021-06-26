const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    // console.log( (req.headers.authorization).split(" ")[1] )
    try{
        const decoded= jwt.verify( (req.headers.authorization).split(" ")[1],process.env.jwt_key);
        req.userdata=decoded;
        next();
    }
    catch(err){
        return res.status(401).json({error:err + "........faileddd"})
    }
}