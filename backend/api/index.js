const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv")
// import {dbConnect} from "./utils/mongodb.js"
const postRoute = require("../routes/postRoutes")
// const PORT = process.env.PORT || 5000;

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




module.exports = app;