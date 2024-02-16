import express  from "express";
import { connectDb } from "./config/database.js";
const app=express();  
import { config } from "dotenv";
import postrouter from "./routes/Post.js";
import userrouter from "./routes/User.js";
import cookieParser from "cookie-parser";

import cors from "cors"
// app.use(cors({
//     // origin:[process.env.FRONTEND_URL],
//     origin:"http://localhost:3000",
//     methods:["GET","POST","PUT","DELETE"],
//     credentials:true    // credential true is isliye krna pdta kyuki cookie wagera set nhi hoga  
//  }));
app.use(cors());

if(process.env.NODE_ENV!=="production"){
    config({path:"./config/.env"}) ;
}


//using middlewares //mandatory step
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()) ;


app.use("/api/v1",postrouter)

app.use("/api/v1",userrouter)


connectDb();


app.listen (process.env.PORT,()=>{
console.log(`server is running on port ${process.env.PORT}`)
})