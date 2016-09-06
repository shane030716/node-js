var express = require("express");
var app = express();
var bodyParse = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParse.urlencoded( {extended: false});

app.use(express.static("public"));

app.get("/post.htm", function (req, res) {
	res.sendFile(__dirname + "/" + "post.htm");
});

//Why do we need the urlencodedParser here? If we don't pass it
// the post method cannot read first_name and last_name from req
app.post("/process_post", urlencodedParser, function(req, res) {
	// Prepare output in JSON format
	response = {
		// Note: in get_method, it's req.query.first_name
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};

	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})