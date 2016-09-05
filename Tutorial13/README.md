# Tutorial 13

### Web Module

#### Creating Web Server using Node

`http.createServer(function(request, response) {}).listen(port)`

See [server.js](server.js) & [index.htm](index.htm)

Run `server.js` on terminal

`node server.js`

Enter `http://localhost:8888/index.htm` on browser to check the output.

#### Creating Web client using Node

`var req = http.request(options, callback(err, response){});`

`req.end();`

Note that the `response` argument in the `callback` function seems to be a "Read Stream" instance, which is also an "EventEmitter" instance mentioned in [Tutorial 9](https://github.com/shane030716/node-js/tree/master/Tutorial09#tutorial-9).

See [client.js](client.js)

While running the `server.js` above, open another terminal and run `client.js`

[List of Tutorials](https://github.com/shane030716/node-js#list-of-tutorials)