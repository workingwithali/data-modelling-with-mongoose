import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    diagonsedwith:{
        type:String,
        requried: true
    },
    address : {
        type : String,
        requried : true
    },
    age : {
        type : String,
        requried: true
    },
    bloodgroup: {
        type: String,
        requried
    },
    gender: {
        type : String,
        enum : ['m','f','o']
    },
    admittedIn:[
        {
        type: mongoose.Schema.Types.ObjectId,
        required : string        
        }
    ],
},{timestamps:true})

export const Patient = mongoose.model('Patient',patientSchema)