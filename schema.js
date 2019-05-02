const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const Blogpost =new Schema({
    title:String,
    author:String,
    body:String,
   // date:Date
})
module.exports=Blogpost;