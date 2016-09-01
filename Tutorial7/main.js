var events = require("events");
var eventEmitter = new events.EventEmitter();

//Special event "newListener"
eventEmitter.on("newListener", function(event, listener) {
	console.log("A new listener was just added for the event " + event);
});

//Special event "removeListener"
eventEmitter.on("removeListener", function(event, listener) {
	console.log("A listener was just removed for the event " + event);
});


//listener #1
var listener1 = function listener1() {
	console.log("listener1 executed.");
}

//listened #2
var listener2 = function listener2() {
	console.log("listener2 executed.");
}

//Bind the connection event with the listener1
eventEmitter.addListener("connection", listener1);

//Bind the connection event with listener2
eventEmitter.on("connection", listener2);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + " Listener(s) listening to connection event");

//Fire the connection event
eventEmitter.emit("connection");

//Remove the binding of listener1 from the connection event
eventEmitter.removeListener("connection", listener1);
console.log("Listener1 will not listen now.");

//Fire the connection event again
eventEmitter.emit("connection");

eventListeners = events.EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + " Listener(s) listening to connection event now");

console.log("Program ended.");