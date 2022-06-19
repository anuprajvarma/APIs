const express = require('express');
const router = express.Router();
const Student = require('../models/students')

router.post('/create',async(req,res)=>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){ 
        res.status(400).send(err);
    }
})


router.get('/:uid',async(req,res)=>{
    try{
        const id = req.params.uid;
       const studentsDB = await Student.findById(id);
       res.status(200).send(studentsDB);
    }catch(err){
        res.status(400).send(err);
    }
})

router.patch('/:uid',async(req,res)=>{
    try{
        const id = req.params.uid;
        const update = req.body;
        const studentsDB = await Student.findByIdAndUpdate(id,update,{
            new:true
        });
        res.status(200).send(studentsDB);
    }catch(err){
        res.status(400).send(err);
    }
})

router.delete('/:uid',async(req,res)=>{
    try{
        const id = req.params.uid;
        const studentsDB = await Student.findByIdAndDelete(id);
        res.status(200).send(studentsDB)
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router; 