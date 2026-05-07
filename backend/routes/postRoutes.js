const express = require("express")
const upload = require('../middlewares/upload.js');
const router  = express.Router()

const {
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
  createPost,
  deletePost
} = require('../controllers/postController.js');


// Public routes
router.get('/', getAllPosts);
router.get('/category/:category', getPostsByCategory);
router.get('/:slug', getPostBySlug);

// Admin routes
router.post('/create', upload.single('image'), createPost);
router.delete('/:id', deletePost);

module.exports = router;