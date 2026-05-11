import express from "express";
import upload from '../middlewares/upload.js'
const router  = express.Router()

import {
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
  createPost,
  deletePost
} from '../controllers/postController.js';


// Public routes
router.get('/', getAllPosts);
router.get('/category/:category', getPostsByCategory);
router.get('/:slug', getPostBySlug);

// Admin routes
router.post('/create', upload.single('image'), createPost);
router.delete('/:id', deletePost);

export default router;