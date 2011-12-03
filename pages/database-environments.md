# Setting up database replication

This page describes how to:  
 
* [Create a clustered environment that includes a database slave.][2] 

* [Add a database slave to an existing environment for database replication.][3]

* [Decide whether to use an existing snapshot or take a new snapshot when adding a database slave.][4]

* [Choose the correct instance size for a database slave.][6]


**Important!** If the master database fails, contact [[Engine Yard Support|http://support.cloud.engineyard.com]] to have your slave instance promoted to master instance.

##The best environment type for your database

Engine Yard offers three environment configurations: Single Server, Basic Cluster, Custom (cluster). For database replication, you need a clustered configuration.

* **Single Server.** For a small testing environment, a single server that contains both the application and the database is ideal. 
* **Basic Cluster.** The basic cluster does not include a database slave.  
    In non-production environments or environments with small databases, a basic cluster is a good choice. With a basic cluster, the database is not replicated so make sure that you backup frequently.  
    You can add a database slave to an existing basic cluster (see [below][3]).  
    **Note** _PostgreSQL only:_ If you expect your database server requirements to grow so that you will need a larger database instance, consider starting with a Custom environment using 64-bit instances. PostgreSQL instances cannot be upgraded easily from a High CPU Medium to a High CPU Large instance.  
* **Custom.** For typical applications in production environments, best practice is to use a custom clustered environment containing the following:  
    * One application master
    * An application slave
    * One master database
    * A database slave


<h2 id="topic2"> Set up a custom environment with database replication</h2>

This procedure describes how to set up a new environment that includes a database slave so that your database is replicated. This is best practice for a production environment. 

(If you already have an environment and want to add a database slave to it, see [Add a database slave to an existing environment][4] below.)

###To set up a custom environment with database replication

1. Create the environment as described in [[Create an environment|environment-create]].
2. Select Custom.
3. Set the size of the master database instance (Server size) and the slave, and enter the size for the /db volume.  
    The /db volume for the slave will be the same size as the master.  
    ![database instance and slave size](images/db_server_n_slave.png)  
    For information about choosing slave instance sizes, see [About Database slave instance sizes][6].
    
4. Click Boot This Configuration.


<h2 id="topic3">Add a database slave to an existing environment</h2>

If you have a basic cluster and want to add database replication, follow this procedure. If snapshots already exist when you create a database slave, you can decide to use one of them rather than take new snapshot for the database slave.

###To add a database slave to an existing environment

1. On the Environment page, click Add.  

2. Click Add Database Slave.

3. Set the instance size and the volume size.   
    **Note:** The volume size must be the same or larger than the master database.  
    **Note:** You cannot enlarge a PostgreSQL database to a 64-bit instance using a 32-bit snapshot.  
    For information about choosing instance sizes, see [About Database slave instance sizes][6].
    

3. Clear the check box to create a new snapshot for the slave or select to use a recent snapshot.     
    For more information, see [New or existing snapshot for the database slave?][3].  
    **Note:** The check box appears only if a recent snapshot is available.
    
3. Click Add to Cluster.

4. After the database slave boots, click Apply.  
    This generates new database.yml files for the database slave on the Application Master.


5. If your environment hasn't been upgraded since December 2nd, 2011 (i.e. if you see "Enable creation of db slaves with a larger volume than the db master" in the change log), then the /db volume size is not automatically increased and you need to do _one_ of the following:  
	* Upgrade your environment, or
	* Submit a ticket with [[Engine Yard Support|http://support.cloud.engineyard.com]] and ask to have /db volume size reset (to the size entered in step 3 above).
 

<!-- QUESTION: Do I still have to click Apply after this? PL-6488 -->

<h2 id="topic4">New or existing snapshot for the database slave?</h2>

You can take a snapshot of your environment immediately before creating a new database slave or you can use an existing snapshot (assuming that you have one). 

Choosing between creating a new snapshot or using an older snapshot is a trade-off:

* **Creating a new snapshot** means that the new database slave has less data from the master binary logs that it has to replay to make the replication.  However, creating a snapshot can be very IO intensive on the master and, thus, might be a bad choice for high traffic databases during peak traffic hours.  Also, for large databases, the shorter time required for replication to catch up after the database slave is up might be off-set by the time needed to create the new snapshot.

* **Using an existing snapshot** skips creating a new snapshot and instead uses an existing one.  This option is only available if the master database has binary log data going back to when the snapshot was created. The new database slave then has to read and replay more binary log data than if using a new snapshot. The amount of binary log data is entirely dependent on your database write traffic volume, but this method is usually much less IO intensive to the master database than creating a new snapshot.

<h2 id="topic6">About Database slave instance sizes</h2>

You can create database slaves with smaller or larger instance sizes. 

Slaves are generated from either existing or new master database snapshots; this snapshot can impact your choice of instance size. For example, PostgreSQL 32-bit snapshots cannot be used to upsize to 64-bit instances. 

### Smaller database slaves

Here are our recommendations for provisioning smaller slaves. 

<table>
<tr>
  <th>Master database size</th>
  <th>Minimum recommended size for a slave</th>
</tr>
<tr>
  <td>Small</td>
  <td>Small</td>
</tr>
<tr>
  <td>High CPU Med</td>
  <td>Small</td>
</tr>
<tr>
  <td>Large</td>
  <td>Small or High CPU Med </td>
</tr>
<tr>
  <td> High Memory XL </td>
  <td>Large</td>
</tr>
<tr>
  <td>XL</td>
  <td>Large or High Memory XL</td>
</tr>
<tr>
  <td> High CPU XL </td>
  <td>High Memory XL or Large <br>(in some cases, High CPU Med or Small) </td>
</tr>
<tr>
  <td> High Memory 2XL</td>
  <td>High Memory XL or XL </td>
</tr>
<tr>
  <td> High Memory 4XL</td>
  <td>High Memory 2XL </td>
</tr>
</table>


Because replication is single-threaded, CPU is not a key factor in these recommendations. The key factor is the memory on the instance that can be allocated to buffers (the buffer pool innodb for MySQL and shared_buffers for PostgreSQL).

### Larger database slaves

The sky and your budget are the limits when it comes to provisioning larger database slaves.   
If you are running your database master on a High CPU Medium and need better database performance, we recommend upgrading to the High CPU XL. (We do not recommend upgrading from High CPU Medium to Large because the Large is often less performant than a High CPU Medium.)

<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
    <td>Creating an environment</td><td>[[Create an environment|environment-create]].</td>
  </tr>
  <tr>
    <td>Increasing the size of a database instance or /db volume</td><td>[[Monitoring database usage and increasing the database volume or instance size|database-monitoring]].</td>
  </tr>
  <tr>
    <td>High availability in custom clustered environments</td><td>[[High availability for clustered environments|environment-high-availability]].</td>
  </tr> 
<tr>
    <td>Upgrade an environment</td><td>[[Upgrading an environment|environment-upgrade ]].</td>
  </tr>
  <tr>
	<td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
  </tr>
  <tr>
	<td>32-bit and 64-bit instance sizes</td><td>[[Instance sizes|instance-sizes]].
</table>


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4		"topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
