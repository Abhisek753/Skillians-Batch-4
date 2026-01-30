const express=require("express");
const userRoutes=require("./src/routes/userRoutes")
const productRoutes=require("./src/routes/productRoute")
const cartRoutes=require("./src/routes/cartRoute")
const orderRoutes=require("./src/routes/orderRoute")
const app=express();
app.use(express.json());

app.use("/uploads",express.static("uploads"))

app.use("/api/user",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/orders",orderRoutes)

module.exports=app;