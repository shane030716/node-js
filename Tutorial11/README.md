# Tutorial 11

### Global Object

Node.js global objects are available in all modules. We can use them directly.

#### __filename

The **__filename** represents the filename of the code being executed. It's the absolute path of the code file.

#### __dirname

Similary, the **__dirname** represents the name of the directory that the currently executing script resides in.

#### setTimeout(callback, ms)

run `callback` after **at least** `ms` milliseconds. There might be additional delay due to external factor like OS timer granularity and system load.

Note that callback here is async

#### clearTimeout(t)

The `setTimeout()` returns an opaque value that represents the timer which can be used to clear the timer later.

So `clearTimeout(t)` is used to stop a timer that was previously created with `
setTimeout()`. Here `t` is the timer retured by `setTimeout()` function

#### setInterval(callback, ms)

The `setInterval(callback, ms)` is used to run `callback` repeatedly **at least** every `ms` milliseconds.

This function returns an opaque value that represents the timer which can be used to clear the timer using the function `clearInterval(t)`, similar to `clearTimeout` above.

See [main.js](main.js). Use Control-C to stop the program.

#### console

To print information on stdout and stderr. We've been using `console.log` and `console.error` a lot of times now. Other `console` methods:

1. `console.log([data][, ...])`
2. `console.info([data][, ...])`
3. `console.error([data][, ...])`
4. `console.warn([data][, ...])`
5. `console.dir(obj[, options])` Uses `util.inspect` on `obj` and prints resulting string to stdout.
6. `console.time(label)` Mark a time
7. `console.timeEnd(label)` Finish timer, record output.
8. `console.trace(message[, ...])` Print to stderr 'Trace :', followed by the formatted message and stack trace to the current position.
9. `console.assert(value[, message][, ...])` Similiar to `assert.ok()`, but the rror message is formatted as `util.format(message...)`.

#### process

More in [here](http://www.tutorialspoint.com/nodejs/nodejs_process.htm)

[List of Tutorials](https://github.com/shane030716/node-js#list-of-tutorials)