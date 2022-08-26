const mid1= function(req,res,next){
    if(req.headers["isfreeappuser"]){
        if(req.headers["isfreeappuser"]==="true"){
            req.isfreeappuser=Boolean(req.headers["isfreeappuser"])
        }else{
            req.isfreeappuser=false;
        }
    
        next();
    }else{
    res.send({msg:"The Request Is Missing A Mandatory Header"})
    }
    }
    
       
    
    
    
    module.exports.mid1=mid1;