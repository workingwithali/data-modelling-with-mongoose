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
        
    }

},{timestamps})

const User = mongoose.model('User',userSchema)