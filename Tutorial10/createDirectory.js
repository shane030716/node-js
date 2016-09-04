/*
 * Create a directory
 */


var fs = require("fs");

console.log("Going to create a directory ./test");

fs.mkdir("./test", function(err) {
	if (err) {
		return console.error(err);
	}

	console.log("Directory created successfully.")
});