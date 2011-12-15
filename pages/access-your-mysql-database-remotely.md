# Access Your MySQL Database Remotely

Your instance of MySQL is not directly accessible outside your cloud cluster.  This is generally considered to be part of best practice when working with databases since a database cannot reasonably maintain the security and patch level of something like SSH.  In order to access your database from an external database tool such as *MySQL Query Browser*, or *SQLyog* you must start by creating an SSH Tunnel to your database host.

## A Bit About SSH Tunnels

An SSH Tunnel links a port on your local system to a port on a remote host.  When these ports are linked anything communicated to the local port is passed through SSH to the remote port; likewise, any communication to the remote port is passed back through SSH to the local port.  The added benefit of this setup is that the communications between your system and the remote host will be encrypted by the SSH connection.

## Defining the Tunnel

The basic syntax for the connection is:

    ssh -L [local port]:[dbhost]:[remote port] [username]@[remote host]

So lets start filling in the pieces:

  * __[local port]__ This is the local port that you will connect your application to.  If you have a local MySQL installation on your local system it will be running on port 3306 by default, so we recommend using 3307 for this value.
  
  * __[dbhost]__ This is the hostname or IP address of the database host relative to the [remote host] which you connected to.  If the [remote host] is the database instance you will want to set this to 127.0.0.1 (so it refers to itself).  If you used an application instance as [remote host] then you can use the value of "host:" from your database.yml instead.
  
  * __[remote port]__ This is the port that your remote database listens for connections on; by default this is 3306.
  
  * __[username]__ This is your username for connecting to the [remote host], the default is "deploy".
  
  * __[remote host]__ This is the host your tunnel will connect to and can be the database instance itself or one of your application instances.

## Putting it Together

The tunneling command opens an SSH session with the [remote host] specified.  The tunnel will work as long as that SSH session is active.  If the session window is consuming valuable workspace we recommend minimizing it as running tunnels in the background can lead to multiple tunnels and port conflicts.

So a connection directly to the database instance might look like:

    ssh -L 3307:127.0.0.1:3306 deploy@ec2-111-111-111-11.compute-0.amazonaws.com

A connection using an application instance as [remote host] would look like

    ssh -L 3307:ec2-111-111-111-11.compute-0.amazonaws.com:3306 deploy@ec2-222-222-222-22.compute-0.amazonaws.com

## Testing the Connection

Before connecting the intended application it is good to make sure the tunnel is working properly.  The best tool for this is the MySQL console.  

**Note:** for the -h argument it is necessary to use `127.0.0.1` instead of `localhost`

    mysql -u[db username] -p -P [local port] -h 127.0.0.1
