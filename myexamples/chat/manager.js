var db = require ('./mysql.js');

exports.getHomePage = function(req,res){
	res.sendFile(path.join(__dirname+ '/index.html'));
}

exports.getChatHistory = function(req,res){
	var data = req.body;
	var chathistory = db.getAllMsgforRoom(data.id);
	console.log(chathistory)
	res.send(chathistory);
}

exports.addMsgToRoom = function(id,msg){
	db.addMsgToRoom(id,msg);
}


exports.createRoom = function(req,res){
	// var data = req.body;
	// var chathistory = db.getAllMsgforRoom(data.id);
	// console.log(chathistory)
	// res.send(chathistory);
}






