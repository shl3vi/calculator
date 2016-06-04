var queue = require ('./queue.js');
var someQueue;
var allQueue = {}; //name(PRIMARY KEY),queue};

var inqueue = function (input,name){
	isEnqueue = true;
	findQueue(name);
	someQueue.inqueue(input);
	console.log(JSON.stringify(someQueue));
}

var dequeue = function (name){
	findQueue(name);
	someQueue.dequeue();
	console.log(JSON.stringify(someQueue));
}

var getSnapShot = function(){
	console.log(allQueue);
	console.log("**************************")
	console.log(JSON.stringify(allQueue));
	return (JSON.stringify(allQueue));
}

var findQueue = function (name){
	if (allQueue[name]){
		someQueue =  allQueue[name];
		console.log ("queue exist");
	}
	else {
		someQueue = queue.getQueue(name);
		allQueue[name] = someQueue;
	}
}


module.exports.inqueue = inqueue;
module.exports.dequeue = dequeue;
module.exports.getSnapShot = getSnapShot;