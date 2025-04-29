import express from 'express';
import mongoose from 'mongoose';
import dotenv from  'dotenv';
import cors from 'cors';
import passport from "./config/passport.js";
import authRoute  from "./routes/auth.route.js";
import session from "express-session"



const app = express()
const port = 3000
dotenv.config();



app.use(cors({
    origin: process.env.CLIENT_URI,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
app.use(express.json());
app.use(session({
    secret : process.env.COOKIE_KEY,
    resave : false,
    saveUninitialized : false,
}))




app.use(passport.initialize());
app.use(passport.session());

app.use("/auth",authRoute);

// CONNECTION TO MONGODB

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to mongoDb Successfull.")
}).catch((error)=>{
    console.log("error connecting to mongoDB..",error);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})