var express = require("express");
var app = express();

app.get("/", function (req, res) {
	// console.log(req);
	// console.log(res);
	res.send("Hello World!");
});

var server = app.listen(8888, function() {
	var host = server.address().address;
	debugger;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});