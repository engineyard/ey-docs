# Restore or load a database

Here are a couple of scenarios for restoring / loading your database:

* [Scenario 1][1]: Your database has become corrupted and you want restore using a recent backup.  

* [Scenario 2][2]: You need to move an existing database to a new environment, for example, because:   

    * You are moving your application and database from another provider to Engine Yard Cloud.
    * You are upgrading database versions, for example, moving from a PostgreSQL 9.0 environment to a PostgreSQL 9.1 environment.
    * You want a copy of your production database for stress testing on a different non-production environment.


<h2 id="topic1">Restore your database (Scenario 1)</h2>

This assumes that you are logged into your Master Database instance and you want to overwrite the current database with one of the backups on the instance. Use eybackup to overwrite the existing database with one of the backups on the instance.

###MySQL: To restore your database (eybackup method)

1. Via SSH, connect to the application and database instance (for single server environment) or the master database instance (for a clustered environment).  

2. Type (to list the backups):

        sudo -i eybackup -e mysql --list-backup myapp
    or
        sudo -i eybackup -e mysql -l myapp

2. Type (to restore the backup):

    **Important!** This command overwrites the current database with the backup. (If you want to keep a copy of the current backup, make an on-demand backup before restoring).
	

        sudo -i eybackup -e mysql --restore N:myapp
    or  
        sudo -i eybackup -e mysql -r N:myapp

	where `N` is the number of the backup you want to overwrite the current database. For example, to restore the tenth backup type `sudo -i eybackup -e mysql -d 10:myapp`
	

###PostgreSQL: To restore your database (eybackup method)

_Coming soon._  

To restore a PostgreSQL database without eybackup  

1. [[Download the backup file.|database-download]]  
2. [Load the backup file into a PostgreSQL database.][B]

<!-- 1. Via SSH, connect to the application and database instance (for single server environment) or the master database instance (for a clustered environment).  

2. Type (to list the backups):

        sudo -i eybackup -e postgresql --list-backup myapp
    or
        sudo -i eybackup -e postgresql -l myapp

2. Type (to restore the backup):

    **Important!** This command overwrites the current database with the backup. (If you want to keep a copy of the current backup, make an on-demand backup before restoring).
	

        sudo -i eybackup -e postgresql --restore N:myapp
    or  
        sudo -i eybackup -e postgresql -r N:myapp


    (where `N` is the number of the backup you want to overwrite the current database. For example, to restore the tenth backup type `sudo -i eybackup -e postgresql -d 10:myapp`) -->	


<h2 id="topic2">Load your database (Scenario 2)</h2>

This scenario assumes that you are moving data from one environment (or instance) to another. You copy the database backup file to a new database instance and then use a native MySQL or PostgreSQL command to load the database backup file.
 
###MySQL: To load your database 

1. Copy the database backup file to the database instance that you want to load it on.

        scp [database file] [username]@[database host]:[target directory]/[filename]

    where  
    `[database file]` is the name of the database backup file.  
    `[username]` is the user for the database instance. (The default user for the Engine Yard Cloud database is `deploy`.) 
    `[database host]` is the hostname of the database instance.   
    `[target directory]` is the directory that you want to copy the backup file to.  
    `[filename]` is the name for the file in its new location.  

    for example

        scp myapp.2011-11-14T16-47-02.sql.gz deploy@ec2-174-129-17-196.compute-1.amazonaws.com:/tmp/mysql/dumpfile.sql

2. Via SSH, connect to the application and database instance (for single server environment) or the master database instance (for a clustered environment), and change to the directory where you copied the database backup file in Step 1 (e.g.`cd /tmp/mysql`).

3. Import the database backup file to the database:

        gunzip < [filename] | mysql -u [username] -p[password] -h [database host] [app_name]
		

    where
    `[username]` is the user for the database instance. The default user for the Engine Yard Cloud database is `deploy`.  
    `[password]` is the password for the user on the MySQL database.  
    `[database host]` is the hostname of the database instance. In a single server environment, you can type `localhost` for the database hostname.  
    `[app_name]` is the name of the database.  
    `[filename]` is the name of the database backup file.  
     
    for example
        gunzip < myapp.2011-11-14T16-47-02.sql.gz | mysql -u deploy -pMyP4ssW0rd -h ec2-174-129-17-196.compute-1.amazonaws.com myapp
		

<h3 id="topicB">PostgreSQL: To load your database</h3> 

1. Copy the database backup file to the database instance that you want to load it on.

        scp [database file] [username]@[database host]:[target directory]/[filename]

    where  
    `[database file]` is the name of the database backup file.  
    `[username]` is the user for the database instance. (The default user for the Engine Yard Cloud database is `deploy`.) 
    `[database host]` is the hostname of the database instance.   
    `[target directory]` is the directory that you want to copy the backup file to.  
    `[filename]` is the name for the file in its new location.  

    for example

        scp myapp.2011-11-18T12-20-03.pgz deploy@ec2-172-16-139-19.us-west-1.compute.amazonaws.com:/tmp/postgres/dumpfile.pgz

2. Via SSH, connect to the application and database instance (for single server environment) or the master database instance (for a clustered environment), and change to the directory where you copied the database backup file in Step 1 (e.g.`cd /tmp/postgres`).

3. Import the database backup file to the database:  
        pg_restore -d [app_name] [filename] --clean -U postgres

    where
    `[app_name]` is the name of the database.  
    `[filename]` is the name of the database backup file.   
    `--clean` permits overwriting of the existing database with the backup file.  
    `-U postgres` sets the user to the postgreSQL user who has permission to overwrite the database. (The deploy user does not have these permissions.)

    for example  
        pg_restore -d myapp dumpfile.pgz --clean -U postgres

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
     <td>How to download a backup file</td><td>[[Viewing and downloading database backups|database-download]]. </td>
   </tr>
   <tr>
     <td>On-demand backup of the database</td><td>[[Backing up the database|database_backups]]. </td>
   </tr>
   <tr>
	 <td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
   </tr>
   <tr>
	 <td>Finding the password for your database</td><td>[[Finding key information about your database|database-password]].</td>
   </tr>
</table>


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[B]: #topicB        "topicB"