const express=require("express");
const authMiddleware = require("../middleware/auth");
const { addProduct, editProduct, getProduct, getAllProducts } = require("../controllers/productController");
const upload = require("../middleware/uploads");


const router=express.Router();

router.post("/",authMiddleware,upload.single("image"),addProduct);
router.put("/:id",authMiddleware,upload.single("image"),editProduct);
router.get("/",authMiddleware,getProduct);
router.get("/all",authMiddleware,getAllProducts);



module.exports=router