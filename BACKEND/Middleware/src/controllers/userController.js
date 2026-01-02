const users=require("../config/data")


const getUsers=(req,res)=>{
  
    res.json(users);
};
const getUserById=(req,res)=>{
    const id=Number(req.params.id);
    res.json({id:id})
}

const createUser=(req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"name, email, password required"})
    }
    const newUser={name,email,password}
    res.status(201).json(newUser)
}
module.exports= {getUsers,getUserById,createUser}