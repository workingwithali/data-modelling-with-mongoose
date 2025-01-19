import mongoose from "mongoose";

const subTodo = new mongoose.Schema({

},{timestamps:true})

const SubTodo = mongoose.model('SubTodo', subTodo)