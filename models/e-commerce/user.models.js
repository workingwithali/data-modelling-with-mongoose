import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true ,
        lowercase: true,
        unique: true
    },
    email : {
        type : String,
        require : true ,
        lowercase: true,
        uniqued: true
    },
    password : {
        type : String,
        required : [true,'password is required']
    }
},{timestamps:true})

export const User = mongoose.model("user",userSchema)