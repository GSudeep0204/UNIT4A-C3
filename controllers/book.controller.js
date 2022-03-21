const express = require("express");
const router = express.Router();

const Book = require("../models/book.model");

router.post("",async (req,res)=>{
    try{
       
        const books = await Book.create(req.body);
        return res.send(books)
    }

    catch(e){
        return {message : e};
    }
})

router.get("",async(req,res)=>{
    try{

        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 10;
        const skip = (page-1)*pagesize;

        const books = await Book.find().skip(skip).lean().exec();
        return res.send(books)
    }

    catch(e){
        return {message : e};
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const books = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.send(books)
    }

    catch(e){
        return {message : e};
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const books = await Book.findById(req.body.id).lean().exec();
        return res.send(books)
    }

    catch(e){
        return {message : e};
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const books = await Book.findByIdAndDelete(req.body.id);
        return res.send(books)
    }

    catch(e){
        return {message : e};
    }
})

module.exports=router;