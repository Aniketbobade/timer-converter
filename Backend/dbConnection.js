const mongoose= require("mongoose");


exports.connect= async()=>{
    mongoose.connect("mongodb+srv://bobadeaniket5:NGlcZgojU5T2N9VE@cluster0.drpjry4.mongodb.net/timer",{
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