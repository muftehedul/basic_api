const Blog = require('../models/Blog');

// Get all blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username email');
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new blog
const createBlog = async (req, res) => {
    const { title, content } = req.body;

    try {
        const blog = await Blog.create({
            title,
            content,
            author: req.user.id,
        });
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a blog
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });

        if (blog.author.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        await blog.remove();
        res.json({ message: 'Blog removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getBlogs, createBlog, deleteBlog };
