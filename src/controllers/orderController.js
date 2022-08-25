const orderModel = require("../models/orderModel");
const productModel= require("../models/productModel");
const userModel= require("../models/userModel")


const createOrder= async function(req,res){
let data = req.body;
if(data.userId && data.productId ){
 
 let validUser= await userModel.findById(req.body.userId);
 let validProduct= await productModel.findById(req.body.productId);
 if(!validUser){
    res.send({msg:"please Confirm the UserId"})
 }else if (!validProduct){
    res.send({msg:"Please Confirm the ProductId"})
 }else{
if(req.headers["isfreeappuser"]=="true"){
req.body.amount= 0;
req.body.isFreeAppUser= req.headers["isfreeappuser"];
let savedOrder= await orderModel.create(req.body);
res.send({msg:savedOrder,status:"Enjoy Your Free Order"})
}else{
    let product= await productModel.findById(req.body.productId).select({price:1});
    let user= await userModel.findById(req.body.userId).select({balance:1});
    if(product.price>user.balance){
        res.send({msg:"Insufficient Balance For this Order"})
    }else{
        let userWithUpdatedBalance= await userModel.findOneAndUpdate({_id:req.body.userId},{$inc:{balance:-product.price}});
        req.body.amount= product.price;
        req.body.isFreeAppUser= req.headers["isfreeappuser"];
        let savedOrder= await orderModel.create(req.body);
        res.send({msg:savedOrder,Status:"Congratulations!! Your Order Placed SuccessFully"})

    }
}


 }
}else{
    res.send({msg:"Both UserID And ProductId Are Mandatory"})
}
}


module.exports.createOrder= createOrder;