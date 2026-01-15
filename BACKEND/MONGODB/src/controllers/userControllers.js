const User=require("../models/User");

const createUser =async (req,res)=>{
    try{
       const user=await User.create(req.body);
       res.status(201).json(user);
    }catch(err){
        res.status(400).json({message:err.message})
        console.log(err)
    }

}

const getUser=async (req,res)=>{
    const users=await User.find();
    res.json(users)
}

const updateUser=async (req,res)=>{
    const user= await User.findByIdAndUpdate(
        req.params.id,req.body
    );
    res.json(user);
}
const delateUser=async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({message:"User deleted"})
}

module.exports={createUser,getUser,updateUser,delateUser}
