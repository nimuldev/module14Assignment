const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
        email:{type:String,require:true},
        Title:{type:String,require:true},
        Description:{type:String,require:true},
        status:{type:String,require:true}

    },
    {timestamps:true,versionKey:false});

const to_do_list_create=mongoose.model("to_do_list_creates",databaseSchema)
module.exports=to_do_list_create;
