# MySQL Error Troubleshooting

## Host '...' is blocked because of many connection errors; unblock with 'mysqladmin flush-hosts'

### Relevant URL

[[http://dev.mysql.com/doc/refman/5.0/en/flush.html]]

### Why
This is a security feature of MySQL to prevent unauthorized users from gaining access to your database server.  After 10 consecutive failed authentications from a specific host that host will be barred from further attempts to log in until the administrator flushes the hosts or the database server is restarted.  Frequent occurrences of this error may indicate an attack or possibly an otherwise undetectable network issue.

### Solution
There are two ways to run the **FLUSH HOSTS** command, both require you to first log into the database instance via ssh.

1.  Execute the **FLUSH HOSTS** command directly via the mysql client. The password for the root user is the same password used for your deploy user.

            mysql -u root -p <password> -e "FLUSH HOSTS;"

2.  Use mysqladmin (again, with the root user):

            mysqladmin -u root -p<password> flush-hosts


## MySQL Server has gone away
### Relevant URL:

[[http://dev.mysql.com/doc/refman/5.0/en/gone-away.html]]

### Why
Rails relies upon connection pooling to eliminate the time overhead of spawning a database connection when a request comes in; the default connection pool size is 5.  MySQL operates with a default `wait_timeout` setting of 28,800 seconds (8 hours).  If a connection in the pool is inactive for more than 8 hours MySQL will close it to avoid the memory overhead of unused connections.  The next attempt by Rails to use this connection results in the error that the connection has gone away.

This error can also be seen if the MySQL server is not running.

### Solution
Verify MySQL is running on the appropriate database instance.

[[Rails 2.3|http://guides.rubyonrails.org/2_3_release_notes.html#reconnecting-mysql-connections]] and higher offers the ability to specify `reconnect: true` in the `database.yml`.  Using this functionality results in rails automatically reconnecting to the database if the connection has been closed.