# Using Node on Engine Yard Cloud

This page describes how to run a Node application on Engine Yard Cloud.

This is the process:

* [Set up your local environment for Node development][1]
* [Create your first Node application][2]
* [Run a Node application on Engine Yard Cloud][3]

<h2 id="topic1">Prepare your local machine for Node</h2>

1. Install Node.  

    To build Node from source you can follow the step provided int [the project's wiki](https://github.com/joyent/node/wiki/Installation).  
    Alternatively, if you're using Mac OS X, install Node using [Homebrew](http://mxcl.github.com/homebrew/) with this command:

        brew install node

  Or with the prebuild [OS X packages](https://sites.google.com/site/nodejsmacosx/) (outdated).

2. Install Npm.

    [Npm](http://npmjs.org/) is the default package manager for Node. To install it, run this command:

        curl http://npmjs.org/install.sh | sh

<a href="#topic2"><h2 id="topic2">Create your first Node application</h2></a>

1. Specify your application dependencies in `package.json`:  

    This is a simple example of a Npm descriptor that uses the Express framework.

        {
          "name": "node-hello-world",
          "version": "0.0.1",
          "dependencies": {
            "express": "2.2.0"
          }
        }

2. Write your application in `app.js` or `server.js`:

Using the same web framework we can create straight forward Node applications.

```javascript
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
```

<h2 id="topic3">Run a Node application on Engine Yard Cloud</h2>

1. Request access to the Node Alpha program on [Engine Yard Node Alpha]('#").

2. In the Dashboard, create a new application and select "NodeJS" in the application type field.

3. Create the environment.  

    The required runtime and servers are selected for you.

4. Create a custom cluster and choose "Large" as the size for your App Instances. This step is required due to Node is limited to work on 64bit instances for now, but it will be removed before launching Beta.

5. Deploy your application.



## Environment variables

By default, Engine Yard Cloud exposes some environment variables to applications. These variables can be used to configure applications.
<!-- original said "some variable environments". I changed this to "some environment variables" -->

The variables are:

- PORT: The port number where the Node server is running.
- NODE_ENV: The environment in which the application is running.
- NODE_ROOT: The root path of the application.
- DB_USER: User name to connect to the database.
- DB_PASSWORD: Password to connect to the database.
- DB_HOST: Database host server.
- DB_MASTER: Alias for the database host server.
- DB_SLAVES: List of slaves host names if there is any.

To use those variables we can easily access to them through the process. For instance, to get the port number we can use this:

```javascript
var port = process.env.PORT;
```

## Using Web Sockets on Engine Yard Cloud

We use a reverse tcp proxy for Nginx that allows us to route websocket requests directly to your Node application. You can use frameworks like [Socket IO](http://socket.io/) to work with websockets.

This repository includes a functional Node application that uses web sockets:

https://github.com/calavera/nodechat


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"