# Troubleshooting your database

This page describes some things to check when troubleshooting your database.

Topics on this page:

* [MySQL: Restart the database][1] 
* [MySQL: 500 errors and "Please install the mysql2 adapter" error][2]
* [MySQL: Host '...' is blocked because of many connection errors; unblock with 'mysqladmin flush-hosts'][3]
* [MySQL: Server has gone away][4]
* [PostgreSQL: Restart the database][5]

<h2 id="topic1"> MySQL: Restart the database</h2>

If you change database configuration, you might need to restart the database.

**To restart the MySQL database** 

1. Via SSH, connect to the application and database instance (for single server environment) or the master database instance (for a clustered environment).

2. Type:  
        sudo /etc/init.d/mysql restart
  or
        sudo /etc/init.d/mysql stop
        sudo /etc/init.d/mysql start		

<h2 id="topic2">MySQL: 500 errors and "Please install the mysql2 adapter" error</h2>

###Symptom

After deploying, you see 500 errors and the deployment log shows "Please install the mysql2 adapter" error.

###Solution

See [[500 errors after deploying / Gemfile missing database adapter|issue-mysql2-adapter]].



<h2 id="topic3"> MySQL: Host '...' is blocked because of many connection errors; unblock with 'mysqladmin flush-hosts'</h2>

### Symptom
This error `Host '...' is blocked because of many connection errors; unblock with 'mysqladmin flush-hosts'` appears, for example, in the application log, /data/app_name/current/log.

This is a security feature of MySQL to prevent unauthorized users from gaining access to your database instance.  After 10 consecutive failed authentications from a specific host that host is barred from further attempts to log in until the administrator flushes the hosts or the database instance is restarted.  Frequent occurrences of this error may indicate an attack or possibly an otherwise undetectable network issue.

### Solution
Run the FLUSH HOSTS command, either through the mysql client or through mysqladmin.

**To run the FLUSH HOSTS command**  

1. Via SSH, connect to the application and database instance (for single server environment) or the master database instance (for a clustered environment).

2. Type:  
        mysql -u root -pMyP4ssW0rd -e "FLUSH HOSTS;"
	or
	    mysqladmin -u root -pMyP4ssW0rd flush-hosts
		
    where
    `MyP4ssW0rd` is the password for the deploy user and the root user on the MySQL database.
        

For more information, see [[http://dev.mysql.com/doc/refman/5.0/en/flush.html]].


<h2 id="topic4"> Mysql::Error: MySQL server has gone away [query that was trying to run] </h2>

###Symptom

The application log (in /data/app_name/current/log) shows an error like this:  
`Mysql::Error: MySQL server has gone away: `.  

Rails relies upon connection pooling to eliminate the time overhead of spawning a database connection when a request comes in; the default connection pool size is 5.  MySQL operates with a default `wait_timeout` setting of 28,800 seconds (8 hours).  If a connection in the pool is inactive for more than 8 hours MySQL closes it to avoid the memory overhead of unused connections.  The next attempt by Rails to use this connection results in the error that the connection has gone away.

This error can also be seen if the MySQL server is not running.

For more information, see [[http://dev.mysql.com/doc/refman/5.0/en/gone-away.html]].

### Solution
Verify MySQL is running on the appropriate database instance. Type: `ps -ef |grep '[m]ysqld'`

[[Rails 2.3|http://guides.rubyonrails.org/2_3_release_notes.html#reconnecting-mysql-connections]] and higher offers the ability to specify `reconnect: true` in the `database.yml`.  Using this functionality results in rails automatically reconnecting to the database if the connection has been closed.

**Note:** `reconnect: true` is now added to database.yml by default. 

<h2 id="topic5">PostgreSQL: Restart the database</h2>

If you change database configuration, you might need to restart the database.

###To restart the PostgreSQL database

1. Via SSH, connect to the application and database instance (for single server environment) or the master database instance (for a clustered environment).

2. Type:  
        sudo /etc/init.d/postgresql-x.x restart
    where
    `x.x` is the version of PostgreSQL, for example
        sudo /etc/init.d/postgresql-9.0 restart
    or
        sudo /etc/init.d/postgresql-9.1 restart


<h2 id="topic6"> More information</h2>

<table>
  <tr>
	<th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
	<td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
  </tr> 
  <tr>
	 <td>Finding the password for your database</td><td>[[Finding key information about your database|database-password]].</td>
  </tr>
</table>

[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"