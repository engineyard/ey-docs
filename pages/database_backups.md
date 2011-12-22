# Backing up the database


This page describes:

* [Types of database backups][0]
* [Setting the frequency and number of scheduled database backups][1]
* [Making an on-demand backup of the database][2] 

By default, the database is backed up every 24 hours, starting around 1:10 am Pacific time (server time) and the last 10 days of backups are kept. Backup frequency and number of backups kept can be configured through the UI. Start times can be configured through cron jobs and custom chef recipes. 

<h2 id="topic0">Types of database backups</h2>

Engine Yard backs up your database in two ways:  


* <b>Database backup files</b> are dumps of the application's database (e.g. mysqldump, pg_dump). Database backup files can be used for selective or full data restores and for downloading locally. An advantage of database backup files is that the data integrity is checked as the file is written.  

    Database backup files are discussed on this page. 

* <b>Snapshots</b> are incremental EBS copies of the /db volume. By default, these snapshots are made every night at 1:00 am Pacific time. Snapshots are used to rebuild the instance, build a slave database instance, or create a copy (clone) of the database instance. Snapshots are fast and incremental but not a replacement for database backup files because snapshots do not check data integrity.  

    For information about snapshots, see [[Using snapshots|using-snapshots]].

<h2 id="topic1">Changing the frequency and number of scheduled backups</h2>

When you create an environment, you set the frequency and number of backups (or accept the default). You can later change the frequency and number of database backups as described below.

You can keep up to 100 backups. You can schedule backups to happen every hour, every two hours, four times a day, twice a day, or daily.

You don't have to restart your environment to change the frequency or number of backups.

###To change the number or frequency of database backups

1. On the Environment page, click Edit Environment.  
2. Under the Backups heading, set the number of hours between backups and the number of backups to keep.

    ![Backup Options](images/backup_options.png)

    **Note:** The number of backups to keep includes both scheduled backups and on-demand backups.  
    **Tip:** You can set the number of snapshots (which includes database snapshots) under the Snapshots heading on this page.  
3. Click Update Environment.
4. Click !Apply.

<h2 id="topic2"> Backing up on-demand</h2>

Sometimes you might want to do an on-demand backup (also called ad-hoc backup). For example:
	
* An on-demand backup can be done on a database slave -- this allows you to back up even when your master database is under heavy load. 

* Before you make a significant change to your environment, you want to make sure that you have a very recent backup.

You perform on-demand backups using the eybackup tool. Each instance comes with the eybackup gem pre-installed.

### To back up a MySQL database on-demand 

1. Via SSH, connect to the application and database instance (for single server environment) or the master database instance (for a clustered environment).  
2. Type:  
        sudo -i eybackup -e mysql --new-backup
    or
        sudo -i eybackup -e mysql -n


### To back up a PostgreSQL database on-demand 

1. Via SSH, connect to the application and database instance (for single server environment) or the master database instance (for a clustered environment).  
2. Type:  
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
	    <td>Viewing and downloading database backups</td><td>[[Viewing and downloading database backups|database-download]].</td>
	  </tr>
	</table>

[0]: #topic0        "topic0"
[1]: #topic1        "topic1"
[2]: #topic2        "topic2"

