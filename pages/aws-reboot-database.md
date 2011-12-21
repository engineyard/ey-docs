# AWS Reboot - Protecting Your Data

In order to minimize chances of database corruption you will want to 
cleanly shutdown your database prior to your scheduled instance reboot.

To minimize downtime we recommend you put up a [[maintenance page|deployment-maintenance-pages]] by using 
the [[Engine Yard CLI|ey_cli_user_guide]] prior to shutting down your database.  You can issue the following command:

    ey web disable

After the maintenance page is up, you can [[ssh to your database|ssh-intro]] instances and stop the databases by issuing the following commands (depending on the database you are using).

## Shutting down your database

The following database specific commands will ensure you cleanly shutdown your database server before
your instances are rebooted.

* **MySQL**: `sudo /etc/init.d/mysql stop`

  Note that the MySQL init script has a 2 minute timeout after which it will exit, even if the server hasn't finished shutting down.  This is not cause for alarm.  If that happens you can tail the server's log to know when it has actually finished shutting down: `tail -f /db/mysql/log/mysqld.err`  Also, note that larger databases will take longer than smaller databases to shut down.
  
* **PostgreSQL**: `sudo /etc/init.d/postgresql-x.x stop`
  
  (Note: x.x is the version of PostgreSQL that is running)
  
* **MongoDB**: `sudo /etc/init.d/mongodb stop`
  
* **Redis**: `sudo /etc/init.d/redis stop`

  If you are using Redis you may want to shut it down as well.  This is not required unless your application or job queue (such as Resque) uses Redis and you need to have the data persisted.

  
## Restarting your database

After the reboot has occurred, you can ssh back into your database instances and make 
sure the your database service is running.  You can do this by issuing the following 
command and looking for the appropriate processes to be running:

    ps ax | grep database_name

(database_name can be "mysql", "mongod", and "postgres")

You can start your database serviers in a similar manner to stopping them as directed below 
with these database specific startup comands.

* **MySQL**: `sudo /etc/init.d/mysql start`

* **PostgreSQL**: `sudo /etc/init.d/postgresql-x.x start`

  (Note: x.x is the version of PostgreSQL that is running)

* **MongoDB**: `sudo /etc/init.d/mongodb start`

* **Redis**: `sudo /etc/init.d/redis start`

