const express = require('express');
const router = express.Router();

// Controller functions (you need to implement these)
const {
    createComment,
    getComments,
    updateComment,
    deleteComment
} = require('../controllers/blogCommentController');

// Route to create a new comment
router.post('/comments', createComment);

// Route to get all comments for a blog post
router.get('/comments/:postId', getComments);

// Route to update a comment
router.put('/comments/:commentId', updateComment);

// Route to delete a comment
router.delete('/comments/:commentId', deleteComment);

module.exports = router;
