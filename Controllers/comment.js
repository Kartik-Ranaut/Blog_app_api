const Comments = require("../models/Comments");


exports.postComment=async(req,res)=>{
    try{
        const {message,uId,bId,name}= req.body;
        // try to add
        const response= await Comments.create({message,uId,bId,name});

        res.status(200).json({
            success:true,
            message:"data entered correctly",
            data:response,
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"data could not entered",
        })
    }
}

exports.getComment= async(req,res)=>{
    try{
        const {bId}=req.body;
        const data= await Comments.find({bId});
        res.status(200).json({
            success:true,
                message:"data fetched correctly",
                data:data,
        })
    } catch(error){
        res.status(500).json({
            success:false,
            message:"data could not fetched",
        })
    }
   
}
