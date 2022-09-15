const mongoose = require("mongoose")
const validator = require('validator');
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        validate(value) {
            if (!validator.isEmail(value)) {
              throw new Error("Please Enter valid email address");
            }},
            unique:true,
    },
})

const userModel = mongoose.model('userModel',userSchema );
module.exports = userModel