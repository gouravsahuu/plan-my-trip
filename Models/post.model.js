const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true},
    destination : {type:String,required:true},
    no_of_travellers : {type:Number,required:true},
    budget_per_person : {type:Number,required:true}
})

const PostModel = mongoose.model("post",postSchema);

module.exports = {PostModel};