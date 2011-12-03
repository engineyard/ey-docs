#Accessing your database remotely through an SSH tunnel

Your database instance is not directly accessible from outside the environment. This is a good thing because a database cannot reliably maintain the security and patch levels like SSH can. However, it means that to access your database from an external database tool, such as MySQL Query Browser, SQLyog, or pgAdmin, you need to create an SSH Tunnel to your database host/instance. 

For example, you want to run MySQL Query Browser or pgAdmin on your laptop and you want to use this tool to examine your application database: You create an SSH tunnel from your laptop (the local) to your database instance (the remote) on Engine Yard Cloud. 

You can also use SSH tunnels to set up offsite replication.

This page describes how to:  

* [Create an SSH tunnel manually][1]
* [Create a SSH tunnel in the background with a custom Chef recipe][2]

##About SSH tunnels
An SSH tunnel links a port on your local machine to a port on a remote host. When these ports are linked, anything communicated to the local port is passed through SSH to the remote port; likewise, any communication to the remote port is passed back through SSH to the local port. The added benefit of this setup is that the communications between your local machine and the remote host is encrypted by the SSH connection.

<h2 id="topic1">Create the SSH tunnel manually</h2>

The syntax for creating the SSH tunnel is `ssh -L [local port]:[database host]:[remote port] [username]@[database host]`

* `[local port]` The local port your database tool connects to.   
    If you have a MySQL installation on your local machine, it runs on port 3306 by default; therefore, don't use 3306 for the local port. For example, use 3307 instead.  
    If you have a PostgreSQL installation on your local machine, it runs on port 5432 by default; therefore, don't use 5432 for the local port. For example, use 5433 instead.

* `[database host]` The hostname or IP address of the database instance that you are tunneling to.

* `[remote port]` The port that your remote database listens for connections on.  
    For MySQL databases, this is 3306 by default.  
    For PostgreSQL database, this is 5432 by default.

* `[username]` the user for the database instance. The default user for the Engine Yard Cloud database is `deploy`.

###To create and test the SSH tunnel for a MySQL database

1. In a terminal window on your local machine, type:

        ssh -L 3307:ec2-174-129-17-196.compute-1.amazonaws.com:3306 deploy@ec2-174-129-17-196.compute-1.amazonaws.com

    where  
    `3307` is the local port,  
    `ec2-172-16-139-19.us-west-1.compute.amazonaws.com` is the database host,  
    `3306` is the listening port, and  
    `deploy` is the database username.

2. Before connecting the external database tool such as MySQL Query Browser or SQLyog, test the connection with a simple tool such as the database console, mysql.  
(Your tunnel needs to be running for this test.)

    Type		 

        mysql -udeploy -pMyP4ssW0rd -P 3307 -h 127.0.0.1

    where  
    `deploy` is the database username on the remote host,  
    `MyP4ssW0rd` is the password for the deploy user on the MySQL database, and  
    `3307` is the local port.
        
###To create and test the SSH tunnel for a PostgreSQL database

1. In a terminal window on your local machine, type
		
	    ssh -L 5433:ec2-172-16-139-19.us-west-1.compute.amazonaws.com:5432 deploy@ec2-172-16-139-19.us-west-1.compute.amazonaws.com

    where  
    `5433` is the local port,  
    `ec2-172-16-139-19.us-west-1.compute.amazonaws.com` is the database host,  
    `5432` is the listening port, and  
    `deploy` is the database username.

2. Before connecting the external database tool such as pgAdmin, test the connection with a simple tool such as the database console psql.  
    (Your tunnel needs to be running for this test.)

	Type		 
	    
	    psql -udeploy  -d myapp -P 5433 -h 127.0.0.1
	
    where  
    `5433` is the local port,  
    `ec2-172-16-139-19.us-west-1.compute.amazonaws.com` is the database host,  
    `5432` is the listening port, and  
    `deploy` is the database username.


    You are prompted for your database password. (psql cannot accept the password from standard input.)



<h2 id="topic2"> Setting up an SSH tunnel using a custom Chef recipe</h2>

The procedure above explained how to set up the SSH tunnel manually. 

An alternate way to set up an SSH tunnel is through this custom cookbook: [[//github.com/engineyard/ey-cloud-recipes/tree/master/cookbooks/ssh_tunnel|https://github.com/engineyard/ey-cloud-recipes/tree/master/cookbooks/ssh_tunnel]]

This recipe installs:

* An init script that sets up the SSH tunnel from the instance in the background
* A config file to have monit watch over the tunnel and keep it open

###To create an SSH tunnel using the Engine Yard ssh_tunnel custom Chef recipe

* Follow the instructions in the [[recipe|https://github.com/engineyard/ey-cloud-recipes/tree/master/cookbooks/ssh_tunnel]] and in [[Custom Chef Recipes|custom-chef-recipes]].

<h2 id="topic5"> More information</h2>

<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>Finding database hostname and password</td><td>[[Finding key information about your database|database-password]].</td></td>
	  </tr>
</table>


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4		"topic4"
[5]: #topic5        "topic5"