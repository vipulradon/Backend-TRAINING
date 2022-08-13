const bookModel = require("../models/bookModel");


const createBook = async function(req,res){
let data = req.body;
let savedData = await bookModel.create(data);
res.send({msg:savedData})
}


const getAllBooks = async function(req,res){
const books = await bookModel.find();
res.send({msg:books})
}



module.exports.createBook = createBook;
module.exports.getAllBooks= getAllBooks;