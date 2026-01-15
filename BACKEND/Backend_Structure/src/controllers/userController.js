const users=require("../config/data")


const getUsers=(req,res)=>{
  
    res.json(users);
};
const getUserById=(req,res)=>{
    const id=Number(req.params.id);
    res.json({id:id})
}
module.exports= {getUsers,getUserById}