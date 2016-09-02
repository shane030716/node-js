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

See [Asynchronous.js](Asynchronous.js)

#### Open a File

Syntax:

`fs.open(path, flags[, mode], callback)`

Parameters:

* `path` - This is the string having file name including path.
* `flags` - Flag tells the behavior of the file to be opened.  See all the flags [below](#flags)
* `mode` - This sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writable.
* `callback` - This is the callback function which gets two arguments (err, fd). *(fd is file descriptor?)*

#### Flags
Flag | Description
___ | ___
r | Open file for reading. An exception occurs if the file does not exist.