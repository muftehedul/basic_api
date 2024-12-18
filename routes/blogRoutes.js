const express = require('express');
const { getBlogs, createBlog, deleteBlog } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getBlogs);
router.post('/', protect, createBlog);
router.delete('/:id', protect, deleteBlog);

module.exports = router;
