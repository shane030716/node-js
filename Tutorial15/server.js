var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});


app.get("/listUsers", function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
		console.log(data);
		res.sendFile(__dirname + "/" + "users.htm");
	});
});

app.get("/addUser", function(req, res) {
	res.sendFile(__dirname + "/" + "addUser.htm");
})

app.post("/addUser", urlencodedParser, function(req, res) {

	debugger;

	//First read existing users
	fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
		data = JSON.parse(data);
		//req.body happens to have the same fields as each user
		data["user"+req.body.id] = req.body;
		console.log(data);
		res.end(JSON.stringify(data));
	});
});

app.get("/:id", function(req, res) {
	//First read existing users.
	fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
		users = JSON.parse(data);
		debugger;
		//req.params vs req.query?
		//Seems req.params is the parameters defined in app.get, eg :id
		//req.query is the query string in the url, eg ?abc=123
		var user = users["user" + req.params.id]
		console.log(user);
		res.end(JSON.stringify(user));
	});
});

//This should be app.delete, where the delete request is called in ajax.
//For now we use get in this simpler version
app.get("/deleteUser/:id", function(req, res) {
	//First read existing users.
	fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data) {
		data = JSON.parse(data);
		var id = req.params.id;
		//hmmm first time seeing this 'delete' keyword
		delete data["user"+id];

		console.log(data);
		res.end(JSON.stringify(data));
	});
});

var server = app.listen(8888, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});