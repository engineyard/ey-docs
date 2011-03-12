# Download a Database Backup

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

## Putting it All Together

Where `username` equals the "User account name" you've configured in your environment, and the `IP_address` is one you've generated for the instance currently running.  

The common practice for the destination is to change to the directory on your local computer where you want to receive the file.  For example:  `cd ~/database_backups`.

    scp cloud_user@123.123.123.123:/path/to/the/db_backup_file .

This will use the `scp` protocol to have the `cloud_user@123.123.123.123` transfer the `/path/to/the/db_backup_file` to the current working directory on your local machine `.`.

**Note:** don't forget the colon ":" between the IP address and the /path/to/the/db_backup_file.
