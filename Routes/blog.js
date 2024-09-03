const express = require("express");
const router = express.Router();

const {getPosts} = require("../Controllers/getPost");
const {createPost}= require("../Controllers/createPost");
const {deletePost}=require("../Controllers/deletePost");
const {login, signup} = require("../Controllers/Auth");
const {getComment,postComment}= require("../Controllers/comment");
const {auth}= require("../Middlewares/auth");
const { getaPosts } = require("../Controllers/getaPost");

router.get("/posts",getPosts);
router.post("/create",createPost);
router.delete("/delete",deletePost);
router.get("/getaPost/:_id",getaPosts);
//auth routes
router.post("/login", login);
router.post("/signup", signup);

//comments
router.post("/postcomment",auth,postComment);
router.post("/getcomment",getComment);


router.post("/test",auth,(req,res)=>{
    res.status(200).json({
        success:true,
        data:req.user,
        message:"the token is valid and verified"
    })
})
module.exports = router;
