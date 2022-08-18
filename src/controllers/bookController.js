
const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");

const createBook = async function (req, res) {
    let data = req.body;
    let savedData = await BookModel.create(data);
    res.send({ msg: savedData })
}



const booksByChetanBhagat = async function (req, res) {
    let data = await AuthorModel.findOne({ author_name: "Chetan Bhagat" });
    console.log(data);
    let authorId = data.author_id;
    let booksbyCB = await BookModel.find({ author_id: authorId });
    res.send({ msg: booksbyCB })
}


const authorOfbooks50to100 = async function (req, res,func) {
    let authorData = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1 ,_id:0});
    // console.log(authorData);
   let result =  authorData.map(async (x) => {
    let arr =[];let a = await AuthorModel.find({ author_id: x.author_id });
arr.push(a);

return arr;
})
    console.log(result)
    }
   
 


    





module.exports.createBook = createBook;
module.exports.booksByChetanBhagat = booksByChetanBhagat;
module.exports.authorOfbooks50to100= authorOfbooks50to100;
