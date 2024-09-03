const mongoose = require("mongoose");
require("dotenv").config();
module.exports = ()=>{
    try{
        mongoose.connect(process.env.DATABASE_URL,{
        })
        .then(()=>{console.log("server connected")})
        .catch((err)=>{console.log("error occures"); console.log(err)});
    }
    catch(err){
        console.log("cannot connect to database");
        console.error(err.message);
        //iska matlab kya h ?
        process.exit(1);
    }
}