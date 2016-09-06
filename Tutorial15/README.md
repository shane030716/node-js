# Tutorial 15

### RESTful API

#### Overview
Just to review some concepts.

REST stands for REpresentational State Transfer.

A REST Server provides access to resource and a REST client accesses and modifies the resources using HTTP protocol. Each resource is identitied by URIs/global IDs

#### HTTP methods

Most commonly used in REST based architecture:

* **GET** - This is used to provide a read only access to a resource.
* **PUT** - This is used to create a new resource.
* **DELETE** - This is used to remove a resource.
* **POST** - This is used to update an existing resource or create a new resource.

#### Creating RESTful for A Library

Consider we have a JSON based database. [users.json](users.json)

We are going to provide the following RESTful APIs.

URI | HTTP Method | Post body | Result
:--- | :--- | :--- | :---
listUsers | GET | empty | Show list of all the users.
addUser | GET | empty |Show the form for adding a new user.
addUser | POST | JSON String | Add details of new user.
deleteUser | DELETE | JSON String | Delete an existing user.
:id | GET | empty | Show details of a user.


Don't forget to install `express` and `body-parser`

Some key points

* `JSON.parse(data)`
* `JSON.stringify(data)`
* params `/:id`
* use `req.params.id` to get the value of the parameter
* `req.query` is used to get the query string values, eg. ?abc=123
* DELETE request should usually be called from ajax
* The `delete` operator in Javascript

Some URLs to try

* [http://localhost:8888/listUsers](http://localhost:8888/listUsers)
* [http://localhost:8888/addUser](http://localhost:8888/addUser)
* [http://localhost:8888/2](http://localhost:8888/2)
* [http://localhost:8888/deleteUser/3](http://localhost:8888/deleteUser/3)



[List of Tutorials](https://github.com/shane030716/node-js#list-of-tutorials)