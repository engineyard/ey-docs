# Restore or load a database

Here are a couple of scenarios for restoring / loading your database:

* Scenario 1: Your database has become corrupted and you want restore using a recent backup.  

* Scenario 2: You need to move an existing database to a new environment, for example, because:   

    * You are moving your application and database from another provider to Engine Yard Cloud.
    * You are upgrading database versions, for example, moving from a PostgreSQL 9.0 environment to a PostgreSQL 9.1 environment.
    * You want a copy of your production database for stress testing on a different non-production environment.


##Restore your database (Scenario 1)

This assumes you are logged into your Master Database instance and you want to overwrite the current database with one of the backups on the instance.

###To restore your MySQL database

1. Via SSH, connect to the Application and Database instance (for single server environment) or the Master Database instance (for a clustered environment).  

2. Type (to list the backups):

        sudo -i eybackup --list-backup myapp
    or
        sudo -i eybackup -l myapp

2. Type (to restore the backup):

    *Important!* This command overwrites the current database with the backup. (If you want to keep a copy of the current backup, make an on-demand backup before restoring).
	

        sudo -i eybackup --restore N:myapp
    or  
        sudo -i eybackup -r N:myapp

	    (where "N" is the number of the backup you want to overwrite the current database. For example, to restore the tenth backup `sudo -i eybackup -d 10:myapp`)
	

###To restore your PostgreSQL database

1. Via SSH, connect to the Application and Database instance (for single server environment) or the Master Database instance (for a clustered environment).  

2. Type (to list the backups):

        sudo -i eybackup -e postgresql --list-backup myapp
    or
        sudo -i eybackup -e postgresql -l myapp

2. Type (to restore the backup):

    *Important!* This command overwrites the current database with the backup. (If you want to keep a copy of the current backup, make an on-demand backup before restoring).
	

        sudo -i eybackup -e postgresql --restore N:myapp
    or  
        sudo -i eybackup -e postgresql -r N:myapp

QUESTION: THIS FAILED FOR ME. WHAT SHOULD IT BE? 

	    (where "N" is the number of the backup you want to overwrite the current database. For example, to restore the tenth backup `sudo -i eybackup -d 10:myapp`)	

## Load your database (Scenario 2)

###To load your MySQL database 

1. Copy the database backup file to the database instance that you want to load it on.

        scp myapp.2011-11-14T16-47-02.sql deploy@ec2-174-129-17-196.compute-1.amazonaws.com:/tmp/mysql/dumpfile.sql

    where `myapp.2011-11-14T16-47-02.sql` is the name of the database backup file, `ec2-174-129-17-196.compute-1.amazonaws.com` is the IP address of the database instance, and `/tmp/mysql/dumpfile.sql` is the directory and file name that you want to copy the backup file to.

2. Via SSH, connect to the Application and Database instance (for single server environment) or the Master Database instance (for a clustered environment), and change to the directory where you copied the database backup file in Step 1 (e.g.`cd /tmp/mysql`)

3. Import the database backup file to the database:

        mysql -u deploy -pMyP4ssW0rd -h ec2-174-129-17-196.compute-1.amazonaws.com myapp < dumpfile.sql
    where `MyP4ssW0rd` is the database password
		
    **Note:** In a single server environment, you can type `localhost` instead of `ec2-174-129-17-196.compute-1.amazonaws.com`



###To load your PostgreSQL database 

1. Copy the database backup file to the database instance that you want to load it on.

        scp myapp.2011-11-18T12-20-03.pgz deploy@ec2-50-18-139-19.us-west-1.compute.amazonaws.com:/tmp/postgres/dumpfile.pgz

    where `myapp.2011-11-18T12-20-03.pgz` is the name of the database backup file, `ec2-50-18-139-19.us-west-1.compute.amazonaws.com` is the IP address of the database instance, and `/tmp/postgres/dumpfile.pgz` is the directory and file name that you want to copy the backup file to.

2. Via SSH, connect to the Application and Database instance (for single server environment) or the Master Database instance (for a clustered environment), and change to the directory where you copied the database backup file in Step 1 (e.g.`cd /tmp/postgres`)

3. Import the database backup file to the database:
        pg_restore -d myapp dumpfile.pgz

I'm failing here too:  Is there some other command that I need to overwrite one database with another?

Errors are: 

deploy@domU-12-31-39-06-49-F3 /tmp $ pg_restore -d myappp dumpfile.pgz
pg_restore: [archiver (db)] Error while PROCESSING TOC:
pg_restore: [archiver (db)] Error from TOC entry 311; 2612 11574 PROCEDURAL LANGUAGE plpgsql postgres
pg_restore: [archiver (db)] could not execute query: ERROR:  must be owner of language plpgsql
    Command was: 
CREATE OR REPLACE PROCEDURAL LANGUAGE plpgsql;
pg_restore: [archiver (db)] Error from TOC entry 1505; 1259 16392 TABLE people deploy
pg_restore: [archiver (db)] could not execute query: ERROR:  relation "people" already exists
    Command was: CREATE TABLE people (
    id integer NOT NULL,
    name character varying(255),
    address character varying(255),
    city...



<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
     <td>On-demand backup of the database</td><td>[[Backing up the database|database_backups]]. </td>
   </tr>
   <tr>
	 <td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
   </tr>
   <tr>
	 <td>Finding the password for your database</td><td>[[Finding key information about your database|find-your-generated-mysql-password-and-connect-to-your-db]].</td>
   </tr>
</table>