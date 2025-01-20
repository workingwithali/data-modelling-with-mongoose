import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type :string ,
        require : true,
        lowercase : true,
        unique : true
    },
    email : {
        type : string,
        require : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : string,
        require : [true,"password is required"]
    }

},{timestamps})

const User = mongoose.model('User',userSchema)