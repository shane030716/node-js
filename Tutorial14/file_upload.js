var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');


//What exactly does use do here
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
//Need to check more about multer and multer.single
//can use single, array or fields
app.use(multer({ dest: 'tmp/'}).single('myfile'));

app.get("/file_upload.htm", function (req, res) {
	res.sendFile(__dirname + "/" + "file_upload.htm");
});

app.post("/file_upload", function(req, res) {
	//Using single above, so use req.file instead of req.files
	//All `req.file` below were originally `req.files.file` in the tutorial
	debugger;
	console.log(req.file.originalname);
	console.log(req.file.path);
	console.log(req.file.mimetype);
	
	var file = __dirname + "/" + req.file.originalname;
	fs.readFile(req.file.path, function(err, data){
		fs.writeFile(file, data, function (err) {
			if (err) {
				console.log(err);
			} else {
				response = {
					message: "File uploaded successfully",
					filename: req.file.originalname
				}
			}

			console.log(response);
			res.end(JSON.stringify(response));
		});
	});

	
});

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})