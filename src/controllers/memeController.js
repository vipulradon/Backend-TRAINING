const axios= require("axios");



const createMeme= async function(req,res){
try {let templateId= req.query.template_id;
let text0= req.query.text0;
let text1= req.query.text1;
let username= req.query.username;
let password= req.query.password;

let options = {
    method:"post",
    url:`https://api.imgflip.com/caption_image?template_id=${templateId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
}
let result = await axios(options);
res.status(200).send({status:true,msg:result.data})
}
catch(error){
    console.log(error.message);
    res.status(500).send({status:false,message:error.message})
}
}


module.exports.createMeme=createMeme;