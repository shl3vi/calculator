var express = require ('express');
var app = express ();
var queueManager = require ('./queueManager.js');
var path    = require("path");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));


app.get ('/', function(req,res){
	res.sendFile(path.join(__dirname+ '/index.html'));
});


app.post ('/queue/inqueue',function(req,res){
	var data = req.body;
	queueManager.inqueue(data.input,data.name);
	res.send("Result : Inqueue was done succefully");
});

app.post('/queue/dequeue',function(req,res){
	var data = req.body;
	console.log(data.name);
	queueManager.dequeue(data.name);
	res.send("result deque was done succefully");
});

app.post('/queue/snapshot',function(req,res){
	res.send({'result' : queueManager.getSnapShot()});
});
app.listen(3000)


