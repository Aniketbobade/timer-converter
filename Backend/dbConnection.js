const mongoose= require("mongoose");
require('dotenv').config()

exports.connect= async()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("DB connection is sucessful")
    }).catch((error)=>{
        console.log("DB connection faild");
        console.error(error);
        process.exit(1);
    })
}