import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true ,
        lowercase: true,
        unique: true
    },
    email : {
        type : String,
        require : true ,
        lowercase: true,
        unique: true
    },
    password : {
        type : String,
        require : [true,'password is required']
    }
},{timestamps:true})

const User = mongoose.model("user",userSchema)