# Restore or load a database

Here are a couple of scenarios for restoring / loading your database:

* Scenario 1: Your database has become corrupted and you want restore using a recent backup.  

* Scenario 2: You need to move an existing database to a new environment because:   

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
	

        sudo -i eybackup --restore N:myapp
    or  
        sudo -i eybackup -r N:myapp

QUESTION: THIS FAILED FOR ME. WHAT SHOULD IT BE? 

	    (where "N" is the number of the backup you want to overwrite the current database. For example, to restore the tenth backup `sudo -i eybackup -d 10:myapp`)	

## To load your database (Scenario 2)




<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
     <td>On-demand backup of the database</td><td>[[Backing up the database|database_backups]]. </td>
   </tr>
</table>