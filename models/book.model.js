const mongoose = require("mongoose");
const path = require("path");

const bookSchema = new mongoose.Schema({
    likes : {type:Number,required:true,default:0},
    
     Content : {type:Number,required:true},
  
    
},{
   versionKey:false,
   timestamps : true
})

const Books = mongoose.model("book",bookSchema);

module.exports = Books;