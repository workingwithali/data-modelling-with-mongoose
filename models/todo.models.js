import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},{timestamps: true})

const Todo = mongoose.model("Todo",todoSchema)
