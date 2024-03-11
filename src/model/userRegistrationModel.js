const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
        email:{type:String,unique:true,require:true},
        FullName:{type:String,require:true},
        IdNO:{type:String,require:true},
        Department:{type:String,require:true},
        Section:{type:String,require:true},
        Mobile:{type:String,require:true},
        password:{type:String,require:true},

},
    {timestamps:true,versionKey:false});

const userRegistrationModel=mongoose.model("user_registrations",databaseSchema)
module.exports=userRegistrationModel;
