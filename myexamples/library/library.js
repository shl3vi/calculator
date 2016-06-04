var mysql  = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});

var newbook = function (data) 
{

	for (var i = 0; i < data.length; i++) {
	var book = data[i];
	var key = book['name'];
	var value = book;

	if (db[key])
		console.log ("value allready exist");
	else
		db[key] = book;
		console.log(db['book1']);
	}

	//console.log (db['book1']);
}

var addBook = function (book){
	// var key = book['name'];
	// console.log (book['name']); 

	// if(db[key])
	// 	console.log("book " + book['name'] + " allready exist!")
	// else {
	// 	db[key] = book;
	// 	console.log(JSON.stringify(db[key]) + " book was added");
	// }

	return dbconn.query('INSERT INTO library SET ?',book, function(err, result) {});
}

var searchBook = function(name){
	var key = name.name;
	console.log(key);
		if (db[key]){
			console.log(db[key]);
			return (db[key]);
		}
		else 
			console.log("this value is not exist");
}

module.exports.addBook = addBook;
module.exports.searchBook = searchBook;