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
        sudo -i eybackup --download N:myapp
	or 
		sudo -i eybackup -d N:myapp

    (where "N" is the number of the backup you want to download. For example, to download the oldest backup `sudo -i eybackup -d 0:myapp`)

    The file is downloaded to /mnt/tmp on your database server instance:
        Downloading basiccluster.myapp/myapp.2011-11-15T01-10-03.sql.gz to /mnt/tmp

4. To copy the file from your database server instance to your local machine, type:
        scp username@IP_address:/path_to_file destination
    For example, `scp deploy@ec2-174-129-17-196.compute-1.amazonaws.com:/mnt/tmp/myapp.2011-11-14T16-43-39.sql.gz .`
	    
    **Tip:** Don't forget the colon ":" between the IP address and the /path/to/the/db_backup_file.
	