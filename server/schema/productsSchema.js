import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    ownerID : {type:String,required:true},
    item: {type:String,required:true}, 
    description: {type:String,required:true},
    expiryDate: {type:Date,required:true},
    path: {type:String,required:true},
},{timestamps:true})


const product = mongoose.model('product', productSchema);

export default product;