const exp = require('constants');
const exprss = require('express');
require('./db/conn')
const Student = require('./models/students')
const app = exprss();

app.use(exprss.json());

const port = 5000;

app.post("/students", (req, res) => {
    const user = new Student(req.body)
    //res.send(req.body)

    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})

app.listen(port, function () {
    console.log("server is started on 5000")
})