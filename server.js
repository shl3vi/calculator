var express = require('express')
var app = express()
var path = require("path");
var logic = require("./logic.js");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/static'));
/*
this function is active when receive http request in method POST and in adress '/hi'
*/ 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/calculate', function (req, res) {
  var theData = req.body;
  console.log(theData);
  if(theData.operator == "+")
  	res.send({result: logic.add(Number(theData.first),Number(theData.second))});
})
 
app.listen(3000) 	


