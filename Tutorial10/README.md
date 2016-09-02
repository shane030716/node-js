# Tutorial 10

### File System

#### Synchronous vs Asynchronous

Asynchronous:
```
fs.readFile(fileName, function(err, data){
	// handle data and err	
})
```

Synchronous:

`var data = fs.readFileSync(fileName)`

See [asynchronous.js](asynchronous.js)

#### Open a File

Syntax:

`fs.open(path, flags[, mode], callback)`

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