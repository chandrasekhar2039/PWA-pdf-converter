const express=require("express");

const app=express();


app.get("/",function (req,res){
  res.send("ohh! hello");
})

app.listen(5000,function (){
  console.log("server is running on port:5000");
})
