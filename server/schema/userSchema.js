import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    email: {type:String,required:true,unique:true}, // String is shorthand for {type: String}
    password: {type:String,required:true},
    username: {type:String,required:true},
},{timestamps:true})


const users = mongoose.model('users', userSchema);

export default users;