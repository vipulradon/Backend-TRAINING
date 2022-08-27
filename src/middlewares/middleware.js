const mid1= function(req,res,next){
    if(req.headers["isfreeappuser"]){
        if(req.headers["isfreeappuser"]==="true"){
            req.isfreeappuser=Boolean(req.headers["isfreeappuser"])
        }else{
            req.headers["isfreeappuser"]=false
            req.isfreeappuser=req.headers["isfreeappuser"]
        }
    
        next();
    }else{
    res.send({msg:"The Request Is Missing A Mandatory Header"})
    }
    }
    
       
    
    
    
    module.exports.mid1=mid1;