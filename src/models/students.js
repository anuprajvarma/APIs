const mongoose = require('mongoose');
const validator = require('validator')

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email is already exit"],
        validator(value){
            if(!validator.isEmail()){
                throw new Error("invailed email")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    }
})

const Student = new mongoose.model('student',StudentSchema)

module.exports = Student 