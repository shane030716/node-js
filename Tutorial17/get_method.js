var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/get.htm", function(req, res) {
	//first time seeing this, seems to tell the response to show the index.htm file
	res.sendFile(__dirname + "/" + "get.htm");
});

app.get("/process_get", function(req, res) {
	//Preprae output in JSON format
	response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};

	console.log(response);

	//res.end is used to end the response process, with the optional data argument
	res.end(JSON.stringify(response));
});

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})