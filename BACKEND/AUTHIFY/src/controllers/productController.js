
const Product =require("../models/Product");

const addProduct=async (req,res)=>{
    try{
        const {name,price,description,category} =req.body;
        const newProduct=await Product.create({
            name,
            price,
            description,
            category,
            createdBy:req.user.id,
        });
      res.status(201).json({message:"Product added",product:newProduct});
    }catch(err){
      res.status(400).json({error:err.message})
    }
}
const editProduct=async (req,res)=>{
    try{
       const {id} =req.params;
       const {name,price,description,category}=req.body;
       const product=await Product.findOneAndUpdate({_id:id},{name,price,description,category});
       if(!product){
        return res.status(404).json({error:"Product not found"});
       }
       res.status(200).json({message:"Product updated",product});
    }catch(err){
       res.status(400).json({error:err.message}) ;   
    }
}

const getAllProducts=async (req,res)=>{
     try{
        const products=await Product.find().populate("createdBy");
        res.status(200).json({products});
     }catch(err){
        res.status(400).json({error:err.message})
     }
}
const getProduct=async (req,res)=>{
   
    
}

module.exports={addProduct,editProduct,getProduct,getAllProducts}