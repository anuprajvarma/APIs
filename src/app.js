const exp = require('constants');
const exprss = require('express');
require('./db/conn')
const Student = require('./models/students')
const stu = require('./routers/student')
const app = exprss();

const port = 5000;

app.use(exprss.json());
app.use('/students',stu);

app.listen(port, function () {
    console.log("server is started on 5000")
})