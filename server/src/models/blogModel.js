const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
    }],

user:{
    
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true,
    
},



}, { timestamps: true });

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;