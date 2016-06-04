var express = require("express");
var app     = express();
var path    = require("path");
var logic = require ("./logic.js");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
})

app.post('/calculate', function (req, res) {
	var data = req.body.name;
	console.log(data);
	console.log(data.operator);
	if (data.operator == "+"){
		console.log("+");
		res.send({result: logic.add(Number(data.first), Number(data.second))});
	}
	if(data.operator== "-"){
		res.send({result: logic.sub(Number(data.first),Number(data.second))});
	}
		if(data.operator== "*"){
		res.send({result: logic.multiply(Number(data.first),Number(data.second))});
	}
	
	if(data.operator=="/"){
		res.send({result: logic.divide(Number(data.first),Number(data.second))});
	}

})

app.listen(3000)

