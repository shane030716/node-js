/*
 * Writing File
 */

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Write something to a file");
fs.writeFile("input-truncate.txt", "This file is going to be truncated.", function(err) {
	if (err) {
			return console.error(err);
	}
	console.log("File written succesully\nGoing to open an existing file");
	fs.open("input-truncate.txt", "r+", function(err, fd) {
		if (err) {
			return console.error(err);
		}

		console.log("File opened successfully!\nGoing to truncate the file after 10 bytes");

		// Truncate the opened file.
		fs.ftruncate(fd, 10, function(err) {
			if (err) {
				console.error(err);
			}
			
			console.log("File truncated successfully\nGoing to read the same file");
			fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
				if (err) {
					console.log(err);
				}

				if (bytes > 0) {
					console.log(buf.slice(0, bytes).toString());
				}

				//Closed the opened file
				fs.close(fd, function(err) {
					if (err) {
						console.log(err);
					}

					console.log("File closed successfully");
				});
			});
		})
	}); 
});
