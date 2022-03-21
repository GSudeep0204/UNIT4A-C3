const express = require("express");
const router = express.Router();

const Comment = require("../models/comment.model");

router.post("",async (req,res)=>{
    try{
        const comment = await Comment.create(req.body);
        return res.send(comment)
    }

    catch(e){
        return {message : e};
    }
})

router.get("",async (req,res)=>{
    try{
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 10;
        const skip = (page-1)*pagesize;

        const comment = await Comment.find().skip(skip).lean().exec();
        return res.send(comment)
    }

    catch(e){
        return {message : e};
    }
})

router.patch("/:id",async (req,res)=>{
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id).lean().exec();
        return res.send(comment)
    }

    catch(e){
        return {message : e};
    }
})

router.get("/:id",async (req,res)=>{
    try{
        const comment = await Comment.findById(req.params.id,req.body,{new:true}).lean().exec();
        return res.send(comment)
    }

    catch(e){
        return {message : e};
    }
})

router.delete("/:id",async (req,res)=>{
    try{
        const comment = await Comment.findByIdAndDelete(req.params.id);
        return res.send(comment)
    }

    catch(e){
        return {message : e};
    }
})

module.exports=router;