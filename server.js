// require("dotenv").config();
// const userLib=require("./backend/Lib/userLib")
// const mongoose =require("mongoose");
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5011;

// app.get("/", function(req, res){
// 	//res.send("I am Harshitha Majety");
// 	res.sendFile(__dirname+"/index.html");
// });
// app.get("/resume", function(req, res){
// 	//res.send("I am Harshitha Majety");
// 	res.sendFile(__dirname+"/resume.html");
// });
// mongoose.set('strictQuery',true);
// mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
// 	if(err)
// 	console.error(err);
// 	else{
// 	console.log("db connected");

// 		userLib.getAllUsers(function(err,res){
// 			if(err){
// 				console.error(err);
// 			}
// 			else{
// 				console.log(res);
// 			}
// 		})

// 	//do not create user if atleast 1 user exist in table
// 	//calling create user
// 	// userLib.createFirstUser(function(err,result){
// 	// 	if(err){
// 	// 	console.error(err);
// 	// 	}
// 	// 	else
// 	// 	console.log(res);
// 	// });
// 	// app.listen(port, function(){
// 	// 	console.log("Server running on http://localhost:"+port);
// 	// 	console.log(`Server running on http://localhost:${port}`);
// 	// });

	
// 	//




// 		//username same as in userModels
// 	// userLib.getUsersByFilter({username:"harshitha123"}, function(err,result){
// 	// 	if(err){
// 	// 		console.error(err);
// 	// 	}
// 	// 	else{
// 	// 		console.log(result);
// 	// 	}
// 	// })

	

// });





// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5010;

// app.get("/", function(req, res){
// 	//res.send("I am Harshitha Majety");
// 	res.sendFile(__dirname+"/index.html");
// });

// app.get("/resume", function(req, res){
// 	//res.send("I am Harshitha Majety");
// 	res.sendFile(__dirname+"/resume.html");
// });
// app.get("/resume1",function(req,res){
//     res.sendFile(__dirname+"/resume1.html");
// });
// app.listen(port, function(){
// 	console.log("Server running on http://localhost:"+port);
// 	console.log(`Server running on http://localhost:${port}`);
// });


require("dotenv").config();
const userLib=require("/backend/Lib/userLib")
const mongoose =require("mongoose");
const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
	//res.send("I am Harshitha Majety");
	res.sendFile(__dirname+"/index.html");
});
app.get("/resume", function(req, res){
	//res.send("I am Harshitha Majety");
	res.sendFile(__dirname+"/resume.html");
});
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
	if(err)
	console.error(err);
	else{
	console.log("db connected");
	//do not create user if atleast 1 user exist in table
	userLib.createFirstUser(function(err,result){
		if(err){
		console.error(err);
		}
		else
		console.log(res);
	});
	app.listen(port, function(){
		console.log("Server running on http://localhost:"+port);
		console.log(`Server running on http://localhost:${port}`);
	});
	}

});