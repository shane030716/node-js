/*
 * Read a directory
 */

var fs = require("fs");

console.log("Going to read the directory .");

fs.readdir(".", function(err, files) {
	if (err) {
		return console.error(err);
	}
	//remember javascript's forEach()
	files.forEach( function (file) {
		console.log(file);
	});
});