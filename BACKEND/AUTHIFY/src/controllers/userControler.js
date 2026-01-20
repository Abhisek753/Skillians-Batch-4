const bcrypt=require("bcrypt");
const User = require("../models/User");
const jwt=require("jsonwebtoken")

const signup=async (req,res)=>{
   try{
     const {name,email,password}=req.body;
     const hashPassword=await bcrypt.hash(password,12);
     const user=await User.create({
        name,
        email,
        password:hashPassword
     });
     res.status(201).json({message:"User Registered","user":user});

   }catch(err){
     res.status(400).json({error:err.message})
   }
}
const login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email})
        if(!user){
            return res.status(401).json({message:"Invalid credentials"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid credentials"});
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.json({message:"Login Sucess",token});

    }catch(err){
         res.status(500).json({error:err.message})
    }
}

module.exports={signup,login}