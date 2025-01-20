import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description : {
        type : string ,
        required : true,
    },
    name : {
        type : string,
        require: true,
        required : true
    },
    price : {
        type : number,
        default: 0
    },
    productImage:{
        type : string,
    },
    stock : {
        type : number,
        default: 0
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true
    }
},{timeseries:true})

export const Product = mongoose.model('Product', productSchema)