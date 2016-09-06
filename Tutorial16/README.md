# Tutorial 16

### Scaling Application - child_process module

Node.js runs in a single thread mode but it uses an event-driven paradigm to handle concurrency. It also facilitates creation of child processes to leverage parallel processing on multi-core cpu based systems.

Child process always have three streams (remember streams are EventEmitters too) **child.stdin**, **child.stdout**, **child.stderr** which may be shared with the stdio streams of the parent process.

Node provides `child_process` module which has the following three major ways to create child process.

* `exec` - `child_process.exec` method runs a command in a shell/console and buffers the output
* `spawn` - `child_process.exec` launches a new process with a given command
* `fork` - The `child_process.fork` method is a special case of the `spawn()` to create child processes.

#### The exec() method

`child_process.exec` method runs a command in a shell and buffers the output.

Syntax:

`child_process.exec(command[, options], callback(error, stdout, stderr){})`

Parameters:

* `command` - The command to be run in a string, with space-separated arguments.
* `options` - Object that may comprise one or more of the following options:
	* `cwd` - Current Working Directory of the child process in a string.
	* `env` - An enviroment key-value pairs object
	* `encoding` - String (default: 'utf8');
	* `shell` - String Shell to execute the command with (Default: `/bin/sh` on UNIT, 'cmd.exe' on Windows. The shell should understand the `-c` switch on UNIX or `/s` `/c` on Windows. On Windows, command line parsing should be compatiable with 'cmd.exe'.)
	* `timeout` - Number (Default: 0)
	* `maxBuffer` - Number (Default: 200 * 1024)
	* `killSingal` - String (Default: 'SIGTERM')
	* `uid` - Number. It sets the user identity of the process.
	* `gid` - Number. It sets the group identity of the process
* `callback` - Callback function which has three arguments `error`, `stdout` and `stderr`. The callback function is called when the process terminates.

The `exec()` method returns a **buffer** with a max size and waits for the process to end and tries to return all the buffered data at once. *(Need to know more about this sentence. Edit: According to the official document, it returns a `<ChildProcess>` object)*

See [exec.js](exec.js) and [support.js](support.js)

Pay attention to the `workerProcess` variable, it's the object returned by `exec()`, and then it binds an 'exit' event.

#### The spawn() method

`child_process.spawn` method launches a new process with a given command.

Syntax: 

`child_process.spawn(command[, args][, options])`

Parameters:

* `command` - The command to be run in a string.
* `args` - Array of string arguments.
* `options` - Object that may comprise one or more of the following options:
	* `cwd` - Current Working Directory of the child process in a string.
	* `env` - An enviroment key-value pairs object
	* `stdio` -  Child's stdio configurations in an array or a string.
	* `customFds` - Deprecated File descriptors in an array for the child to use for stdio.
	* `detached` - Boolean. The child will be a process group leader.
	* `uid` - Number. It sets the user identity of the process.
	* `gid` - Number. It sets the group identity of the process.

See [spawn.js](spawn.js) and [support.js](support.js)

The `spawn()` method returns a `<ChildProcess>` object and it has these two properties, `stdout` & `stderr`, which are streams. They should be used when the process returns larget amount of data. `spawn()` starts receiving the response as soon as the process starts executing. Note that there are two lines in 'support.js', so the callback in for `stdout`'s `data` event will be executed twice. Also note that at the end the child process binds the 'close' event.

#### The fork method

`child_process.fork` method is a special case of the `spawn()` to create **Node** processes. So compared to `spawn()`, `fork()` does not need the `node` command which is the first argument of `spawn()`.

Syntax:

`child_process.fork(modulePath[, args][, options])`

Parameters:

* `modulePath` - Stirng. The module to run in the child
* `args` - An array of the string arguments.
* `option` - The option object may comprise one or more of the following options:
	* `cwd` - Current Working Directory of the child process
	* `env` - An enviroment key-value pairs object
	* `execPath` - String. Executable used to create the child process.
	* `silent` - Boolean. If `true`, `stdin`, `stdout` and `stderr` of the child will be piped to the parent, otherwise they will be inherited from the parent, see the "pipe" and "inherit" options for `spawn()`'s stdio for more details. (default is `false`).
	* `uid` - Number. It sets the user identity of the process.
	* `gid` - Number. It sets the group identity of the process.

See [fork.js](fork.js) and [support.js](support.js)

Note that at the end the child process binds the 'close' event.

A lot more from [here](https://nodejs.org/api/child_process.html)

[List of Tutorials](https://github.com/shane030716/node-js#list-of-tutorials)