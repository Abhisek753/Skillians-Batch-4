
const checkAuth=(req,res,next)=>{
  const  IsLoggedIn=true;
  if(!IsLoggedIn){
    return res.send("Access denied");
  }
  next()
};
module.exports=checkAuth;