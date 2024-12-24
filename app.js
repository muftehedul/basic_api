
const express = require('express');
const app = express();

// ...existing code...

const blogCommentRoutes = require('./routes/blogCommentRoutes');

// ...existing code...

app.use('/api', blogCommentRoutes);

// ...existing code...

module.exports = app;