const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require("multer")
const dotenv = require("dotenv")

dotenv.config();    

cloudinary.config({
  cloud_name: process.env.API_FOLDER,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'trendbyak',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [{ width: 1000, height: 1500, crop: 'fill' }]
  }
});

const upload = multer({ storage });

module.exports = upload;