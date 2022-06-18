const exp = require('constants');
const exprss = require('express');
require('./db/conn')
const Student = require('./models/students')
const app = exprss();

app.use(exprss.json());

const port = 5000;

app.post('/students',async(req,res)=>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){ 
        res.status(400).send(err);
    }
})


app.get('/students/:uid',async(req,res)=>{
    try{
        const id = req.params.uid;
       const studentsDB = await Student.findById(id);
       res.status(200).send(studentsDB);
    }catch(err){
        res.status(400).send(err);
    }
})

app.patch('/students/:uid',async(req,res)=>{
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

app.delete('/students/:uid',async(req,res)=>{
    try{
        const id = req.params.uid;
        const studentsDB = await Student.findByIdAndDelete(id);
        res.status(200).send(studentsDB)
    }catch(err){
        res.status(400).send(err);
    }
})

app.listen(port, function () {
    console.log("server is started on 5000")
})