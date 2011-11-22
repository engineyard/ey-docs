# Finding key information about your database

When an Engine Yard Cloud environment is created, a database is set up for the application. 

The database.yml is written to the /data/*app_name*/shared/config/ directory in the Application and Database instance (single server environment) or the Application Master instance (clustered environment). 

The database.yml file contains key information about your database.

Here are some example database.yml files.  

* For a MySQL database in a single server environment   

        production:
	      adapter:   mysql2
	      database:  myapp
	      username:  deploy
	      password:  MyP4ssW0rd (75NdX2ia1b)
    	  host:      ec2-174-129-17-196.compute-1.amazonaws.com
	      reconnect: true

* For a MySQL database in a clustered environment  

        production:
	      adapter:   mysql2
	      database:  myapp
    	  username:  deploy
    	  password:  MyP4ssW0rd (ITcq203g2U)
    	  host:      ec2-184-73-124-47.compute-1.amazonaws.com
    	  reconnect: true
	

* For a PostgreSQL database in a single server environment  

        production:
    	  adapter:   postgresql
	      database:  myappp
    	  username:  deploy
    	  password:  MyP4ssW0rd (GCmIVIAUbT)
    	  host:      ec2-107-20-236-163.compute-1.amazonaws.com
	      reconnect: true
	

* For a PostgreSQL database in a clustered environment  

        production:
    	  adapter:   postgresql
    	  database:  postgres_test2
    	  username:  deploy
	      password:  MyP4ssW0rd  (uf1XGqDDN1)
	      host:      ec2-184-73-113-43.compute-1.amazonaws.com
	      reconnect: true
	   	
	    production:
		  adapter:   postgresql
		  database:  myappp
		  username:  deploy
		  password:  FBwgKemkuR
		  host:      ec2-50-18-139-19.us-west-1.compute.amazonaws.com
		  reconnect: true
	

* **database name.** The database is always named the same as your application. In examples, "myapp" is the application name.
* **username.** This is the name of the database user. This username is always deploy.
* **password.** This is the password for the deploy database user and also the root database user. It is an automatically-generated, case-sensitive, alphanumeric string. In examples, "MyP4ssW0rd" is the database password.  
* **host.** This identifies the server instance that is hosting the database. 




## To access your database.yml file

1. Via SSH, connect to the Application and Database instance (for single server environment) or the Application Master instance (for a clustered environment).

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
	    <td>SSHing into an instance</td><td>[[Connect to your instance via SSH|Connect to your instance via SSH|ssh-connect]]</td>
	  </tr> 
	</table>
