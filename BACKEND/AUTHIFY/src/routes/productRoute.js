const express=require("express");
const authMiddleware = require("../middleware/auth");

const router=express.Router();

router.get("/",authMiddleware,(req,res)=>{
    res.send("Product fetch successfully")
});


module.exports=router