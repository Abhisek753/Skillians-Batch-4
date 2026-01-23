const express=require("express");
const authMiddleware = require("../middleware/auth");
const { addProduct, editProduct, getProduct, getAllProducts } = require("../controllers/productController");

const router=express.Router();

router.post("/",authMiddleware,addProduct);
router.put("/:id",authMiddleware,editProduct);
router.get("/",authMiddleware,getProduct);
router.get("/all",authMiddleware,getAllProducts);



module.exports=router