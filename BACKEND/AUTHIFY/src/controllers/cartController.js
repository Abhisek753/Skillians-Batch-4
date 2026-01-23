const { get } = require("mongoose");
const Cart=require("../models/Cart");

const addToCart=async (req,res)=>{
    try{
        const {productId,quantity}=req.body;
        const existingCartItem=await Cart.findOne({userId:req.user.id,productId});
        if(existingCartItem){
            existingCartItem.quantity +=quantity;
            await existingCartItem.save();
            return res.status(200).json({message:"Cart updated",cartItem:existingCartItem});
        }
        const newCartItem=await Cart.create({
            userId:req.user.id,
            productId,
            quantity:quantity || 1
        });

        res.status(201).json({message:"Item added to cart",cartItem:newCartItem});
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

const getCart=async (req,res)=>{
    try{
        const cartItems=await Cart.find({userId:req.user.id}).populate("productId","name price description category").populate("userId");    
        res.status(200).json({cartItems});
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

const removeFromCart=async (req,res)=>{
    try{
        const {id}=req.params;
        const cartItem=await Cart.findOneAndDelete({_id:id,userId:req.user.id});
        if(!cartItem){
            return res.status(404).json({error:"Cart item not found"});
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports={addToCart,getCart,removeFromCart}  ;