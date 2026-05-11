import express from "express";
import mongoose from "mongoose"; 
import dotenv from "dotenv";
import cors from "cors";
import postRoute from "./routes/postRoutes.js";
import {dbConnect}  from "./utils/mongodb.js";
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static('uploads'));

app.use('/api/posts', postRoute);

app.get('/', (req, res) => {
  res.json({ message: 'TrendByAK API Running! 🚀' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
  dbConnect()
});