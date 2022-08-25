const productModel= require("../models/productModel");



const createProduct= async function(req,res){
let data = req.body;

if(!req.body.price){
    res.send({msg:"Price Is A Mandatory Field"})
}else{
    let savedData= await productModel.create(req.body);
    res.send({msg:savedData,Status:"Product Created Successfully"})
}
};


module.exports.createProduct=createProduct;