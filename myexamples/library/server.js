var express = require ("express");
var app = express ();
var library = require ("./library.js")
var path    = require("path");
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

// var mysql  = require('mysql');
// var dbconn = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'test'
// });




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
})

/* local DB 
app.post ('/library/addBook', function (req,res){
	var data = req.body;
	library.addBook(data);
	res.send('book was added succefully');
})

app.post ('/library/searchBook', function (req,res){
	var name = req.body;
	res.send({result: library.searchBook(name)});
})*/

//DB
dbconn.query('CREATE DATABASE IF NOT EXISTS db_test', function (err) {
    if (err) throw err;
    dbconn.query('USE db_test', function (err) {
        if (err) throw err;
        dbconn.query('CREATE TABLE IF NOT EXISTS library('
            + 'name VARCHAR(30),'
            + 'PRIMARY KEY(name),'
            + 'title VARCHAR(30),'
            + 'num INT(30)'
            +  ')', function (err) {
                if (err) throw err;
            });
        console.log ("DB tables created succefully");
    });
});

app.post('/library/addBook',function(req,res){
	var book = req.body; // { name , title, num }
    var query = library.addBook(); 
    console.log(query.sql); // INSERT INTO library SET `id` = 1, `title` = 'Hello MySQL'
	res.send('book was added to DB succefully');
});

app.post ('/library/searchBook',function(req,res){
	var name = req.body.name;
	var query = dbconn.query ("SELECT * FROM library WHERE name = ?",name, function(err,result){
	console.log(query.sql);
	console.log (result);
	res.send({result : result});
	});
});

var a;
a.kuku = "rotem";
console.log(a.kuku);
console.log(a['kuku']);

app.listen(3000)