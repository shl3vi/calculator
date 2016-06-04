var connect = function(){
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_chat'
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});

dbconn.query('CREATE DATABASE IF NOT EXISTS db_chat', function (err) {
    if (err) throw err;
    dbconn.query('USE db_chat', function (err) {
        if (err) throw err;
        dbconn.query('CREATE TABLE IF NOT EXISTS chat('
            + 'msg VARCHAR(30),'
            + 'id INT(30),'
            + 'PRIMARY KEY(id),'
            +  ')', function (err) {
                if (err) throw err;
            });
        console.log ("DB tables created succefully");
    });
});

}
var getAllMsgFromRoom = function (id){
dbconn.query('SELECT * WHERE id = ?',id,function(err){
	if(err) 
		throw err;
	else
		return query;
	})
}

var addMsgToRoom = function (id,msg){
dbconn.query ('INSERT INTO chat where id ? SET msg',id,msg,function(){
	if(err) 
		throw err;
	else
		return query;
	});
}

module.exports.addMsgToRoom = addMsgToRoom;
module.exports.getAllMsgFromRoom = getAllMsgFromRoom;
module.exports.connect = connect;
