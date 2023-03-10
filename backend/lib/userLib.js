const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callback){
    try{
        var users = await userModel.find({isDeleted:false});
        callback(null,users);
    }
    catch(err){
        callback(err,null);
    }
    
};
//create user
module.exports.createFirstUser = async function(callback){
    try{
        var user = {
            username: "harshitha1",
            yearOfGraduation: 2024,
        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
    
};


// module.exports.createUser = async function(username,callback){
//     try{
//         var user = {
//             username: "harshitha12",
//             yearOfGraduation: 2024,
//         };
//         var newUser = new userModel(user);
//         var result = await newUser.save();
//         callback(null,result);
//     }
//     catch(err){
//         callback(err,null);
//     }
    
// };


//update function
// module.exports.updateUser = async function(username,data,callback){
//     try{
//         var query = {
//             userName: username,
//         }
//         var result = await userModel.updateOne(query,data);
//         callback(null,result);
//     }
//     catch(err){
//         callback(err,null);
//     }
// }


//delete
// module.exports.deleteUser = async function(username,callback){
//     try{
//         var query = {
//             //userName: "harshitha12";
//             userName: username,
//         }
//         var result = await userModel.deleteOne(query);
//         callback(null,result);
//     }
//     catch(err){
//         callback(err,null);
//     }
// }


//generally delete is not used so we are updating the above function instead of deleteOne
//soft delete means modifying
// module.exports.deleteUser = async function(username,callback){
//     try{
//         var query = {
//             //userName: "harshitha12";
//             userName: username,
//         }
//         var result = await userModel.updateOne(query,{isDeleted:true});
//         callback(null,result);
//     }
//     catch(err){
//         callback(err,null);
//     }
// }

//get user by query

// module.exports.getUsersByFilter = async function(filter,callback){
//     try{
//         var users = await userModel.findOne(filter);
//         callback(null,users);
//     }
//     catch(err){
//         callback(err,null);
//     }
    
// };

