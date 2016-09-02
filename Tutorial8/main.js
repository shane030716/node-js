/* 
 * Creating buffer
 */
console.log("Creating buffer Example: ");
//Method 1
var buf1 = new Buffer(10);
console.log(buf1);
console.log(buf1.toString());

//Method 2
var buf2 = new Buffer([10,20,30,40,50]);
console.log(buf2);
console.log(buf2.toString());

//Method 3
var buf3 = new Buffer("Learning Node.js", "utf-8");
console.log(buf3);
console.log(buf3.toString());

/* 
 * Writing to Buffers
 */
console.log("\nWriting to Buffers Example: ");
var buf4 = new Buffer(256);
len = buf4.write("Learning Node.js");
console.log("Octets writter: " + len);

/* 
 * Reading from Buffers
 */
console.log("\nReading from Buffers Example: ");
var buf5 = new Buffer(26);
for (var i = 0; i < 26; i++) {
	buf5[i] = i + 97; // int 97 is char 'a'
}

console.log( buf5.toString('ascii'));
console.log( buf5.toString('ascii', 0, 5));
console.log( buf5.toString('utf8', 0, 5));
console.log( buf5.toString(undefined, 0, 5)); //defaults to 'utf8'

/* 
 * Convert Buffer to JSON
 */
console.log("\nConvert Buffer to JSON Example: ");

var buf6 = new Buffer("Converting Buffer to JSON");
var json = buf6.toJSON(buf6); //hmmm why is it like this
var json2 = buf6.toJSON(); //This works too, I think this should look better
console.log(json)
console.log(json2)

/* 
 * Concatenate Buffers
 */
console.log("\nConcatenate Buffers Example: ");

var buffer1 = new Buffer("Concatenating ");
var buffer2 = new Buffer("Buffers");
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 content: " + buffer3.toString());

/* 
 * Compare Buffers
 */
console.log("\nCompare Buffers Example: ");

var buffer4 = new Buffer("ABC");
var buffer5 = new Buffer("ABCD");
var result = buffer4.compare(buffer5);

if (result < 0) {
	console.log(buffer4 + " comes before " + buffer5);
} else if (result > 0) {
	console.log(buffer4 + " comes after " + buffer5);
} else {
	console.log(buffer4 + " is the same as " + buffer5);
}

/* 
 * Copy Buffer
 */
console.log("\nCopy Buffer Example: ");
var buffer6 = new Buffer("ABC");
//copy it
var buffer7 = new Buffer(3);
buffer6.copy(buffer7);
console.log("buffer7 content: " + buffer7.toString());

/* 
 * Slice Buffer
 */
console.log("\nSlice Buffer Example: ");
var buffer8 = new Buffer("Slicing a buffer");
var buffer9 = buffer8.slice(2, -3);
console.log("buffer9 content: " + buffer9);

//IMPORTANT: buffer9 references the same memory as buffer8
//Changed a letter in buffer8
buffer8[8] = 98 // char 'b'
//The letter changed in buffer9 as well
console.log("buffer9 content: " + buffer9);

