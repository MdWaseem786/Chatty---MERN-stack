import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

const app = express();
app.use("/api/auth", authRoutes);

app.get("/", function(req,res){
    res.send("hello");
});


dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("Server is running at port:"+ PORT);
    connectDB();
});