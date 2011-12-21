# Managing your database on Engine Yard Cloud

This section provides information about using <!-- and configuring --> a database in Engine Yard Cloud.

Whenever Engine Yard Cloud creates an environment, it creates a MySQL or PostgreSQL database for the application. 

**Note:** The PostgreSQL database is supported in Alpha. (To sign up for Alpha, see [[signup|signup-postgresql]].) Beta is coming soon. 

## Topics


2. ### [[Finding key information about your database|database-password]]  

    Learn where to find the database.yml file that Engine Yard Cloud creates for your environment. The database.yml contains the database name and password. You need your database password to perform some maintenance tasks.

3. ### [[Backing up your database|database_backups]]

    Learn how to set the number and frequency of backups. Also learn how to backup on demand using the eybackup CLI tool. 

4. ### [[Download a database backup|database-download]] 

    Learn how to view and download backup files.

5. ### [[Restoring or loading the database from a backup file|database-restore]]

    Learn how to restore a backup on the instance using eybackup. And learn how to move a database file from one environment to another.

6. ### [[Monitoring database usage and increasing the database size| database-monitoring]]

    Learn what to do if your database volume fills up or you need a bigger database instance.

1. ### [[Set up replication (database slave instances)|database-environments]]

	 Learn how to create slave database instances in a clustered environment so that your database is replicated. 
	
7. ### [[Connecting your database via an SSH tunnel| database-tunnel]]

    Learn how to create an SSH tunnel to your database. If you want to use third party tools to manage your database, you need an SSH tunnel from your local machine to the database instance.

10. ### [[Database troubleshooting|database-troubleshooting]]

    Some troubleshooting tips for databases, including how to restart your database.

11. ### [[Feedback|data-feedback]]

    The Engine Yard Data team wants to know more about how you use your Engine Yard Cloud database and if there are new data-related features that you would like added to Engine Yard Cloud.

<!-- 8. ### [[Configure a MySQL database|database-mysql-configure]]

	    Learn how to configure the MySQL Server(?) or Instance(?) or Database(?) using Chef recipes(?). 

	9. 	### [[Configure a PostgreSQL database|database-pg-configure]]

	    Learn how to configure the PostgreSQL Server(?) or Instance(?) or Database(?) using Chef recipes(?). -->
