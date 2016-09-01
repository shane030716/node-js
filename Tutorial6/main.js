//Import events module
var events = require('events');

//Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHanlder = function contected() {
	console.log("Connection successful");
	eventEmitter.emit("data_received");
}

// Bind the connection event with connectHandler
eventEmitter.on("connection", connectHanlder);

// Bind the data_received event with its handler
eventEmitter.on("data_received", function() {
	console.log("data received successfully");
});

// Fire the connection event
eventEmitter.emit("connection");

console.log("Program Ended");
