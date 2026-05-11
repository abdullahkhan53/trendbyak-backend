import slug from "slug";
import Post from "../models/posts.js";

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get post by slug
export const getPostBySlug = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get posts by category
export const getPostsByCategory = async (req, res) => {
  try {
    const posts = await Post.find({ category: req.params.category }).sort({ createdAt: -1 });
    res.json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create post
export const createPost = async (req, res) => {
  try {
    const { title, description, content, amazonLink, category } = req.body;
    
    if(!title){
      res.status(404).json({message: "Title is Required"})
    }

    const image = req.file ? req.file.path : '';
    console.log("Body", req.body);
    console.log(req.file);

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');

    const post = new Post({
      title,
      slug: slug,
      description,
      content,
      image,
      amazonLink,
      category
    });

    await post.save();
    console.log(post)
    res.json({ success: true, post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete post
export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Post deleted!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};