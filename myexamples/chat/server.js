var express = require ('express');
var app = express ();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var manager = require ('./manager.js');
var path = require("path");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
//var mysql  = require('./mysql');



app.get('/', manager.getHomePage);

app.get('/room/chathistory', manager.getChatHistory);

app.post('/room/createRoom', manager.createRoom);


io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('register', function(id){
    socket.join(id);
  });
 
 socket.on('message', function(data){
 	manager.addMsgToRoom(data.id,data.msg);
 	io.to(data.id).emit('message', data);
 });


http.listen(3000,function(){
	console.log("listening on*:3000")
});
