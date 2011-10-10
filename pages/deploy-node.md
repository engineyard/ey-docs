# Using Node on Engine Yard Cloud

This page provides some information about running a Node application on Engine Yard Cloud.

This is the process:

* [Set up your local environment for Node development][1]
* [Create your first Node application][2]
* [Run a Node application on Engine Yard Cloud][3]

<a href="#topic1"><h2 id="#topic1">Prepare your local machine for Node</h2></a>

1. Install Node.

  To build Node from source you can follow the step provided int [the project's wiki](https://github.com/joyent/node/wiki/Installation).
  Alternatively, if you're using Mac OS X you can install it using [Homebrew](http://mxcl.github.com/homebrew/) with this command:

    brew install node

  Or with the prebuild [OS X packages](https://sites.google.com/site/nodejsmacosx/) (outdated).

2 Install Npm.

  [Npm](http://npmjs.org/) is the default package manager for Node. To install it you only need to run this command:

    curl http://npmjs.org/install.sh | sh

<a href="#topic2"><h2 id="#topic2">Create your first Node application</h2></a>

1. Specify your application dependencies on `package.json`:

This is a simle example of a Npm descriptor that uses the Express framework.

```json
{
  "name": "node-hello-world",
  "version": "0.0.1",
  "dependencies": {
    "express": "2.2.0"
  }
}
```

2. Write your application on `app.js`:

Using the same web framework we can create straigh forward Node applications.

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

<a href="#topic3"><h2 id="#topic3">Run a Node application on Engine Yard Cloud</h2></a>

1. Request access to the Node Alpha program on [Engine Yard Node Alpha]('#").

2. In you Dashboard, create a new application and select "NodeJS" in the applications' type field.

3. Create the environment. The required runtime and servers are already selected for you.

    - Create a custom cluster and choose "Large" as the size for your App Instances. This step is required due to Node is limited to work on 64bit instances for now, but it will be removed before launching Beta.

4. Deploy your application.

[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
