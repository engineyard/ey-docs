# Backing up the database

This page describes how to:

* Set the frequency and number of scheduled database backups
* Do an on-demand backup of the database 

By default the database is backed up every 24 hours, and the last 10 days of backups are kept.


## Changing the frequency and number of scheduled backups

When you create an environment, you set the frequency and number of backups (or accept the default). You can later change the frequency and number of database backups as described below.

You can keep up to 100 backups. You can schedule backup to happen every hour, every two hours, four times a day, twice a day, or daily.

You don't have to restart your environment to change the frequency or number of backups.

###To change the number or frequency of database backups

1. On the Environment page, click Edit Environment.  
2. Under the Backups heading, set the number of hours between backups and the number of backups to keep.

    ![Backup Options](images/backup_options.png)

    **Note:** The number of backups to keep includes both scheduled backups and on-demand backups.  
3. Click Update Environment.
4. Click !Apply.

## Backing up on-demand

Sometimes you might want to do an on-demand backup (also called ad-hoc backup). For example:
	
* Example 1

* Example 2

<it>{REVIEWERS: Give a few examples of when to do an on-demand backup. 
	
For example, when I shut down an environment -- snapshots are automatically taken -- but does that also snapshot my database? or should I snapshot that separately?

If a stack update was likely to make a substantial difference to the database, for example, when we go from PostgreSQL 9.0 to 9.1 -- will we want customers to do an on-demand backup of their database. }</it>

You perform on-demand backups using the ey-backup tool. Each instance comes with the ey-backup gem pre-installed.

## To back up a MySQL database on-demand 

1. Via SSH, connect to the Application and Database instance (for single server environment) or the Master Database instance (for a clustered environment).  
2. Type  
        sudo -i eybackup -e mysql --new-backup
    or
        sudo -i eybackup -n


## To back up a PostgreSQL database on-demand 

1. Via SSH, connect to the Application and Database instance (for single server environment) or the Master Database instance (for a clustered environment).  
2. Type  
        sudo -i eybackup -e postgresql --new-backup
	or
		sudo -i eybackup -e postgresql -n


<h2 id="topic5"> More information</h2>

<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
	  </tr> 
	 <tr>
	    <td>Viewing and downloading database backups</td><td>[[TBD|TBD]].</td>
	  </tr>
	</table>
