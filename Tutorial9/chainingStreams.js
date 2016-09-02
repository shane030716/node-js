/*
 * Chaining Streams
 */
console.log("Chaining Streams example");

var fs = require("fs");
var zlib = require("zlib");

// Compress the file chaining-input.txt to chaining-input.txt.gz
fs.createReadStream("chaining-input.txt")
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream("chaining-output.txt.gz"));


console.log("File compressed to chaining-output.txt.gz using chaining");

//without chaining
var readerStream = fs.createReadStream("chaining-input.txt");
var gzip = zlib.createGzip();
readerStream.pipe(gzip);
var writerStream = fs.createWriteStream("non-chaining-output.txt.gz");
gzip.pipe(writerStream);

console.log("File compressed to non-chaining-output.txt.gz without using chaining");