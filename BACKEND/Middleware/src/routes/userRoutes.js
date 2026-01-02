const express=require("express");
const { getUsers, getUserById,createUser } = require("../controllers/userController.js");
const hashPassword = require("../middleware/hashPassword.js");
const router=express.Router();

router.get("/",getUsers);
router.get("/user-details",(req,res)=>{
    res.send("test route");
})
router.post("/",hashPassword,createUser);
router.get("/:id",getUserById);

module.exports=router