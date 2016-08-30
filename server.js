var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plan"});
	response.write("Hello World!\n");
	response.end("Node.js is cool\n");
}).listen(8888);

console.log("Server running at localhost:8888/");