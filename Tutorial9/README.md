# Tutorial 9

### Stream

Streams are objects that let you read data from a source or write data to a destination in **continUous** fasion. In Node.js, there are four types of streams.

* **Readable** - Stream which is used for read operation
* **Writable** - Stream which is used for write operation
* **Duplex** - Stream which can be used for both read and write operations.
* **Transform** - A type of **duplex** stream where the output is computed based on input.

Each type of Stream is an **EventEmitter** instance and throws several events at different instance of times. For example, some of the commonly used events are

* `data` - This event is fired when there is data available to read.
* `end` - This event is fired when there is no more data to read.
* `error` - This event is fired when there is any error receiving or writing data.
* `finish` - This event is fired when all data has been flushed to underlying system. *(Difference from `end`?)*

#### Reading from Stream

See and run [readStream.js](readStream.js) and [input.txt](input.txt)

#### Writing to Stream

Delete `ouput.txt` if it exists

See and run [writeStream.js](writeStream.js), and then see [output.txt](output.txt)

#### Piping streams

Piping is a mechanism where we provided output of one stream as the input to another stream.

Delete `piping-out.txt` if it exists

See and run [pipingStreams.js](pipingStreams.js), and then see [piping-output.txt](piping-output.txt)

#### Chaining streams

Chaining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations.

Delete `chaining-output.txt.gz` and `non-chaining-output.txt.gz` if they exist

See [chainingStreams.js](chainingStreams.js) for both the chaining and non-chaining versions, then run it. After that, extract [chaining-output.txt.gz](chaining-output.txt.gz) and [non-chaining-output.txt.gz](non-chaining-output.txt.gz)
