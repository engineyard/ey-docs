#Accessing your database remotely through an SSH tunnel

Your database instance is not directly accessible from outside the environment. This is a good thing because a database cannot reliably maintain the security and patch levels like SSH can. However, it means that to access your database from an external database tool, such as MySQL Query Browser, SQLyog, or pgAdmin, you need to create an SSH Tunnel to your database host/instance.

For example, you want to run MySQL Query Browser or pgAdmin on your laptop and you want to use this tool to examine your application database: You create an SSH tunnel from your laptop (the local) to your database instance (the remote) on Engine Yard Cloud. 

##About SSH tunnels
An SSH tunnel links a port on your local machine to a port on a remote host. When these ports are linked, anything communicated to the local port is passed through SSH to the remote port; likewise, any communication to the remote port is passed back through SSH to the local port. The added benefit of this setup is that the communications between your local machine and the remote host is encrypted by the SSH connection.

##Create the SSH tunnel

The syntax for creating the SSH tunnel is `ssh -L [local port]:[database host]:[remote port] [username]@[database host]`

* `[local port]` The local port your database tool connects to.   
    If you have a MySQL installation on your local machine, it runs on port 3306 by default; therefore, don't use 3306 for the local port. For example, use 3307 instead.  
    If you have a PostgreSQL installation on your local machine, it runs on port 5432 by default; therefore, don't use 5432 for the local port. For example, use 5433 instead.

* `[database host]` The hostname or IP address of the database instance that you are tunneling to. <!-- Original: If the [remote host] is the database instance you will want to set this to 127.0.0.1 (so it refers to itself). If you used an application instance as [remote host] then you can use the value of "host:" from your database.yml instead. -->

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
    `deploy` is the username.

2. Before connecting the external database tool such as MySQL Query Browser or SQLyog, test the connection with a simple tool such as the database console, mysql.

    a. Type `logout` to close the connection (the prompt and response are shown here):
        deploy@domU-12-31-39-12-8D-C2 ~ $ logout
        Connection to ec2-174-129-17-196.compute-1.amazonaws.com closed.

    b. To test the SSH tunnel, type		 

        mysql -udeploy -pMyP4ssW0rd -P 3307 -h 127.0.0.1
        mysql -udeploy -p75NdX2ia1b -P 3307 -h 127.0.0.1
        mysql -udeploy -p75NdX2ia1b -h 127.0.0.1 <-- This works if you don't logout.

    where  
    `deploy` is the username on the remote host,  
    `MyP4ssW0rd` is the password for the deploy user on the MySQL database, and  
    `3307` is the local port.
        
###To create and test the SSH tunnel for a PostgreSQL database

1. In a terminal window on your local machine, type
		
	    ssh -L 5433:ec2-172-16-139-19.us-west-1.compute.amazonaws.com:5432 deploy@ec2-172-16-139-19.us-west-1.compute.amazonaws.com

    where  
    `5433` is the local port,  
    `ec2-172-16-139-19.us-west-1.compute.amazonaws.com` is the database host,  
    `5432` is the listening port, and  
    `deploy` is the username.

2. Before connecting the external database tool such as pgAdmin, test the connection with a simple tool such as the database console psql.
    
    a. Type `logout` to close the connection (the prompt and response are shown here):
        deploy@domU-12-31-39-12-8D-C2 ~ $ logout
        Connection to ec2-172-16-139-19.us-west-1.compute.amazonaws.com closed.

	b. To test the SSH tunnel, type		 
	    
	    psql -udeploy -pMyP4ssW0rd -d myapp -P 5433 -h 127.0.0.1
	    psql -Udeploy -pFBwgKemkuR -d myapp -P 5433 -h 127.0.0.1
	    psql -Udeploy -pFBwgKemkuR -d myapp -h 127.0.0.1
	    psql -Udeploy -p5433 -dmyapp -h 127.0.0.1
	
	    psql -Udeploy -p5432 -dmyapp -h 127.0.0.1   <-- This one worked if you don't logout. No password needed. 
	
    where  
    `5433` is the local port,  
    `ec2-172-16-139-19.us-west-1.compute.amazonaws.com` is the database host,  
    `5432` is the listening port, and  
    `deploy` is the username.

<!-- ##Test the connection 

Before connecting the external database tool such as (MySQL Query Browser or pgAdmin), make sure the tunnel is working properly. Simple tools for this are the database consoles (mysql or psql). 

QUESTION: what's the result from this test. "If you can connect to the database console from your local machine using the loopback address (as if you are the remote machine), then the tunnel works."
  
###To test the connnection (MySQL)

1. On your local machine, type:
        mysql -udeploy -pMyP4ssW0rd -P 3307 -h 127.0.0.1

    where  
    `deploy` is the username on the remote host,
    `MyP4ssW0rd` is the password for the deploy user on the MySQL database
    `3307` is the local port
    **Note:** The -h argument is needed to use `127.0.0.1` instead of `localhost`.
	
To test the connnection (PostgreSQL)

1. On your local machine, type:
        psql -udeploy -pMyP4ssW0rd -d myapp -P 3307 -h 127.0.0.1

	where  
	`deploy` is the username on the remote host,
	`MyP4ssW0rd` is the password for the deploy user on the MySQL database
	`myapp` is the name of the database
	`3307` is the local port
 	**Note:** The -h argument is needed to use `127.0.0.1` instead of `localhost`. -->



<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>Finding database hostname and password</td><td>[[Finding key information about your database|database-password]].</td></td>
	  </tr>
</table>