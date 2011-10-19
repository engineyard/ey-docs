# Using Node.js on Engine Yard Cloud

Node.js is now available for testing on Engine Yard Cloud. Read this page if you want to participate in the Engine Yard Node Alpha program.

This page describes how to run a Node.js application on Engine Yard Cloud.

This is the process:

* [Set up your local environment for Node.js development][1]
* [Create your Node.js application][2]
* [Run your Node.js application on Engine Yard Cloud][3]

Additional information at the bottom of this page about: 

* [Environment variables][4]
* [Using WebSocket][5]


<h2 id="topic1">To prepare your local machine for Node.js</h2>

1. Install Node.js.  

    To build Node.js from source follow the steps in [the project wiki](https://github.com/joyent/node/wiki/Installation).  
    Alternatively, if you are using Mac OS X, install Node.js using [Homebrew](http://mxcl.github.com/homebrew/) with this command: 

        brew install node

2. Install [npm](http://npmjs.org/).

    Npm is the default package manager for Node.js.

        curl http://npmjs.org/install.sh | sh

<h2 id="topic2">To create your Node.js application</h2>

1. Specify your application dependencies in `package.json`:  

    This file is used to resolve the dependencies that your application needs. For more information about the package.json file, see [Specifics of npm's package.json handling](http://npmjs.org/doc/json.html). This is the package.json file for the node-basic-app application [below][6]:

  	json
		{
		  "name": "node-hello-world",
		  "version": "0.0.1",
		  "dependencies": {
		    "express": "2.2.0"
		  }
		}

2. Write your application in `app.js` or `server.js`. 
    If you don't have an application, try the "node-basic-app" example application.

<h3 id="topic6">Example application (node-basic-app)</h3>

The example application here is the same as the [express one](http://expressjs.com/), except for a modification: the port that the application is running on is set using the environment variable `PORT`. 

    javascript
    var express = require('express');
    var app     = express.createServer();
    var port    = process.env.PORT || 3000;

    app.get('/', function(request, response) {
      response.send('Hello Engine Yard Cloud!');
    });

    app.listen(port);


You can find this example in the git repository: [github.com/engineyard/node-basic-app](http://github.com/engineyard/node-basic-app)

<h2 id="topic3">To run a Node.js application on Engine Yard Cloud</h2>

1. Request access to the Node.js Alpha program ([[Request access to Node.js Alpha|signup-node]]).

2. In the Dashboard, create a new application and set Application Type to Node.js.

3. Create the environment.  

    The application server stack and runtime are set automatically to Nginx and Node.js.

4. Create a custom cluster.  
    Make sure to choose Large for your Application Instances.  
    The application instance must be large because (for Alpha test period) Node.js is restricted to 64-bit instances.  

5. Deploy your application.



## Environment variables

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

    javascript
    var port = process.env.PORT;

<h2 id="topic4">Using WebSocket on Engine Yard Cloud</h2>

Engine Yard Cloud uses a reverse TCP proxy for Nginx that routes WebSocket requests directly to your Node.js application. You can use frameworks like [Socket IO](http://socket.io/) to work with WebSocket.

This repository contains an example Node.js application that uses Socket IO to create a chat room:

[https://github.com/engineyard/nodechat](https://github.com/engineyard/nodechat)


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"