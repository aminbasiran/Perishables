import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    item: {type:String,required:true}, 
    description: {type:String,required:true},
    expiryDate: {type:String,required:true},
},{timestamps:true})


const product = mongoose.model('product', productSchema);

export default product;