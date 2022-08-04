const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    comment:{type: String, required:true},
    email:{type: String, required:true},
    role:{type: String, required:true},
});

const CommentModel = mongoose.model("comments", CommentSchema)
module.exports = CommentModel;