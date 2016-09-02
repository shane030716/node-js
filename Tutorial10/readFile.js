/*
 * Writing File
 */

var fs = require("fs");
var buf = new Buffer(1024);


console.log("Going to open an existing file");
fs.open("input.txt", "r+", function(err, fd) {
	if (err) {
		return console.error(err);
	}

	console.log("File opened successfully\nReading from the file");
	var buffer_offset = 10;

	fs.read(fd, buf, buffer_offset, buf.length - buffer_offset, 0, function(err, bytes) {
		if (err) {
			console.log(err);
		}

		console.log(bytes + " bytes read");

		// Print only read bytes to avoid junk.
		if (bytes > 0) {
			console.log("File content: " + buf.slice(buffer_offset, bytes).toString());
		}

		//Junks
		console.log(buf.slice(0, buffer_offset).toString())

	});
});
