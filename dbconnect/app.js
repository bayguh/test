var mysql = require('mysql');
var TABLE = 'users';

var client = mysql.createConnection({
	user:'root',
	password:'root',
	database: 'shimada_test'
});

client.query('select * from ' + TABLE,  function (err, result, field) {
	if (err) {
		throw err;
	}
	console.log(result);
	console.log(field);
	client.end();
});