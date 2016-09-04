/*
 * Global Objects
 */

// __filename
console.log("The name of this file is " + __filename);

// __dirname
console.log("The name of current directory is " + __dirname);

//setTimeout
function printHello() {
	console.log( "Testing setTimeout");
	printCurrentTime();
}

printCurrentTime();
setTimeout(printHello, 2000);

//clearTimeout
function printHello2() {
	console.log( "Testing clearTimeout");
	printCurrentTime();
}

var t = setTimeout(printHello2, 5000);
clearTimeout(t);
//Note that printHello2 didn't get to be executed

//setInterval
function printHello3() {
	console.log("Testing setInterval");
	printCurrentTime();
}

setInterval(printHello3, 2000);

// A helper function to print the current time
//Note that this is different from normal javascript.
// This function is called above before it's declared, this will not work in javascript
function printCurrentTime() {
	var d = new Date();
	console.log(d);	
}