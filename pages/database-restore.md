# Restore or load a database

Here are a couple of reasons that to restore / load your database:

* Your database has become corrupted and you want restore using a recent backup.  

* You need to move an existing database to a new environment because:   

    * You are moving your application and database from another provider to Engine Yard Cloud.
    * You are upgrading database versions, for example, moving from a PostgreSQL 9.0 environment to a PostgreSQL 9.1 environment.
    * You want a copy of your production database for stress testing on a different non-production environment.


##To restore/load your database

1. Via SSH, connect to the Application and Database instance (for single server environment) or the Master Database instance (for a clustered environment).  

2. Type:
        sudo -i eybackup --restore 2:myapp
    or  
        sudo -i eybackup -r 2:myapp

