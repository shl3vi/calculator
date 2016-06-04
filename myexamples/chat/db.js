msgdb = {};

var room = require('./room.js');

exports.getAllMsgforRoom = function(id){
	return msgdb[id];
}

exports.addMsgToRoom = function(id,msg){
	verifyRoom(id);
	msgdb[id].setMsg(msg);
}

var verifyRoom = function(id){
	if(!msgdb[id])
		msgdb[id] = room.getRoom(id);
	}
}