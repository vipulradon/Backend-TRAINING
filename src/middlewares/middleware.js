const mid1= function(req,res,next){
if(req.headers["isfreeappuser"]){
    next();
}else{
res.send({msg:"The Request Is Missing A Mandatory Header"})
}
}

   



module.exports.mid1=mid1;