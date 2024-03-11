const userToDoListModel = require("../model/userToDoListModel");


exports.toDoListCreate=async (req,res)=>{

    try {

        const email=req.header["email"];
        const reqBody=req.body;

        reqBody.email=email
        reqBody.status="NewTask"

        await userToDoListModel.create(reqBody);
        res.json({status:"Success",message:"New To Do List Create"})

    }
    catch (err){
        res.json({status:"Fail",message:err})
    }
}

exports.toDoListRead=async (req,res)=>{

    try {

        const email=req.header["email"];

      let result=  await userToDoListModel.find({email:email});
        res.json({status:"Success",data:result})

    }
    catch (err){
        res.json({status:"Fail",message:err})
    }
}

exports.toDoListUpdate=async (req,res)=>{

    try {

        const email=req.header["email"];
        const {id}=req.params;
        const reqBody=req.body;

    await userToDoListModel.updateOne({_id:id,email:email},reqBody);
        res.json({status:"Success",message:"To do List Update"})

    }
    catch (err){
        res.json({status:"Fail",message:err})
    }
}

exports.toDoListUpdateStatus=async (req,res)=>{

    try {

        const email=req.header["email"];
        const {id}=req.params;
        const reqBody=req.body;

        let result=await userToDoListModel.find({_id:id,email:email,status:"NewTask"});

        if (result.length>0){
            await userToDoListModel.updateOne({_id:id,email:email},{status:"Complete"});
            res.json({status:"Success",message:"To do List Task Status: Completed"})
        }
        else {
            let result1=await userToDoListModel.find({_id:id,email:email});
            console.log(result1[0].status)
            res.json({status:"Fail",message:"Task Status already Changed before",Remarks: result1[0].status})
        }



    }
    catch (err){
        res.json({status:"Fail",message:err})
    }
}

exports.toDoListStatus=async (req,res)=>{

    try {

        const email=req.header["email"];
        const {id}=req.params;
        const reqBody=req.body;

        let result=await userToDoListModel.find({_id:id,email:email,status:"NewTask"});

        if (result.length>0){
            await userToDoListModel.updateOne({_id:id,email:email},reqBody);
            res.json({status:"Success",message:"To do List Task Status: Completed"})
        }
        else {
            let result1=await userToDoListModel.find({_id:id,email:email});
            console.log(result1[0].status)
            res.json({status:"Fail",message:"Task Status already Changed before",Remarks: result1[0].status})
        }



    }
    catch (err){
        res.json({status:"Fail",message:err})
    }
}


exports.toDoListUpdateStatusCancel=async (req,res)=>{

    try {

        const email=req.header["email"];
        const {id}=req.params;
        const reqBody=req.body;

        let result=await userToDoListModel.find({_id:id,email:email,status:"NewTask"});

        if (result.length>0){
            await userToDoListModel.updateOne({_id:id,email:email},{status:"Cancel"});
            res.json({status:"Success",message:"To do List Task Status: Cancel"})
        }
        else {
            let result1=await userToDoListModel.find({_id:id,email:email});
            console.log(result1[0].status)
            res.json({status:"Fail",message:"Task Status already Changed before",Remarks: result1[0].status})
        }



    }
    catch (err){
        res.json({status:"Fail",message:err})
    }
}





// exports.dateFilter=async (req,res)=>{
//
//     try {
//
//         const email=req.header["email"];
//
//
//         let result=  await userToDoListModel.find({email:email});
//         res.json({status:"Success",data:result})
//
//     }
//     catch (err){
//         res.json({status:"Fail",message:err})
//     }
// }