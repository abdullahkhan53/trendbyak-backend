import express from "express";
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv"
// import {dbConnect} from "./utils/mongodb.js"
import postRoute from "./routes/postRoutes.js" 
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




export default app;