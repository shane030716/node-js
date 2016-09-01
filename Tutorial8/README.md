# Tutorial 8

### Buffer

#### Creating Buffers
create an uninitiated Buffer of 10 octets

`var buf = new Buffer(10);`

create a buffer from a given array

`var buf = new Buffer([10,20,30,40,50]);`

create a buffer from a given string and optionally encoding type (eg. "ascii", "utf8", "utf16le", "usc2", "base64" or "hex")

`var buf = new Buffer("Learning Node.js", "utf-8");`

[List of Tutorials](https://github.com/shane030716/node-js)

#### Writing to Buffers
Syntax:

`buf.write(string[, offset][, length][, encoding])`

Parameters:
* `string` - This is string data to be written to buffer
* `offset` - This is the index of the buffer to start writing at. Default value is 0.
* `length` - This is the number of bytes to write. Defaults to buf.length.
* `encoding` - Encoding to use. 'utf8' is the default encoding.

Return Value:

This method returns number of octets written. If there is not enough space in the buffer to fit the entire string, it will write a part of the string.
See `//Writing to Buffers` in [main.js](main.js)

#### Reading from Buffers
Syntax:

`buf.toString([encoding][, start][, end])`

Parameters:
* `encoding` - Encoding to use. 'utf8' is the default encoding.
* `start` - Beginning index to start reading, defaults to 0.
* `end` - End index to end reading, defaults to complete buffer.

Return Value:

This method decodes and returns a string from buffer data encoded using the specified character set encoding.
See `//Reading from Buffers` in [main.js](main.js)

