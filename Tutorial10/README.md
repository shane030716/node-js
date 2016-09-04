# Tutorial 10

### File System

#### Summary

Some common and useful methods:

`fs.open(path, flags[, mode], callback(err, fd){})`

`fs.stat(path, callback(err, stats){})`

`fs.writeFile(fileName, data[, options], callback(err){})`

`fs.read(fd, buffer, offset, length, position, callback(err, btyesRead, buffer){})`

`fs.close(fd, callback(err){})`

`fs.ftruncate(fd, len, callback(err){})`

`fs.unlink(path, callback(err){})`

`fs.mkdir(path[, mode], callback(err){})`

`fs.readdir(path, callback(err, files){})`

`fs.rmdir(path, callback(err){})`

#### Synchronous vs Asynchronous

Asynchronous:

`fs.readFile(fileName, function(err, data){})`

Synchronous:

`var data = fs.readFileSync(fileName)`

See [asynchronous.js](asynchronous.js)

#### Open a File

Syntax:

`fs.open(path, flags[, mode], callback(err, fd){})`

Parameters:

* `path` - This is the string having file name including path.
* `flags` - Flag tells the behavior of the file to be opened.  See all the flags [below](#flags)
* `mode` - This sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writable.
* `callback` - This is the callback function which gets two arguments (err, fd). *(fd is file descriptor?)*

See [openFile.js](openFile.js)

#### Flags
Flag | Description
--- | :---
r | Open file for reading. An exception occurs if the file does not exist.
r+ | Open file for reading and writing. An exception occurs if the file does not exist.
rs | Open file for reading in synchronous mode.
rs+ | Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
w | Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
wx | Like 'w' but fails if path exists.
w+ | Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
wx+ | Like 'w+' but fails if path exists.
a | Open file for appending. The file is created if it does not exist.
ax | Like 'a' but fails if path exists. *(Does this just mean 'w'?)*
a+ | Open file for reading and appending. The file is created if it does not exist.
ax+ | Like 'a+' but fails if path exists. *(Same as w+?)*

#### Get File Information

Syntax:

`fs.stat(path, callback(err, stats){})`

Parameters:

* `path` - This is the string having file name including path.
* `callback` - This is the callback function which gets two argument(err, stats) where stats is an object of `fs.Stats` type. [Useful methods](#fs-stats) for class fs.Stats

See [getFileInfo.js](getFileInfo.js)

#### fs.Stats

Method | Description
:--- | :---
stats.isFile() | Returns true if file type of a simple file.
stats.isDirectory() | Returns true if file type of a directory.
stats.isBlockDevice() | Returns true if file type of a block device.
stats.isCharacterDevice() | Returns true if file type of a character device.
stats.isSymbolicLink() | Returns true if file type of a symbolic link.
stats.isFIFO | Returns true if file type of a FIFO (first in first out).
stats.isSocket() | Returns true if file type of asocket.

#### Writing File

Syntax:

`fs.writeFile(fileName, data[, options], callback(err){})`

Parameters:

* `path` - This is string having file name including path.
* `data` - This is the String or Buffer to be written into the file.
* `options` - The third parameter is an object which will hold `{encoding, mode, flag}`. By default encoding is utf8, mode is octal value 0666 and flag is 'w'.
* `callback` - This is the callback function which gets a single parameter `err` and used to return error in case of any writing error.

See [writingFile.js](writingFile.js)

#### Reading File

Syntax:

`fs.read(fd, buffer, offset, length, position, callback(err, btyesRead, buffer){})`

Parameters:
* `fd` - This is the file descriptor returned by file `fs.open()` method.
* `buffer` - This is the buffer that the data will be writtern to.
* `offset` - This is the offset in the buffer to start writing at.
* `length` - This is an integer specifying the number of **bytes** to read.
* `position` - This is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.
* `callback` - This is the callback function which gets the three arguments `(err, bytesRead, buffer)`

See [readFile.js](readFile.js)

*(At this point, I'm having a question. When should we use `fs.readFile` and when should we use `fs.open` & `fs.read` ?)*

#### Closing File

Syntax:

`fs.close(fd, callback(err){})`

Parameters:

* `fd` - This is the file descriptor returned by file fs.open().
* `callback` - This is the callback function which has only one argument `err`.

See [closeFile.js](closeFile.js)

#### Truncate File

Syntax: 

`fs.ftruncate(fd, len, callback(err){})`

Parameters:

* `fd` - This is the file descriptor returned by file fs.open() method
* `len` - This is the length of the file after which file be truncated
* `callback` - This is the callback function which has only `err` argument

See [truncateFile.js](truncateFile.js)

#### Delete File

Syntax: 

`fs.unlink(path, callback(err){})`

Paramters:

* `path` - This is the file name including path
* `callback` - Callback function with only the `err` argument

See [deleteFile.js](deleteFile.js)

#### Create Directory

Syntax:

`fs.mkdir(path[, mode], callback(err){})`

Parameters:

* `path` - This is the directory name including path.
* `mode` - This is the directory permission to be set. Defaults to be 0777.
* `callback` - This is the callback function which has only the `err` argument.

See [createDirectory.js](createdDirectory.js)

#### Read Directory

Syntax:

`fs.readdir(path, callback(err, files){})`

Parameters:
* `path` - This is the directory name inclduing path.
* `callback` - This is the callback function which gets two arguments `(err, files)` where files is an array of the names of the files in the directory excluding "." and "..".

See [readDirectory.js](readDicectory.js)

#### Remove Directory

Syntax:

`fs.rmdir(path, callback(err){})`

Parameters:

* `path` - This is the directory name including path.
* `callback` - Callback function with only the `err` argument.

See [removeDirectory.js](removeDirectory.js);

More methods in the Methods Reference section in [here](http://www.tutorialspoint.com/nodejs/nodejs_file_system.htm)

[Official documentation for File System](https://nodejs.org/api/fs.html)

[List of Tutorials](https://github.com/shane030716/node-js#list-of-tutorials)