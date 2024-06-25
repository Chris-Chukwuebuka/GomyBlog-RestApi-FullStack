const Blog = require("../models/blogModel");
const Comment = require("../models/commentModel");

//import the getPagination helper
const getPagination = require("../helpers/pagination");

//import the getBlogById and getBlogByTitle services
const {
  getBlogById,
  getBlogByTitle,
  getBlogs,
} = require("../services/blogServices");

//create a new blog
const createNewBlog = async (req, res) => {
  const { userId } = req.user;
  try {
    //get the blog data from the request body
    const { title, content } = req.body;
    const blog = await Blog.create({ title, content, user: userId });

    //check if the blog is created successfully
    if (!blog) {
      return res.status(400).json({ error: "Blog Creation Failed!!" });
    }
    return res
      .status(201)
      .json({ message: "Blog Created Successfully ", blog });
    //catch any error that occurs and send a response to the client
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//updating a blog
const updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { userId } = req.user;
    const { title, content } = req.body;

    //check if the blogId exists in the database
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, {
      title,
      content,
      user:  userId ,
    });

    //check if the blog is updated successfully
    if (!updatedBlog) {
      return res.status(400).json({ error: "Blog Update Failed!!" });
    }
    return res
      .status(200)
      .json({ message: "Blog Updated Successfully", updatedBlog });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//deleting a blog
const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    //check if the blogId exists in the database
    const deletedBlog = await Blog.findOneAndDelete({_id:blogId});

    //check if the blog is deleted successfully
    if (deletedBlog) {
      return res.status(200).json({ message: "Blog Deleted Successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//getting all blogs
const getAllBlogs = async (req, res) => {
  try {

    //get the pagination object
    const { skip, limit } = getPagination(req.query);

    //get all blogs from the database
    const blogs = await getBlogs(skip, limit);

    //check if the blogs are found if not found send back a error response
    if (!blogs) {
      return res.status(400).json({ error: "Something went wrong" });
    }
    return res.status(200).json({ message: " Blogs Found ! ", blogs });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addCommentToBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { userId } = req.user;
    const { comment } = req.body;

    //check if the blogId exists in the database
    const blogExists = await getBlogById(blogId);

    if (!blogExists) {
      return res.status(404).json({ error: "Blog Not Found" });
    }
    //add a new  comment to the blog
    const newComment = await Comment.create({ comment, user:  userId  });

    if (!newComment) {
      return res.status(400).json({ error: "Comment Creation Failed!!" });
    }
    //add the new comment to the blog or push the new comment to the comments array
    blogExists.comments.push(newComment._id);

    //save the blog with the new comment
    await blogExists.save();

    return res
      .status(201)
      .json({ message: "Comment Added Successfully", newComment });

    //catch any error that occurs and send a response to the client
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//get blogs by title
const getSingleBlogByTitle = async (req, res) => {
  try {
    const { blogTitle } = req.params;
    const blog = await getBlogByTitle(blogTitle);

    if (!blog) {
      return res.status(404).json({ error: "Blog Not Found" });
    }
    return res.status(200).json({ message: "Blog Found", blog });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createNewBlog,
  addCommentToBlog,
  getSingleBlogByTitle,
  getAllBlogs,
  updateBlog,
  deleteBlog,
};
