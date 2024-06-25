const mongoose = require("mongoose");   //importing mongoose
const Schema = mongoose.Schema;         //importing Schema


//creating a new schema for the comment
const commentSchema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    user:{
    
            type:mongoose.Schema.Types.ObjectId,
            ref: "user",
            required:true,
        
    },
}, { timestamps: true });

//creating a model for the comment schema
const Comment = mongoose.model('comment', commentSchema);

//exporting the comment model
module.exports = Comment; 