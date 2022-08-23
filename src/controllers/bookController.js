const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");
const publisherModel = require("../models/publisherModel");
const { find, updateMany } = require("../models/bookModel");


const createBook = async function(req,res){
let book = req.body;
if(book.author && book.publisher){
let validAuthorId = await authorModel.findById(book.author);
let validPublisherId = await publisherModel.findById(book.publisher)
if(validAuthorId ){
    if(validPublisherId){
        let savedBook = await bookModel.create(book);
        res.send({msg:savedBook,status:true})
    }else res.send({msg:"please Check the PublisherId"})
    
}else res.send({msg:"Please confirm AuthorId"})

}else res.send({msg:"Both AuthorId and Publisher Id fields Are Mandatory"})
}




const getallBooks = async function(req,res){
    let allBooks = await bookModel.find().populate("author publisher");
    res.send({msg:allBooks})
}





const updateBooks= async function(req,res){
    let ids = await publisherModel.find({name:{$in:["Penguin","HarperCollins Publishers India"]}}).select({_id:1});
    let id = ids.map((x)=>x._id);
    console.log(id);
let data = await bookModel.updateMany({publisher:{$in:id}},{$set:{isHardCover:true}})
let books = await bookModel.find().populate("author publisher");


let highRatedAuthBooks = books.filter((x)=>x.author.rating>3.5);
let idsOfHighRatedAuthBooks = highRatedAuthBooks.map((x)=>x._id);
let data1 = await bookModel.updateMany({_id:{$in:idsOfHighRatedAuthBooks}},{$inc:{price:+100}});
res.send(data1);

}

module.exports.updateBooks = updateBooks;
module.exports.createBook=createBook;
module.exports.getallBooks=getallBooks;