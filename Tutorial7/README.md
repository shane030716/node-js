# Tutorial 7

### Event Emitter

Again, 
```
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
```

A list of instance methods
1. `addListener(event, listener)`
2. `on(event, listener)`
3. `once(event, listener)`
4. `removeListener(event, listener)`
5. `removeAllListeners([event])`
6. `setMaxListeners(n)`
7. `listeners(event)`
8. `emit(event, [arg1], [arg2], [...])`

Class (static) method
1. `listenerCount(emitter, event)`

Events
1. newListener
    * event
    * listener

2. removeListener
    * event
    * listener

See [main.js](main.js)

Move description [here](http://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm)

[Full official documentation](https://nodejs.org/api/events.html#events_class_eventemitter)

[List of Tutorials](https://github.com/shane030716/node-js)
