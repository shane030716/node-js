# Tutorial 14

### Express Framework

#### Overview

Express is a minimal and flexible Node.js web application framework that prdvides a robust set of features to develop web and modile applications. It facilitates a rapid development of Node based Web applications. Following are some of the core features of Express framework:

* Allows to set up middlewares to respond to HTTP Requests.
* Defines a routing table which is used to perform different actions based on HTTP method and URL
* Allows to dynamically render HTML Pages based on passing arguments to templates

#### Install Express

For now, we will just install in locally.

`npm install express --save` *(The option `--save` means "Package will appear in your **dependancies**")*

The `express` framework should be installed in the `node_modules` folder. These following modules are important and should install along with `express`:

* **body-parse** - This is a node.js middleware for handling JSON, RAW, Text and URL encoded form data/
* **cookie-parse** - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
* **multer** - This is a node.js middleware for handling multiplart/form-data

```
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
```

#### Hello World Example

See [server.js](server.js)

*(Question: when to use `http.createServer(callback).listen(port)` and when to use `express().listen(port, callback)`?)*

#### Request & Response

```
app.get("/", function (req, res) {
	// ...
});
```

See more detail about [Request](http://www.tutorialspoint.com/nodejs/nodejs_request_object.htm) and [Response](http://www.tutorialspoint.com/nodejs/nodejs_response_object.htm)

#### Basic Routing

`GET`, `POST`, `PUT`, `DELETE` requests.
Regular expression mapping for URLs

See [server_routing.js](server_routing.js)

#### Service Static Files

Create a folder named "public" and put all static files inside.

`app.use(express.static('public'))`

*Note that do not add "public" to the url of the static file*

See [static_files.js](static_files.js)

#### Get Method

Use `res.sendFile(__dirname + "/" + filename)` to show pages

Use `req.query.first_name` to get query string values from get requests.

Recall `JSON.stringify(:)`

#### Post Method

Need to use `body-parser` module to create an `application/x-www-form-urlencoded` parse.

```
var bodyParse = require('body-parse');
var urlencodedParser = bodyParser.urlencoded({extended: false});
```

Need to pass the `urlencodedParser` to the `post` method
```
app.post('/process_post', 'urlencodedParser', function(req, res) {
	// ...
});
```

For post requests, use `req.body.first_name` to get the form value

#### File Upload

See [file_upload.js](file_upload.js) and [file_upload.htm](file_upload.htm)

* Don't forget to add `enctype=multipart/form-data` in the html form
* Need to use multer `var multer = require('multer')`
* `app.use(multer({ dest: 'tmp/'}).single('myfile'));` Need to specify the fieldname using `single`, `array` or `fields`. See [multer's official page](https://github.com/expressjs/multer)
* In the tutorial page, it didn't specify `single`, `array` or `fields` and the code throws an error on this line `app.use(multer({ dest: 'tmp/'})`
* So I used `single`, and I had to use
```
	console.log(req.file.originalname);
	console.log(req.file.path);
	console.log(req.file.mimetype);
```
Instead of 
```
console.log(req.files.file.name);
console.log(req.files.file.path);
console.log(req.files.file.type);
```

#### Cookie Management

See [cookies.js](cookies.js)

[List of Tutorials](https://github.com/shane030716/node-js#list-of-tutorials)