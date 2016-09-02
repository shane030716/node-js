/*
 * Get File Information
 */

var fs = require("fs");

console.log("Going to get the file info!");

fs.stat("input.txt", function (err, stats) {
	if (err) {
		return console.error(err);
	}

	console.log(stats);
	console.log("File opened successfully!");

	// Check file type
	console.log("isFile ? " + stats.isFile());
	console.log("isDirectory ? " + stats.isDirectory());
});