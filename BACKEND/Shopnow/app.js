const express=require("express");
const userRoutes=require("./src/routes/userRoutes")
const productRoutes=require("./src/routes/productRoute")
const cartRoutes=require("./src/routes/cartRoute")
const app=express();
app.use(express.json());

app.use("/api/user",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);

module.exports=app;