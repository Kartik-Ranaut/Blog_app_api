const express= require("express");
const cookieParser= require("cookie-parser");
const app = express();

require("dotenv").config();

var cors = require("cors");
app.use(express.json());
const blogroutes = require("./Routes/blog");
app.use(cookieParser());

app.use(
    cors({
      origin: "*",
    })
  );
app.listen(process.env.PORT || 4000,()=>{
    console.log("server started");
  
})

const dbconnect = require("./Config/database");
dbconnect();
app.use("/api",blogroutes);
app.get("/",(req,res)=>{
    res.send("Server started my friend");
})