const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.post("",async (req,res)=>{
    try{
        const user = await User.create(req.body);
        return res.send(user)
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

        const user = await User.find().skip(skip).lean().exec();
        return res.send(user)
    }

    catch(e){
        return {message : e};
    }
})

router.patch("/:id",async (req,res)=>{
    try{
        const user = await User
        .findByIdAndUpdate(req.body._id,req.body,{new:true})
        .lean().exec();
        return res.send(user)
    }

    catch(e){
        return {message : e};
    }
})

router.get("/:id",async (req,res)=>{
    try{
        const user = await User.findById(req.params.id).lean().exec();
        return res.send(user)
    }

    catch(e){
        return {message : e};
    }
})

router.delete("/:id",async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        return res.send(user)
    }

    catch(e){
        return {message : e};
    }
})

module.exports=router;