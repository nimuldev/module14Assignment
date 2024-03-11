const jwt=require("jsonwebtoken");

module.exports=(req,res,next)=>{
    let token=req.headers['token'];
    jwt.verify(token,"125-Nahid",function (err,success){
        if(err){
            res.status(401).json({status:"unauthorized"})
        }
        else {

            req.header.email=success['data'];
            next();
        }

    })


}