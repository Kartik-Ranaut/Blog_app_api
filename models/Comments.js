const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    message:{
        type:String,
        required:true,
        trim:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    uId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true,
        trim:true,
    },
    bId:{
        type:mongoose.Schema.ObjectId,
        ref:'Post',
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
        required:true
    },
});

module.exports = mongoose.model("Comments", commentsSchema);