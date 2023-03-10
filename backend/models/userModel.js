const mongoose = require("mongoose");
const userSchema=new mongoose.Schema({
    username: {type:String , required:true, unique:true},
    yearOfGraduation :{type: Number, min:2000,max:9000},
    createdAt:{type :Date , default: Date.now},
    isDeleted:{type:Boolean , default:false}
});

//module.exports=mongoose.model("user",userSchema);
const userModel= mongoose.model("user",userSchema);
module.exports = userModel;