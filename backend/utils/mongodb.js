// const mongoose = require("mongoose");
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const dbConnect = async() => {
    await mongoose.connect(process.env.MONGODBURL)
    .then(() => console.log('MongoDB Connected ✅'))
    .catch((err) => console.log(err));
}

