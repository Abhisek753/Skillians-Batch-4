const jwt=require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET=process.env.JWT_SECRET;

const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    console.log(authHeader,"token111")
    if(!authHeader){
        return res.status(401).json({message:"Token missing"});
    }
    const token=authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Invalid token format"});
    }

    jwt.verify(token, JWT_SECRET,(err,decoded)=>{
      console.log(token,JWT_SECRET,"test log in middleware");
      if(err){
        return res.status(403).json({message:"Invalid or expired token"});
      }
       req.user=decoded;
       next()
    });

       
}

module.exports=authMiddleware