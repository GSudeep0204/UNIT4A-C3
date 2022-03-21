const mongoose = require("mongoose");
const path = require("path");

const publicationSchema = new mongoose.Schema({
    name : {type:String,required:true},
},{
   versionKey:false,
   timestamps : true
})

const Publiactions = mongoose.model("publication",publicationSchema);

module.exports = Publiactions;