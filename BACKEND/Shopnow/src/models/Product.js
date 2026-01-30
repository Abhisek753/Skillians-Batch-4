const mongoose =require("mongoose");

const productSchema=new mongoose.Schema({
     name:{type:String,required:true},
     price:{type:Number,required:true},
     description:String,
     category:String,
     image:String,
     createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
    

})
module.exports=mongoose.model("Product",productSchema)
