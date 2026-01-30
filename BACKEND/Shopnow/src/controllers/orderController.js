const Order = require("../models/Order");


const createOrder= async(req,res)=>{
   try{
      const {items,total}=req.body;
      if(!items || items.length==0){
        return res.status(400).json({error:"Order items required"});
      }
      const order=await Order.create({
         userId:req.user.id,
         items,
         total
          
      })

      res.status(201).json({message:"Order created",order});
   }catch(err){
      res.status(400).json({error:err.message});
   }
}

const getMyOrders= async(req,res)=>{
    try{
        const orders=await Order.find({userId:req.user.id});
        res.status(200).json({orders});
    }catch(err){
        res.status(400).json({error:err.message});
    }
}
module.exports={createOrder,getMyOrders};