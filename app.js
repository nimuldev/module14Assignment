const express=require("express")
const router=require("./src/route/api")
const app=new express();
const rateLimiter=require("express-rate-limit");
const helmet=require("helmet")
const hpp=require("hpp")
const cors=require("cors")
const mongoose=require("mongoose")

app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(express.json({limit:'20mb'}))
app.use(express.urlencoded({extended:true}))

let limiter=rateLimiter({windowMs:15*60*100,max:3000})
app.use(limiter);

let URL="mongodb+srv://nimul:nahid123@cluster0.631m7xq.mongodb.net/module14Assignment"
let OPTION={user:"nimul",pass:"nahid123",autoIndex:true}

mongoose.connect(URL,OPTION).then(()=>{
    console.log("Database is connect")
}).catch((err)=>{
    console.log(err)
})

app.use("/api",router)

module.exports=app;



