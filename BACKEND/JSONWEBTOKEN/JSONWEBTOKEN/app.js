const express= require("express");
const app=express();
app.use(express.json())
const authRoutes=require("./src/routes/authRoutes")

app.use("/api",authRoutes);
// router.get("/product",authMiddleware,productRoute);
app.get("/",(req,res)=>{
    res.send("Jwt running")
})



module.exports=app;