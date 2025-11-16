import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", function (req, res) {
  res.send("hello");
});

const PORT = process.env.PORT;
connectDB();

app.listen(PORT, () => {
  console.log("Server is running at port:" + PORT);
});
