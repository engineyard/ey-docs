# Using PostgreSQL 9 with Engine Yard Cloud

## Introduction

The PostgreSQL 9 database is now a candidate for testing on Engine Yard Cloud. Read this page if you want to participate in the PostgreSQL 9 Alpha program.


### Process

The process for setting up and running your application on PostgreSQL 9 depends on your current environment.

* _Is this a new application?_ Then do these tasks:

   * [Get access to the Alpha program and ey-beta-talk group][2]  
   * [Set up an application to use PostgreSQL 9 in Alpha][3]  

* _Are you running Engine Yard Cloud with PostgreSQL now (with a custom chef recipe from ey-cloud-recipes or 2010 PostgreSQL 8.x Alpha program)?_ Then, do these tasks:  

    * [Get access to the Alpha program and ey-beta-talk group][2]  
    * [Set up an application to use PostgreSQL 9 in Alpha][3]  
    * [Dump and restore an existing PostgreSQL database][4]
 
* _Are you running with PostgreSQL on a platform other than Engine Yard Cloud?_ Then, do these tasks:  

    * [Get access to the Alpha program and ey-beta-talk group][2]  
    * [Set up an application to use PostgreSQL 9 in Alpha][3]  
    * [Dump and restore an existing PostgreSQL database][4]

* _Are you using MySQL?_ Then:  

    Please consult [[Engine Yard Professional Services|http://www.engineyard.com/services]] for assistance migrating your mySQL database to PostgreSQL 9. 


**Important!** PostgreSQL 9 on Engine Yard Cloud is an Alpha feature. Always test in a development or staging environment. 



<h2 id="topic2"> Get access to the Alpha program and ey-beta-talk group </h2>

### Introduction

Follow this procedure to gain access to the Alpha program and access to the Beta Conversations Google group (ey-beta-talk). Use ey-beta-talk for issues or questions with this Alpha program.


### To get access to the PostgreSQL 9 Alpha program

1. [[Request access to the PostgreSQL 9 Alpha program|signup-postgresql]].

2. Subscribe to Beta Conversations Google group under the Beta Conversations heading on the [[Engine Yard Early Access page|beta-intro]].     
	If you have participated in other Engine Yard Early Access programs, you might already be group member.


<h2 id="topic3"> Set up an application to use PostgreSQL 9 in Alpha </h2>

### Introduction

Follow this procedure to set up a new environment that uses a PostgreSQL 9 database. You can create new application and a new environment or create a new environment for an existing application. 

If you are migrating an existing PostgreSQL database, you'll to perform a dump and restore _after_ creating a new environment ([Dump and restore an existing PostgreSQL database][3]).

### To use PostgreSQL 9 with Engine Yard Cloud in Alpha

1. **Important!** If you have applied any custom chef recipes for PostgreSQL, delete them from your ey-cloud-recipes repository. Do not apply them to this instance.  
    For general information about custom chef recipes, see [[Custom Chef Recipes|custom-chef-recipes]].

2. Create a new application with a new environment or add an environment to an existing application, making sure to:

    * Set the Database Stack to PostgreSQL 9.  
      If this option is not available, see [Troubleshooting][6].

    * Add the pg gem to your Gemfile for Rails 3 (or via the Dashboard for Rails 2).

      <pre>
source "http://rubygems.org"
gem "pg"</pre>
	
3. Deploy the application.



<h2 id="topic4"> Dump and restore an existing PostgreSQL database</h2>

### Introduction
If you are currently running a PostgreSQL database (8.x or 9), you need to dump the database, create a new PostgreSQL environment in Engine Yard Cloud, move the database dump file to the database instance, and finally load the file into the PostgreSQL database.  

You can perform these tasks yourself (as outlined below) or ask [[Engine Yard Professional Services|http://www.engineyard.com/services]] to do the migration for you.

### To dump and restore the PostgreSQL database

See the PostgreSQL documentation for full details on dumping and restoring a database.  
**Note:** The following commands assume you are logged into the db_master instance.  

1.  Dump the database. 
		
		pg_dump -Fc dbname > dumpfile

    **Note:** -Fc is needed to use PostgreSQL's custom dump format and compression (use the -o option only if your application explicitly references OID values).  

2. 	Move the output file to the new server. 
	
		scp dumpfile newserver:/path/to/file/dumpfile
	

	In this case, the new server is the database instance assigned for your PostgreSQL 9 Alpha environment.
	
	**Note:** To use the scp command, you need keys and scp setup.
	 
3. SSH to the database instance.

4. Import the output file to the new PostgreSQL 9 database. 

		pg_restore -d dbname dumpfile
	
	**Note:** The dbname should correspond to the database name of your application.

5. Test the application running in the new environment before deleting your original environment.



<h2 id="topic8">Connect to your PostgreSQL 9 database </h2>

### To connect to your PosgreSQL 9 database
See the [[Managing your database|database-intro]] documentation (Many of the tasks apply to PostgreSQL as well as MySQL.)

1. Find your generated PostgreSQL password (the [[MySQL instructions on passwords|database-password]] describe this step)

2. Extract list of databases
				
		psql -l -U deploy

3. Connect to your database 
		
		psql -U deploy -h localhost -d dbname



<h2 id="topic7"> Known issues</h2>

Known issues associated with PostgresSQL 9 on Engine Yard Cloud are:

* In the Alpha phase, snapshots cannot be used for upsizing from a 32-bit instance to a 64-bit instance. Workaround: Use dump and restore if you need to move your data from a 32-bit to 64-bit instance.   

* Extensions for the PostgreSQL 9 server are not yet available in custom recipes (but they are coming soon).




<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
    <td>about setting up and deploying an Engine Yard Cloud application in general</td><td>[[docs.engineyard.com|http://docs.engineyard.com]] </td>
  </tr>
<tr>
    <td>database tasks</td><td>[[Managing your Database|database-intro]] (Many of the tasks apply to PostgreSQL as well as MySQL.)</td>
  </tr>
<tr>
    <td>PostgreSQL</td><td>[[PostgreSQL|http://www.postgresql.org/docs]] documentation </td>
  </tr>
</table>



<h2 id="topic6"> Troubleshooting</h2>

This table contains troubleshooting tips related to the PostgreSQL 9 Alpha program.

<table>
  <tr>
    <th>Symptom</th><th>Solution</th>
  </tr>
  <tr>
    <td>I don't have the Database Stack option on my new environment page.</td><td>You don't yet have access to the PostgreSQL 9 Alpha program. <br> Try submitting the request again, noting in the comments field that you are unable to see the Database Stack option. </td>
  </tr>
  <tr>
    <td>My application doesn't run in the new PostgreSQL environment.</td><td>Post to the [[Beta Conversations Google group|http://groups.google.com/group/ey-beta-talk]]. To subscribe to the group, see [[Beta Conversations|beta-intro]]. <br> <br>
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

