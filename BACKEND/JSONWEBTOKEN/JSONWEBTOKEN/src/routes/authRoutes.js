const express=require("express");
const router=express.Router();

router.post("/login",(req,res)=>{
  res.send("logged in")
  //login
})

router.get("/verify",(req,res)=>{
  res.send("verified")
  //verifyUser
})

module.exports=router;