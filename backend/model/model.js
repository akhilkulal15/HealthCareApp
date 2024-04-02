import mongoose from "mongoose";

const schema = new  mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    mobilenumber:String
})

const model = mongoose.model('data',schema,'data');

export default model;