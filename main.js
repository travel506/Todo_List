const http = require('http');
const fs = require("fs");
const express=require("express");
const app=express();
const port = 3000;

function readandServe(path,type,res)
{
    const data=fs.readFileSync(path);
    res.setHeader('Content-Type',type);
    res.end(data);
}

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
     readandServe("./index.html","text/html",res);
});

app.get("/script.js",(req,res)=>{
     readandServe("./script.js","text/javascript",res);
});

app.get('/style.css',(req,res)=>{
    readandServe("./style.css","text/css",res);
});

app.post("/",(req,res)=>{
    console.log(req.body);
});

app.listen(port,function()
{
console.log("app is live");
})