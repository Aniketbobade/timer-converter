const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userData = new Schema({

    Name:{
        type:String,
        required:true,
        trim:true
      },
    EnterTime:{
        type:Date,
        required:true
    }
});

module.exports=mongoose.model("UserData", userData);
