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

#### Convert Buffer to JSON
use `buf.toJSON()`

See `//Convert Buffer to JSON` in [main.js](main.js)

#### Concatenate Buffers
Syntax:

`Buffer.concat(list[, totalLength])`

Parameters:

* `list` - Array List of Buffer objects to be concatenated
* `totalLength` - This is the total length of the buffers when concatenated

Return Value:

This method returns the concatenated Buffer instance

See `//Concatenate Buffers` in [main.js](main.js)

#### Compare Buffers
Syntax:

`buf.compare(otherBuffer);`

Parameters:

* `otherBuffer` - This is the other buffer which will be compared with **buf**

Return Value:

Returns a number indicating whether this comes before or after or is the same as the otherBuffer in sort order. (Similar to Java's `compareTo` function in `Comparable` classes.)

See `//Compare Buffers` in [main.js](main.js)

#### Copy Buffer
Syntax:

`buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])`

Parameters:

* `targetBuffer` - Buffer object where buffer will be copied to.
* `targetStart` - Number, Optional, Default: 0. I assume it's the index in the `targetBuffer` to start copy
* `sourceStart` - Number, Optional, Default: 0. I assume it's the start index of the source buffer `buf` to be copied
* `sourceEnd` - Number, Optional, Default: buffer.length. I assume it's the end index of the source buffer `buf`

Return Value:

No return value. Copies data from a region of this buffer to a region in the target buffer **even if the target memory regions overlaps in the source** *(What does this mean?)*. If undefined the targetStart and sourceStart parameters default to 0 while sourceEnd defaults to buffer.length

See `//Copy Buffer` in [main.js](main.js)

#### Slice Buffer
Syntax:

`buf.slice([start][, end])`

Parameters:

* `start` - Number, Optional, Default: 0
* `end` - Number, Optional, Default: 0

Return Value:

Returns a new buffer **which references the same memory as the old**, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes.. **Negative indexes start from the end of the buffer**.

See `// Buffer` in [main.js](main.js)

#### Buffer Length
`buf.length`

#### More
More methods in [here](http://www.tutorialspoint.com/nodejs/nodejs_buffers.htm)

[Official Nodejs Buffer Documentation](https://nodejs.org/api/buffer.html)
