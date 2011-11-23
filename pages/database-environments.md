# Setting up database replication

This page describes how to:  
 
* [Create a clustered environment that includes a database slave][2] 

* [Add a database slave to an existing environment for database replication][3]

**Important!** If the master database fails, contact [[Engine Yard Support|http://support.cloud.engineyard.com]] to have your slave instance promoted to master instance.

##The best environment type for your database

Engine Yard offers three environment configurations: Single Server, Basic Cluster, Custom. For database replication, you need a custom configuration.

* **Single Server.** For a small testing environment, a single server that contains both the application and the database is ideal. 
* **Basic Cluster.** The basic cluster does not include a database slave. In non-production environments or environments where the database data is not critical, a basic cluster is a good choice. With a basic cluster the database is not replicated; make sure that you backup frequently enough.
* **Custom.** For typical applications in production environments, best practice is to use a custom clustered environment, containing the following:  
    * One application master
    * An application slave
    * One master database
    * A database slave
    * (Optionally) one or two utility servers

<h2 id="topic2"> Set up a custom environment with database replication</h2>

This procedure describes how to set up a new environment that includes a database slave so that your database is replicated. This is best practice for a production environment. 

(If you already have an environment and want to add a database slave to it, see [Add a database slave to an existing environment][4] below.)

###To set up a custom environment with database replication

1. Create the environment as described in [[Create an environment|environment-create]].
2. Select Custom.
3. Set the Number of read slaves to add to 1.
    The size and volume for the read slave will be the same as the master.
3. Set the server and volume sizes as needed for your application.  
    **Note:** Make sure to anticipate growth for your database. You cannot increase the size of the database later without incurring downtime.  
    ![database server and slave size](images/db_server_n_slave.png)
4. Click Boot This Configuration.


<h2 id="topic3">Add a database slave to an existing environment</h2>

If you have a basic cluster and want to add database replication, this procedure describes how. If snapshots already exist when you create a database slave, you can decide to use one of them rather than take new snapshot for the database slave.

###To add a database slave to an existing environment

1. On the Environment page, click Add.  

2. Click Add Database Slave.

3. Select an existing snapshot or to take a new one. {QUESTION: What does this UI look like?}  
    If an existing snapshot is available for selection, see [New or old snapshot for the database slave?][3] for help deciding whether you should use it.
    
3. Click Add to Cluster.

4. QUESTION: Do I still have to click Update after this? PL-6488

<h3 id="topic4">New or old snapshot for the database slave?</h3>

You can take a snapshot of your environment immediately before creating a new database slave or you can use an older snapshot (assuming that you have one). 

Choosing between creating a new snapshot or using an older snapshot is a trade-off:

* **Creating a new snapshot** means that the new database slave has less data from the master binary logs that it has to replay to make the replication.  However, creating a snapshot can be very IO intensive on the master and, thus, might be a bad choice for high traffic databases during peak traffic hours.  Also, for large databases, the shorter time required for replication to catch up after the database slave is up might be off-set by the time needed to create the new snapshot.

* **Using an older snapshot** skips creating a new snapshot and instead uses an existing one.  This option is only be available if the master database has binary log data going back to when the snapshot was created. The new database slave then has to read and replay more binary log data than if using a new snapshot. The amount of binary log data is entirely dependent on your database write traffic volume, but, this method is usually much less IO intensive to the master database than creating a new snapshot.



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
[4]: #topic4		"topic4"
[5]: #topic5        "topic5"

<!-- Right now when I fireup the slave, it is always the same size as the master.

Do not have recreate the environment if I have a database slave. Where I do if I just have a recent backup.
Lose less than the backup version.

See wikipedia to harvest info about database slaves. 

Make a little list about why slaves are better than back ups.

Mention high availability. -->