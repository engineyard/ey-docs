#Viewing and downloading database backups

For your own peace of mind, you should review your database backups from time. Confirm that backups are being made and retained as you expect. 

This page describes where to find your database backup files and how to download them to your local machine/environment.

## To view and/or download database backups (UI method)

1. On the Environment page, click Database Backups.
    A time-stamped list of backup links appears.
    ![Example list of backup links](images/database_backups.png)

2. Click a link to download a backup file.  
    A MySQL backup file has the SQL extension and a PostgreSQL backup file has the PGZ extension. The file names contain the database name, date and timestamp. For example: `myapp.2011-11-14T16-47-02.sql` and `myappp.2011-11-15T15-20-02.pgz` 

## To view and/or download a MySQL database backups (CLI / eybackup method)

1. Via SSH, connect to the Application and Database instance (for single server environment) or the Master Database instance (for a clustered environment).

2. Type:
        sudo -i eybackup --list-backup myapp
    or
        sudo -i eybackup -l myapp

    The database backups are listed, for example, 
        Listing database backups for myapp
		3 backup(s) found
		0:myapp myapp.2011-11-14T16-43-39.sql.gz
		1:myapp myapp.2011-11-14T16-47-02.sql.gz
		2:myapp myapp.2011-11-15T01-10-03.sql.gz
		
3. To download a backup file, type:
        sudo -i eybackup --download 2:myapp
	or 
		sudo -i eybackup -d 2:myapp

    (where "2" is the number of the backup you want to download.)

    The file is downloaded to /mnt/tmp:
        Downloading basiccluster.myapp/myapp.2011-11-15T01-10-03.sql.gz to /mnt/tmp

sudo -i eybackup --download 2:deploy_day_app
or 
sudo -i eybackup -d 2:deploy_day_app

Downloading simpleEnv.deploy_day_app/deploy_day_app.2011-11-03T01-10-03.sql.gz to /mnt/tmp

The file is downloaded to /mnt/tmp on your server instance.
ls /mnt/tmp
deploy_day_app.2011-11-03T01-10-03.sql.gz
To copy the file downloaded in step 2 to your local machine:

scp deploy@ec2-174-129-17-196.compute-1.amazonaws.com:/mnt/tmp/deploy_day_app.2011-11-03T01-10-03.sql.gz .
Download a database backup

If you have downloaded a database backup via the [[ey-backup gem|manage-database-backups]] to your running instance, you can then use `scp` to transfer the backup file to your local computer.

    scp username@IP_address:/path_to_file destination

## Prerequisites

This assumes that either:

* You are on a *NIX system, such as Linux or OS X, or
* You are on Windows and are using Cygwin

You'll need:  

* Your username on the instance  
* The IP Address assigned to the instance  
* The path to the file on the server  

## Putting it all together

Where `username` equals the "User account name" you've configured in your environment, and the `IP_address` is one you've generated for the instance currently running.  

The common practice for the destination is to change to the directory on your local computer where you want to receive the file.  For example:  `cd ~/database_backups`.

    scp cloud_user@123.123.123.123:/path/to/the/db_backup_file .

This will use the `scp` protocol to have the `cloud_user@123.123.123.123` transfer the `/path/to/the/db_backup_file` to the current working directory on your local machine `.`.

**Note:** don't forget the colon ":" between the IP address and the /path/to/the/db_backup_file.
