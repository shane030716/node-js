/*
 * Writing to stream
 */
console.log("Writing to stream example");

var fs = require("fs");
var data = "Trying writing stream\n";

//Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data, 'UTF8');

// Mark the end of file.. hmm new to me
writerStream.end();

// Handle stream events --> finish and error
writerStream.on("finish", function() {
	console.log("Writer complete");
});

writerStream.on("error", function(err) {
	console.log(err.stack);
});


