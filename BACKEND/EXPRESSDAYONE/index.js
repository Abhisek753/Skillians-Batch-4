const express=require("express");
const app=express();

const user=[
    {id:1,name:"Arjun",role:"Student"},
    {id:1,name:"Neha",role:"student"},
    {id:1,name:"Rahul",role:"admin"}
]
app.get("/",(req,res)=>{
   res.send("Home Page");
});

app.get("/getuser",(req,res)=>{
   res.status(201).send(user);
});
app.get("/about",(req,res)=>{
   res.send("About Page")
})

app.get("/contact",(req,res)=>{
   res.send("Contact Page is visible")
})

app.get("/user/:id",(req,res)=>{
    res.send(req.params.id);
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

//create a server on port 4000
