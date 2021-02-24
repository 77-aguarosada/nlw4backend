import "reflect-metadata"
import express from "express";

const app = express();
import './database'

app.get("/",(request, response)=>{
   
    return response.json({mensage:"hello world"});
})

app.post("/",(request,response)=>{
    return response.json({mensage:"os dados foram salvos"})
})

app.listen(3333,()=>{
    console.log("server is runing");
});