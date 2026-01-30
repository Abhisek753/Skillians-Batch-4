const express=require("express");
const authMiddleware = require("../middleware/auth");
const { createOrder, getMyOrders } = require("../controllers/orderController");


const router=express.Router();

router.post("/",authMiddleware,createOrder);
router.get("/my",authMiddleware,getMyOrders);



module.exports=router