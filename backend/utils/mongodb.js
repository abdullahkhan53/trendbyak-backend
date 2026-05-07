const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

exports.dbConnect = async() => {
    await mongoose.connect(process.env.MONGODBURL)
    .then(() => console.log('MongoDB Connected ✅'))
    .catch((err) => console.log(err));
}

