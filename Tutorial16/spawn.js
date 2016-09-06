//const? Is it constant? like let in Swift?
const fs = require("fs");
const child_process = require("child_process");

for (var i=0; i<3; i++) {
	
	var workerProcess = child_process.spawn('node', ['support.js', i]);

	//Note that stdout and stderr are streams
	workerProcess.stdout.on("data", function(data) {
		console.log("stdout: " + data);
	});

	workerProcess.stderr.on("data", function(data) {
		console.log("stderr: " + data);
	});

	workerProcess.on("close", function(code) {
		console.log("Child process exited with exit code %s", code);
	});
}