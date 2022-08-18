const AuthorModel = require("../models/authorModel");
const BookModel= require("../models/bookModel");



const createAuthor = async function(req,res){
let data = req.body;
let savedData = await AuthorModel.create(data);
res.send({msg:savedData})
}


const twoStatesAuthor = async function(req,res){
let book = await BookModel.findOneAndUpdate({name:"Two states"},
{$set:{price:100}});
let authorOfTwoStates = await AuthorModel.findOne({author_id:book.author_id});
res.send({AuthorOfTwoStates:authorOfTwoStates.author_name,updatedPrice:book.price});

}







module.exports.createAuthor= createAuthor;
module.exports.twoStatesAuthor= twoStatesAuthor;