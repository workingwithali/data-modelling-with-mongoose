import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        requried : true
    },
    salary : {
        type : Number,
        requried : true
    },
    qualification:[
        {
            type:String,
            required : true
        }
    ],
    experienceInYear:{
        type: String,
        required: true
    },
    workInHospitals:[
        {
            type : mongoose.Schema.Types.ObjectId,
            required : true
        }
    ]
},{timestamps:true})

export const Doctor = mongoose.model('Doctor',doctorSchema)