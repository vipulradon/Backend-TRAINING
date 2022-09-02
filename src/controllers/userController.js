const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");




const createUser = async function (req, res) {
    let data = req.body;
    let savedUser = await userModel.create(data);
    res.send({ status: true, msg: savedUser })
}

const userLogin = async function (req, res) {
    let userName = req.body.userName;
    let password = req.body.password;

    if (!userName) return res.status(400).send({ status: false, msg: "Username is a Mandatory Field" });
    if (!password) return res.status(400).send({ status: false, msg: "Please Enter Password,Password is a Mandatory Field" });
    let user = await userModel.findOne({ emailId: userName, password: password ,isDeleted:false});
    if (!user) return res.status(400).send({ status: false, msg: "No User Found With These Credentials" })
    let token = jwt.sign({
        user_id: user._id,
        mobile: user.mobile
    }, "ZanduBalm");
    res.setHeader("x-auth-token", token)
    return res.status(200).send({ status: true, msg: token })


}



const userDetails = async function (req, res) {
    try {

        let user = await userModel.findById(req.params.userId);
        return res.status(200).send({ status: true, data: user })
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).send({ status: false, msg: error.message })
    }
}


const updateUser= async function(req,res){
   try {let data= req.body
let updatedUser= await userModel.findOneAndUpdate({_id:req.params.userId},data,{new:true});
return res.status(200).send({status:true,data:updatedUser})
}
catch(error){
    return res.status(500).send({status:false,msg:error.message})
}
}


const deleteUser= async function(req,res){
    try {let data= req.body
 let deletedUser= await userModel.findOneAndUpdate({_id:req.params.userId},{isDeleted:true},{new:true});
 return res.status(200).send({status:true,data:deletedUser})
 }
 catch(error){
     return res.status(500).send({status:false,msg:error.message})
 }
 }





module.exports.createUser = createUser;
module.exports.userLogin = userLogin;
module.exports.userDetails = userDetails
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;
