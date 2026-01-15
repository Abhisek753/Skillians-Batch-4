const express=require("express");
const app=express();
const userRoute=require("./src/routes/userRoutes")

app.use(express.json())
app.get("/",(req,res)=>{
    res.send({name:"Arun"})
})

app.use("/api",userRoute);


module.exports=app;