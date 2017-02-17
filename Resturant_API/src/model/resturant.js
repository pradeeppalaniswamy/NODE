import mongoose from 'mongoose';
let Schema=mongoose.Schema;
let resturantSchema=new Schema({name:String});
module.exports=mongoose.model('Resturant',resturantSchema);
