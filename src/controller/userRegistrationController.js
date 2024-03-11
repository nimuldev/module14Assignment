const userRegistrationModel=require("../model/userRegistrationModel");

const jwt=require("jsonwebtoken");

exports.createUser=async (req,res)=>{

    try {

        const reqBody=req.body;
        console.log(reqBody)
        await userRegistrationModel.create(reqBody);
        res.json({status:"Success",message:"New User Create"})

    }
    catch (err){
        res.json({status:"Fail",message:err})
    }
}

exports.userLogIn=async (req,res)=>{

    try {
        let reqBody=req.body;

        let user= await userRegistrationModel.find(reqBody);

        if(user.length>0){

            let payload={exp:Math.floor(Date.now()/1000)+(24*60*60),data:reqBody["email"]}
            let token=jwt.sign(payload,"125-Nahid");
            res.status(200).json({status:"Successfully LogIn",token:token})

        }
        else {
            res.json({status:"failed",message:"User Not Found"})
        }
    }
    catch (err){
        res.json({status:"failed",message:err});
    }


}

exports.userProfile=async (req,res)=>{
    try{
        let email=req.header["email"];
        console.log("email"+email)
        let result=await userRegistrationModel.find({email:email})

        res.json({status:"Success",data:result})

    }
    catch (e) {
        res.json({status:"Fail",message:e})
    }

}

exports.userProfileUpdate=async (req,res)=>{
    try{
        let email=req.header["email"];

        let reqBody=req.body;

        let result=await userRegistrationModel.updateOne({email:email},reqBody)

        res.json({status:"Profile Update Success",data:result})

    }
    catch (e) {
        res.json({status:"Fail",message:e})
    }

}



