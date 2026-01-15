const express=require("express");
const { createUser, getUser, updateUser, delateUser } = require("../controllers/userControllers");
const router=express.Router();

router.post("/users",createUser);
router.get("/users",getUser);
router.put("/users/:id",updateUser);
router.delete("/users/:id",delateUser);

module.exports=router;
