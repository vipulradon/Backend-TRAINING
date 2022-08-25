const userModel= require("../models/userModel");


const createUser = async function(req,res){
let userTypeDetails= req.headers.isfreeappuser;
req.body.isFreeAppUser=userTypeDetails;
let savedUser = await userModel.create(req.body);
res.send({msg:savedUser,Status:"User Created Successfully"})
};



module.exports.createUser= createUser;