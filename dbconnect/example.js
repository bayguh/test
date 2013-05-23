var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
	fs.readFile('index.html', function(err,content) {
		if (err) {
			throw err;
		}
		res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
		res.end(content);
	});
}).listen(8192);