const authorModel = require("../models/authorModel");


const createAuthor = async function(req,res){
let data = req.body;
let savedData = await authorModel.create(data);
res.send({msg:data})
}


module.exports.createAuthor = createAuthor;