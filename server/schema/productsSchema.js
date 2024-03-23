import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    ownerID : {type:String,required:true},
    item: {type:String,required:true}, // String is shorthand for {type: String}
    description: {type:String,required:true},
    expiryDate: {type:String,required:true},
},{timestamps:true})


const product = mongoose.model('product', productSchema);

export default product;