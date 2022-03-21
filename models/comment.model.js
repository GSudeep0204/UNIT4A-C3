const mongoose = require("mongoose");
const path = require("path");

const commentSchema = new mongoose.Schema({
    body : {type:String,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"},
     book_id:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"book"}
},{
   versionKey:false,
   timestamps : true
})

const Comment = mongoose.model("comment",commentSchema);

module.exports = Comment;