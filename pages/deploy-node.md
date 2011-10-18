# Using Node on Engine Yard Cloud

This page provides some information about running a Node application on Engine Yard Cloud.

This is the process:

* [Set up your local environment for Node development][1]
* [Create your first Node application][2]
* [Run a Node application on Engine Yard Cloud][3]

You can find further configuration information and advanced topics under these other sections:

* [Environment variables][4]
* [Using Web Sockets][5]

<a href="#topic1"><h2 id="#topic1">Prepare your local machine for Node</h2></a>

1. Install Node.

  To build Node from source you can follow the step provided int [the project's wiki](https://github.com/joyent/node/wiki/Installation).
  Alternatively, if you're using Mac OS X you can install it using [Homebrew](http://mxcl.github.com/homebrew/) with this command:

    brew install node

2 Install Npm.

  [Npm](http://npmjs.org/) is the default package manager for Node. To install it you only need to run this command:

    curl http://npmjs.org/install.sh | sh

<a href="#topic2"><h2 id="#topic2">Create your first Node application</h2></a>

This is an example of a simple Node application using the [Express](http://expressjs.com/) web framework.

1. Specify your application dependencies in `package.json`:

We use this file to resolve the dependencies that your application needs. You can read more about what's required here in the [Npm documentattion](http://npmjs.org/doc/json.html), but this is how the file looks like for our example:

```json
{
  "name": "node-hello-world",
  "version": "0.0.1",
  "dependencies": {
    "express": "2.2.0"
  }
}
```

2. Write your application in `app.js` or `server.js`:

This is the same basic example that you can find in the Express web page but with a slight modification. You have to set the port which the application is running using the environment variable `PORT`. To know more about this environment variable you can check the section about [the variables that we expose](#topic4).

```javascript
var express = require('express');
var app     = express.createServer();
var port    = process.env.PORT || 3000;

app.get('/', function(request, response) {
  response.send('Hello Engine Yard Cloud!');
});

app.listen(port);
```

You can find this example completed in this git repository: http://github.com/engineyard/node-basic-app

<a href="#topic3"><h2 id="#topic3">Run a Node application on Engine Yard Cloud</h2></a>

1. Request access to the Node Alpha program on [Engine Yard Node Alpha](#).

2. In you Dashboard, create a new application and select "NodeJS" in the applications' type field.

3. Create the environment. The required runtime and servers are already selected for you.

    - Create a custom cluster and choose "Large" as the size for your App Instances. This step is required due to Node is limited to work on 64bit instances for now, but it will be removed before launching Beta.

4. Deploy your application.

<a href="#topic4"><h2 id="#topic4">Environment variables</h2></a>

By default Engine Yard Cloud exposes some variable environments to applications. These variables can be used to add further configuration for each application.

Here, we list all the available variables:

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

<a href="#topic5"><h2 id="#topic5">Using Web Sockets on Engine Yard Cloud</h2></a>

We use a reverse tcp proxy for Nginx that allows us to route websocket requests directly to your Node application. You can use frameworks like [Socket IO](http://socket.io/) to use websockets easily.

This repository includes an example of a completely functional Node application that uses them to create a chat room:

https://github.com/engineyard/nodechat

[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
