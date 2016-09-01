//Creating buffer
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

//Writing to Buffers
var buf4 = new Buffer(256);
len = buf4.write("Learning Node.js");
console.log("Octets writter: " + len);

//Reading from Buffers

var buf5 = new Buffer(26);
for (var i = 0; i < 26; i++) {
	buf5[i] = i + 97; // int 97 is char 'a'
}

console.log( buf5.toString('ascii'));
console.log( buf5.toString('ascii', 0, 5));
console.log( buf5.toString('utf8', 0, 5));
console.log( buf5.toString(undefined, 0, 5)); //defaults to 'utf8'