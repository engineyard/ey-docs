#Viewing and downloading database backups

You should review your database backups from time. Confirm that backups are being made and retained as you expect. 

This page describes where to find your database backup files and how to download them to your local machine.

Procedures are given for downloading backups from the UI and from a command line, using the eybackup tool:  

* [View and/or download database backups through the UI][1]
* [View and/or download database backups (eybackup method)][2]


<h2 id="topic1"> View and/or download database backups through the UI</h2>

This procedure describes how to view and download database backups using the Engine Yard Cloud UI. Backups are downloaded directly to your local machine.

### To view and/or download database backups (UI method)

1. On the Environment page, click Database Backups.
    A time-stamped list of backup links appears.
    ![Example list of backup links](images/database_backups.png)

2. Click a link to download a backup file.  
    A MySQL backup file has the SQL extension and a PostgreSQL backup file has the PGZ extension. The file names contain the database name, date and timestamp. For example: `myapp.2011-11-14T16-47-02.sql` and `myapp.2011-11-15T15-20-02.pgz` 

<h2 id="topic1"> View and/or download database backups (eybackup method)</h2>

These procedures describe how to view and download database backups using the eybackup tool:

* [For MySQL: To view and/or download database backups (eybackup method)][A]
* [For PostgreSQL: To view and/or download database backups (eybackup method)][B] 

Getting the backup to your local machine is a two-step process: you download it to /mnt/tmp on the database instance and then copy it to your local machine.

<h3 id="topicA"> For MySQL: To view and/or download database backups (eybackup method) </h3>

1. Via SSH, connect to the Application and Database instance (for single server environment) or the database instance (for a clustered environment).

2. Type (to list the backups):
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
        Downloading myenvironment.myapp/myapp.2011-11-15T01-10-03.sql.gz to /mnt/tmp

4. To copy the file from your database server instance to your local machine, type:
        scp username@IP_address:/path_to_file destination
    For example, `scp deploy@ec2-174-129-17-196.compute-1.amazonaws.com:/mnt/tmp/myapp.2011-11-14T16-43-39.sql.gz .`
	    
    **Tip:** Don't forget the colon ":" between the IP address and the /path/to/the/db_backup_file.


<h3 id="topicB"> For PostgreSQL: To view and/or download database backups (eybackup method)</h3>

1. Via SSH, connect to the Application and Database instance (for single server environment) or the database instance instance (for a clustered environment).

2. Type (to list the backups):
        sudo -i eybackup -e postgresql --list-backup myapp
    or
        sudo -i eybackup -e postgresql -l myapp

    The database backups are listed, for example, 
        Listing database backups for myapp
		3 backup(s) found
		0:myapp myapp.2011-11-16T11-20-02.pgz
		1:myapp myapp.2011-11-16T12-20-03.pgz
		2:myapp myapp.2011-11-16T13-20-02.pgz
		
		
3. To download a backup file, type:
        sudo -i eybackup -e postgresql --download N:myapp
	or 
		sudo -i eybackup -e postgresql -d N:myapp

    (where "N" is the number of the backup you want to download. For example, to download the oldest backup `sudo -i eybackup -e postgresql -d 0:myapp`)

    The file is downloaded to /mnt/tmp on your database server instance:
        Downloading myenvironment.myapp/myapp.2011-11-16T15-20-02.pgz to /mnt/tmp

4. To copy the file from your database server instance to your local machine, type:
        scp username@IP_address:/path_to_file destination
    For example, `scp deploy@ec2-174-129-17-196.compute-1.amazonaws.com:/mnt/tmp/myapp.2011-11-16T15-20-02.pgz .`
	    
    **Tip:** Don't forget the colon ":" between the IP address and the /path/to/the/db_backup_file.

[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[A]: #topicA        "topicA"
[B]: #topicB        "topicB"
