# Setting up replication

This page describes how to:  
 
* Create a clustered environment that includes a database slave.  

* Add database slave to an existing environment for database replication.

If the Database Master fails, contact [[Engine Yard Support|http://support.cloud.engineyard.com]] to have your slave instance promoted to master instance.

For a small testing environment, a single server that contains both the application and the database is fine. 
However, for typical mid-scale applications, you want to use a clustered environment, containing:

* One application master
* An application slave
* One database master
* A database slave
* (Optionally) one or two utility servers

The Engine Yard basic cluster does not include a database slave. 

In non-production environments or environments where the database data is not critical for the application, you might decide against database replication. If this is the case, make sure that you backup frequently enough for your disaster recovery needs.


##To set up a custom environment with database replication

1. Create the environment as described [[Create an environment|environment-create]].
2. Select Custom.
3. Set the Number of read slaves to add to 1.
    The size and volume for the read slave will be the same as the master.
3. Set the server and volume sizes as needed for your application.  
    **Note:** Make sure to anticipate growth for your database. You cannot later increase the size of the database without incurring downtime.  
    ![database server and slave size](images/db_server_n_slave.png)
4. Click Boot This Configuration.

---

##To add a database slave to an existing environment

1. Decide whether or not to do take a 

Choosing between creating a new snapshot v. using an older one when booting a new slave is a trade-off.

* Creating a new snapshot  

    Using this method will mean that the new db_slave has less data from the master's binary logs to replay in order for replication to be current.  However, creating a snapshot can be very IO intensive on the master and, as such, may not be desirable on high traffic databases during your application's peak traffic hours.  Also, for large databases, the shorter time required for replication to catch up once the db_slave is up and running may be off-set by the time needed to create a new snapshot.

* Using an older snapshot

    This method skips the need for a new snapshot to be created and instead uses a pre-existing one.  Note that this option will only be available if the master still has enough binary log data going back to when the snapshot was created.  The new db_slave will then have to read, and replay, more binary log data than when using a new snapshot, and the amount of binary log data that entails is entirely dependent on your database's write traffic volume, but it should usually be a lot less IO intensive to the db_master than creating a new snapshot is.



<!-- Right now when I fireup the slave, it is always the same size as the master.

Don't have recreate the environment if I have a database slave. Where I do if I just have a recent backup.
Lose less than the backup version.

See wikipedia to harvest info about database slaves. 

Make a little list about why slaves are better than back ups.

Mention high availability. -->
       


<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
    <td>Creating an environment</td><td>[[Create an environment|environment-create]]</td>
  </tr>
  <tr>
    <td>Increasing the size of a database instance or /db volume</td><td>[[Monitoring database usage and increasing the database volume or instance size|database-monitoring]]</td>
  </tr> 
</table>


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
