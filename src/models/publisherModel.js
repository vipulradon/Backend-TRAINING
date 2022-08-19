const mongoose = require("mongoose");



const authorSchema = new mongoose.Schema({
name:String,
headQuater:String
},{timestamps:true});




module.exports = mongoose.model("newPublisher",authorSchema);