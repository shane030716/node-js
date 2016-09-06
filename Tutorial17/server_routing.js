var express = require("express");
var app = express();

// This responds with "Hello World" on the home page.
app.get("/", function (req, res) {
	console.log("Got a GET request for the home page");
	res.send("Hello GET");
});

// This responds a POST request for the home page
app.post("/", function (req, res) {
	console.log("Got a POST request for the home page");
	res.send("Hello POST");
});

// This responds a DELETE request for the /del_page page
app.delete("/del_user", function (req, res) {
	console.log("Got a DELETE request for /del_user");
	res.send("Hello DELETE");
});	

// This responds a GET request for the /list_user page.
app.get("/list_user", function(req, res) {
	console.log("Got a GET request for /list_user");
	res.send("Page listing");
});	

// This responds a GET request for the regular expression ab*cd
app.get("/ab*cd", function(req, res) {
	console.log("Got a GET request for /ab*cd");
	res.send("Page Pattern Match");
});

var server = app.listen(8888, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listending at http://%s:%s", host, port);
});

