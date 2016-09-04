/*
 * Read a directory
 */

var fs = require("fs");

console.log("Going to delete the directory ./test");

fs.rmdir("./test", function(err) {
	if (err) {
		return console.error(err);
	}

	console.log("Directory deleted successfully\nGoing to read the directory .");
	fs.readdir(".", function(err, files) {
		if (err) {
			return console.error(err);
		}

		files.forEach(function(file) {
			console.log(file);
		});
	});
});