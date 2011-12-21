# Deploying Node.js applications on Engine Yard Cloud

Node.js is now available for testing as part of the Engine Yard Labs program. Read this page if you want to try Node.js with Engine Yard Cloud.

This page describes how to create Node.js application and deploy it on Engine Yard Cloud.

This is the process:

* [Set up your local environment for Node.js development][1]
* [Create your Node.js application][2]
* [Deploy your Node.js application on Engine Yard Cloud][3]

**Note:** If you already have a Node.js application in a git repository or if you want to deploy one of the Engine Yard test applications for Node.js, skip to [Run your Node.js application on Engine Yard Cloud][3].

Additional information at the bottom of this page: 

* [Environment variables][4]
* [Using WebSocket][5]
* [About CoffeeScript and Node.js][7]


<h2 id="topic1">Prepare your local machine for Node.js</h2>

If you haven't written Node.js applications before, follow these steps to set up your local machine for Node.js development. 

<h3>To prepare your local machine for Node.js</h3>

1. Install Node.js.  

    * To build Node.js from source, follow the steps in [the project wiki](https://github.com/joyent/node/wiki/Installation).  
    * Alternatively, if you are using Mac OS X, install Node.js using [Homebrew](http://mxcl.github.com/homebrew/) with this command: 

            brew install node

2. Install [npm](http://npmjs.org/).

    Npm is the default package manager for Node.js.

        curl http://npmjs.org/install.sh | sh

<h2 id="topic2">Create your Node.js application</h2>

Write and test your Node.js application on your local machine. The two important files are the package.json file and the app.js or server.js file.


<h3>To create your Node.js application</h3>

1. Specify your application dependencies in `package.json`.  

    This file is used to resolve the dependencies that your application needs. For more information about the package.json file, see [Specifics of npm's package.json handling](http://npmjs.org/doc/json.html). The sample package.json file for the node-simple-example application is shown [below][6].

2. Write your application in `app.js` or `server.js`.  
    If you don't have an application, try the [node-simple-example][6] application.

3. Install the dependencies for your application by running npm install:  

        npm install

    For example, this installs [Express](http://expressjs.com) if you are using the node-simple-example application.

4. Test your application locally.

5. Push your application files to a git repository.

<h3 id="topic6">The node-simple-example application</h3>

This is the application for the node-simple-example. This application is very similar to the [Express](http://expressjs.com/) example. One modification is that the port that the application is running on is set using the environment variable `PORT`. 

```javascript
var express = require('express');
var app     = express.createServer();
var port    = process.env.PORT || 3000;

app.get('/', function(request, response) {
  response.send('Hello Engine Yard Cloud!');
});

app.listen(port);
```
This is the example package.json file for the node-simple-example application:

```json
{
  "name": "node-hello-world",
  "version": "0.0.1",
  "dependencies": {
    "express": "2.5.0"
  }
}
```


You can also find this example in the git repository: [github.com/engineyard/node-simple-example](http://github.com/engineyard/node-simple-example)

<h2 id="topic3">Run your Node.js application on Engine Yard Cloud</h2>

These steps describe how to deploy a Node.js application (from a git repository) on Engine Yard Cloud.

<h3>To run a Node.js application on Engine Yard Cloud</h3>

1. Request access to the Node.js Labs program ([[Request access to Node.js Labs|signup-node]]).

2. In the Dashboard, create a new application and set Application Type to Node.js.  
    If you do not have a Node.js application in a git repository, try one of our example applications: http://github.com/engineyard/node-simple-example or https://github.com/engineyard/node-websockets-example

3. Create the environment.  

    The application server stack and runtime are set automatically to Nginx and Node.js.

4. Create a custom cluster.  
    Set the Server Size to Large for the application instances.

5. Deploy your application.


<h2 id="topic4"> Environment variables </h2>

By default, Engine Yard Cloud exposes some environment variables to Node.js applications. These variables can be used to configure applications.

The variables are:

- PORT: The port number where the Node.js server is running.
- NODE_ENV: The environment in which the application is running.
- NODE_ROOT: The root path of the application.
- DB_USER: User name to connect to the database.
- DB_PASSWORD: Password to connect to the database.
- DB_HOST: Database host server.
- DB_MASTER: Alias for the database host server.
- DB_SLAVES: List of slaves host names if there is any.

These variables can be accessed through the process. For example, to get the port number:

```javascript
var port = process.env.PORT;
```

<h2 id="topic5">Using WebSocket on Engine Yard Cloud</h2>

Engine Yard Cloud uses a reverse TCP proxy for Nginx that routes WebSocket requests directly to your Node.js application. You can use frameworks like [Socket IO](http://socket.io/) to work with WebSocket.

This repository contains an example Node.js application that uses Socket IO to create a chat room: [https://github.com/engineyard/node-websockets-example](https://github.com/engineyard/node-websockets-example)

<h2 id="topic7">About CoffeeScript and Node.js</h2>

You can write your Node.js application in CoffeeScript instead of JavaScript. 
Note that files named *app*.coffee and *server*.coffee are ignored if there are corresponding *app*.js and *server*.js files.


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
