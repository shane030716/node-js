/*
 * Writing File
 */

var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile("output.txt", "Trying writing something to a file.", function(err) {
	if (err) {
		return console.error(err);
	}

	console.log("Data written successfully\nNow reading from output.txt");
	fs.readFile("output.txt", function (err, data) {
		if (err) {
			return console.error(err);
		}

		console.log("Asynchronous read: " + data.toString());
	});

})