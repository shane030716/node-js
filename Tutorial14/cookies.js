var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get("/", function(req, res) {
	console.log("Cookies: ", req.cookies);
	res.end("Cookies Example");
});

app.listen(8888);