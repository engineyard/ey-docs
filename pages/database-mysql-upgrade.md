# Using MySQL 5.1 or MySQL 5.5 with Engine Yard Cloud

The MySQL 5.1 and MySQL 5.5 databases are now candidates for testing on Engine Yard Cloud. Read this page if you want to participate in the MySQL 5.1/5.5 Early Access program.

**Important!** MySQL 5.1/5.5 on Engine Yard Cloud are Early Access features. Always test in a development or staging environment.


### Process

The process for setting up and running your application on MySQL 5.1 or MySQL 5.5 depends on your current environment.

**Note:** MySQL 5.5 is in Beta, and no signup is required.

* _Is this a new application?_ Then do these tasks:

   * For MySQL 5.1: [Get access to the Alpha program and ey-beta-talk group][2]  
   * [Set up an application to use MySQL 5.1/5.5][3]  

* _Are you running Engine Yard Cloud with MySQL 5.0.x now?_ Then, do these tasks:  

    * For MySQL 5.1: [Get access to the Alpha program and ey-beta-talk group][2]  
    * [Set up an application to use MySQL 5.1/5.5][3]  
    * [Dump and restore an existing MySQL 5.0.x database][4]
 
* _Are you migrating a MySQL-based application to Engine Yard Cloud from another platform?_ Then, do these tasks:  

    * For MySQL 5.1: [Get access to the Alpha program and ey-beta-talk group][2]  
    * [Set up an application to use MySQL 5.1/5.5][3]  
    * [Dump and restore an existing MySQL database][4]

* _Are you using a database other than MySQL?_ Then:  

    Please consult [[Engine Yard Professional Services|http://www.engineyard.com/services]] for assistance migrating your database to MySQL 5.1/5.5. 





<h2 id="topic2"> Get access to the Alpha program and ey-beta-talk group </h2>

Follow this procedure to gain access to the Alpha program and access to the Beta Conversations Google group (ey-beta-talk). Use ey-beta-talk for issues or questions with this Alpha program.


### To access the MySQL 5.1 Alpha program

1. [[Request access to the MySQL Alpha program|signup-MySQL]].

2. Subscribe to Beta Conversations Google group under the Beta Conversations heading on the [[Beta Program page|beta-intro]].     
	If you have participated in other Engine Yard Alpha and Beta programs, you might already be a group member.




<h2 id="topic3"> Set up an application to use MySQL 5.1/5.5 </h2>

Follow this procedure to set up a new environment that uses a MySQL 5.1/5.5 database. You can create new application and a new environment or create a new environment for an existing application. 

If you are migrating an existing MySQL database, you'll to perform a dump and restore _after_ creating a new environment ([Dump and restore an existing MySQL database][3]).

### To use MySQL 5.1/5.5 with Engine Yard Cloud

1. **Important!** If you have applied any custom chef recipes for MySQL, disable them in your ey-cloud-recipes repository. You may reapply them to your new database instance after completing the tasks on this page.   
    For general information about custom chef recipes, see [[Custom Chef Recipes|custom-chef-recipes]].

2. Create a new application with a new environment or add an environment to an existing application, making sure to:

    * Set the Database Stack to MySQL 5.1.x or MySQL 5.5.x 
      If this option is not available, see [Troubleshooting][6].

    * Add the mysql2 gem to your Gemfile for Rails 3 (or via the Dashboard for Rails 2).

            source "http://rubygems.org"  
            gem "mysql2"
	
	* Select SSH Keys.  
	This allows you to SSH into the new instance and to copy the database dumpfile to the instance, described in the procedure [below][4].  
    
3. Deploy the application.



<h2 id="topic4"> Dump and restore an existing MySQL database</h2>

If you are currently running a MySQL database (5.0.x), you need to dump the database, create a new MySQL environment, move the database dump file to the database instance, and finally load the file into the MySQL database.  

You can perform these tasks yourself (as outlined below) or ask [[Engine Yard Professional Services|http://www.engineyard.com/services]] to do the migration for you.

### To dump and restore the MySQL database

See the MySQL documentation for full details on dumping and restoring a database. 

**Note:** The following commands assume you are logged into the db_master instance.  

1.  Dump the database.
		
		mysqldump -u _user_ -p_password_ -h _hostname_ _dbname_ > dumpfile.sql  
		gzip -v dumpfile.sql 
	
	**Note:** _dbname_ is the name of the database used by your application. _hostname_ is the name of the server or instance hosting your MySQL 5.0.x database. For more information, see [[Find your generated MySQL password and connect to your DB|database-password]].
				
	For example, 
	
        mysqldump -u deploy -pmysecret -h ec2-172-72-33-150.us-west-1.compute.amazonaws.com mydatabase > dumpfile.sql	

2. 	Move the output file to the new environment. 
	
		scp dumpfile.sql username@newserver:/_path_/_to_/_file_/dumpfile.sql
		
	For example,  
	
	    scp dumpfile.sql deploy@ec2-174-129-17-196.compute-1.amazonaws.com:/tmp/mysql		
	
	**Note** The new server is the database instance assigned for your MySQL 5.1/5.5 environment that you created [above][3].
					 
3. SSH to the new database instance.

4. Import the output file to the new MySQL 5.1/5.5 database. 

		gunzip -v dumpfile.sql
		mysql -u _user_ -p_password_ -h _hostname_ _dbname_ < dumpfile.sql
	
5. Test the application running in the new environment.

6. After verifying that your application is running correctly in the new environment, delete the old environment (running MySQL 5.0.x).



<h2 id="topic8">Connect to your MySQL 5.1/5.5 database </h2>

### To connect to your MySQL 5.1/5.5 database

* See [[Access Your MySQL Database Remotely|access-your-mysql-database-remotely]] and [[Find your generated MySQL password and connect to your DB|database-password]].


<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
<tr>
    <td>database tasks</td><td>[[Managing your database|database-intro]] (Many of the tasks apply to MySQL 5.1 and 5.5 as well as to MySQL 5.0.)</td>
  </tr>
<tr>
    <td>MySQL</td><td>[[MySQL|http://dev.mysql.com/doc]] documentation </td>
  </tr>
<tr>
    <td>SSHing to your database</td><td>[[Access your MySQL database remotely|access-your-mysql-database-remotely]] </td>
  </tr>
<tr>
    <td>SSH public keys</td><td>[[Using SSH on Engine Yard Cloud|ssh-intro]] </td>
  </tr>
<tr>
    <td>Deleting an environment</td><td>[[Delete an environment|environment-delete]] documentation </td>
  </tr>
</table>

<h2 id="topic6"> Troubleshooting</h2>

This table contains troubleshooting tips related to MySQL and the Alpha program.

<table>
  <tr>
    <th>Symptom</th><th>Solution</th>
  </tr>
  <tr>
    <td>I don't have the Database Stack option for MySQL 5.1 on my new environment page.</td><td>You don't yet have access to the MySQL Alpha program. <br> Try submitting the request again, noting in the comments field that you are unable to see the Database Stack option. </td>
  </tr>
  <tr>
    <td>My application doesn't run in the new MySQL environment.</td><td>Post to the [[Beta Conversations Google group|http://groups.google.com/group/ey-beta-talk]]. To subscribe to the group, see [[Beta Conversations|beta-intro]]. <br> <br>
</td>
  </tr>
</table>


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
[8]: #topic8        "topic8"
[9]: #topic9        "topic9"
[10]: #topic10      "topic10"
[11]: #topic11      "topic11"
[12]: #topic12       "topic12"
[13]: #topic13       "topic13"

