import mongoose from "mongoose";

const ordereItemSchema = new mongoose.Schema({
    producdId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    },
    quantity : {
        type : Number,
        required : true
    }
},{timestamps:true})
const orderSchema = new mongoose.Schema({
    orderPrice : {
        type : Number,
        requried : true
    },
    customer : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    ordereItems : {
        type : [ordereItemSchema]
    },
    address : {
        type : string,
        required
    },
    status:{
        type : string,
        enum :["Pending","cancelled","delivered"],
        defult : "Pending"
    } 

},{timestamps})

export const Order = mongoose.model('Order',orderSchema)