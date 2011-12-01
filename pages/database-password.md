# Finding key information about your database

When an Engine Yard Cloud environment is created, a database is set up for the application and a database.yml file is generated. The database.yml file contains key information about your database.

The database.yml is written to the /data/*app_name*/shared/config/ directory in the application and database instance (single server environment) or the Application Master instance (clustered environment). 

Here are some example database.yml files.  

* For a MySQL master database

        production:
	      adapter:   mysql2
	      database:  myapp
    	  username:  deploy
    	  password:  MyP4ssW0rd
    	  host:      ec2-172-16-124-47.compute-1.amazonaws.com
    	  reconnect: true

* For a PostgreSQL database cluster with a master database and a slave database

        production:
          adapter:   postgresql
          database:  myapp
          username:  deploy
          password:  MyP4ssW0rd
          host:      ec2-172-18-139-19.us-west-1.compute.amazonaws.com
          reconnect: true

        slave:
          adapter:   postgresql
          database:  myapp
          username:  deploy
          password:  MyP4ssW0rd
          host:      ip-192-168-47-113.us-west-1.compute.internal
          reconnect: true	

* **database name.** The database is always named the same as your application. In examples, `myapp` is the application name.  
* **username.** This is the name of the database user. This username is always deploy.  
* **password.** This is the password for the deploy database user and also the root database user. It is an automatically-generated, case-sensitive, alphanumeric string. In examples, `MyP4ssW0rd` is the database password.  
* **host.** This identifies the server instance that is hosting the database. 




## To view your database.yml file

1. Via SSH, connect to the application and database instance (for single server environment) or the Application Master instance (for a clustered environment).

2. Type:
        cat /data/myapp/shared/config/database.yml
  where "myapp" is the name of your application.

3. Make note of the database password.  
    You need this password to manage your database. 

<h2 id="topic5"> More information</h2>

<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
	  </tr> 
</table>
