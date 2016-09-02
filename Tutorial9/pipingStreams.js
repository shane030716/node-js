/*
 * Piping Streams
 */
console.log("Piping Streams example");

var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream("piping-input.txt");

// Create a writable stream
var writerStream = fs.createWriteStream("piping-output.txt")

readerStream.pipe(writerStream);