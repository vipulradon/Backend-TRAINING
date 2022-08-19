const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");
const publisherModel = require("../models/publisherModel");


const createBook = async function(req,res){
let book = req.body;
if(book.author && book.publisher){
let validAuthorId = await authorModel.findById(book.author);
let validPublisherId = await publisherModel.findById(book.publisher)
if(validAuthorId && validPublisherId){
    let savedBook = await bookModel.create(book);
    res.send({msg:savedBook,status:true})
}else res.send({msg:"Please confirm the publisher or author Id.No such Author or Publisher with the entered id"})

}else res.send({msg:"Both AuthorId and Publisher Id fields Are Mandatory"})
}




const getallBooks = async function(req,res){
    let allBooks = await bookModel.find().populate("author publisher");
    res.send({msg:allBooks})
}

module.exports.createBook=createBook;
module.exports.getallBooks=getallBooks;