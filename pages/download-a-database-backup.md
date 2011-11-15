#Viewing and downloading database backups

For your own peace of mind, you should review your database backups from time. Confirm that backups are being made and retained as you expect. 

This page describes where to find your database backup files and how to download them to your local machine/environment.

## To view or download database backups (UI method)

1. On the Environment page, click Database Backups.
    A time-stamped list of backup links appears.
    [screenshot]

2. Click a link to download a backup file.  
    The backup file is in 

Dashboard > Environment > More Options > Database Backups

[screenshot]
To download the backup, click its link.

Downloads to your local machine. Testing environment on your local machine, for example.


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
