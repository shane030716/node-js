# Tutorial 6

### Event Loop

While Events seems similar to what callbacks are. The difference lies in the fact that callback functions are called when **an asynchronous function returns its result** where as event handling works on the **observer pattern**. The functions which listens to events acts as Observers. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which is used to bind events and event listeners as follows:

```
// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
```

Following is the syntax to bind event handler with an event:
```
// Bind event and even handler as follows
eventEmitter.on('eventName', eventHandler);
```
We can fire an event programatically as follows:
```
// Fire an event 
eventEmitter.emit('eventName');
```

See [main.js](main.js)

[List of Tutorials](https://github.com/shane030716/node-js#list-of-tutorials)
