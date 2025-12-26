
const getUsers=(req,res)=>{
    console.log("server 1")
    res.json({name:"Ravi"})
};
const getUserById=(req,res)=>{
    res.send("id")
}
module.exports={getUsers,getUserById}