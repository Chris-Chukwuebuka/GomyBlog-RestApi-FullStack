const express = require('express');

//import the blog controller
const {createNewBlog,getAllBlogs,updateBlog,deleteBlog} = require('../controllers/blogControllers');

//import the requireSignIn middleware
const {requireSignIn} = require('../middlewares/requireSignIn');

//import the addCommentToBlog controller
const {addCommentToBlog} = require('../controllers/blogControllers');

//import the getSingeBlogByTitle controller
const {getSingleBlogByTitle} = require('../controllers/blogControllers');

const router = express.Router();

//create a new blog
router.post('/',requireSignIn,  createNewBlog);

//add a comment to a blog post
router.post('/:blogId/comment', requireSignIn, addCommentToBlog);

//get single  blogs by title
router.get("/:blogTitle", getSingleBlogByTitle);

//get all blogs
router.get('/', getAllBlogs);

//update a blog
router.put('/:blogId/update', requireSignIn, updateBlog);

//delete a blog
router.delete('/:blogId/delete', requireSignIn, deleteBlog);

module.exports = router;