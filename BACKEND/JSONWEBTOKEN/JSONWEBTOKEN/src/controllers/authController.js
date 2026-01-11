const  jwt = require('jsonwebtoken');
const users=require("../data/users");
const JWT_SECRET=process.env.JWT_SECRET;

const login=(req,res)=>{
    const {email,password}= req.body;
    console.log(req.body,"test log")
    const user=users.find(u=>u.email===email && u.password===password);

    if(!user){
        return res.status(402).json({message:"Invalid email or password"})
    }
   const token = jwt.sign({id:user.id,email:email},JWT_SECRET,{expiresIn:"1h"} );

   res.json({message:"Login Sucessful",token})


}
const verifyUser=(req,res)=>{
    res.json({message:"Token is valid",user:req.user})
}

module.exports={
    login,
    verifyUser
}

//5-10 min and test your api.