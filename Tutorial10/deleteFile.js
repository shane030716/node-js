/*
 * Delete a file
 */


var fs = require("fs");

console.log("Going to delete a file");
fs.unlink("input-truncate.txt", function(err) {
	if (err) {
		return console.error(err);
	}

	console.log("File deleted successfully");
});