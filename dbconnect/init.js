var mysql = require('mysql');
var DB_NAME = 'shimada_test';
var TABLE = 'users';

var client = mysql.createConnection({
	user:'root',
	password:'root'
});

client.query('CREATE DATABASE ' + DB_NAME, function(err) {
	if(err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
		throw err;
	}
});

client.query('USE ' + DB_NAME);

client.query(
	'CREATE TABLE ' + TABLE +
	'(id INT(10) AUTO_INCREMENT, '+
	'name VARCHAR(100), '+
	'PRIMARY KEY (id))'
);

client.query('INSERT INTO '+ TABLE +' '+'SET name = ?', ['taro'], function(err, info) { 
	console.log("insertID = " + info.insertId);
});

client.query('INSERT INTO '+ TABLE +' '+'SET name = ?',['hanako'], function(err, info) { 
	console.log("insertID = " + info.insertId);
});

client.end();