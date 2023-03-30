import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.js";
import eventRouter from "./routes/event.js";
import clientRouter from "./routes/client.js";
const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3001;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  return res.json({ message: "Server run" });
});

// Routes

app.use("/api/auth", authRouter);
app.use("/api", eventRouter);
app.use("/api", clientRouter);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${USER}:${PASSWORD}@cluster0.lqaliq3.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
