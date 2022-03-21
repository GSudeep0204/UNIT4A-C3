const express = require("express");
const router = express.Router();

const Publication = require("../models/publication.model");

router.post("publications",async (req,res)=>{
    try{
        const publications = await Publication.create(req.body);
        return res.send(publications)
    }

    catch(e){
        return {message : e};
    }
})

router.get("publications",async (req,res)=>{
    try{

        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 10;
        const skip = (page-1)*pagesize;

        const publications = await Publication.find().skip(skip).lean().exec();
        return res.send(publications)
    }

    catch(e){
        return {message : e};
    }
})

router.patch("publications/:id",async (req,res)=>{
    try{
        const publications = await Publication.findByIdAndUpdate(req.params.id).lean().exec();
        return res.send(publications)
    }

    catch(e){
        return {message : e};
    }
})

router.get("publications/:id",async (req,res)=>{
    try{

       

        const publications = await Publication.findById(req.params.id,req.body,{new:true}).lean().exec();
        return res.send(publications)
    }

    catch(e){
        return {message : e};
    }
})

router.delete("publications/:id",async (req,res)=>{
    try{
        const publications = await Publication.findByIdAndDelete(req.params.id);
        return res.send(publications)
    }

    catch(e){
        return {message : e};
    }
})

module.exports=router;