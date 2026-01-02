const express = require("express");
const app=express();
const userRoutes=require("./routes/userRoutes");
const checkAuth = require("./middleware/checkAuth");
app.use(express.json())
const logger=(req,res,next)=>{
    console.log("I am blogger");
    next()
}
const timeLogger=(req,res,next)=>{
    console.log("Date Printed",Date().toString());
    next()
}

app.use(logger);
app.use(timeLogger)
app.use("/users",checkAuth,userRoutes);



module.exports=app;