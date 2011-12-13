# Monitoring database usage and increasing the database volume or instance size

Whenever Engine Yard Cloud creates an environment, it creates a MySQL or PostgreSQL database for the application and EBS volume called /db is created to store the data.

When you set up your environment, make sure that you enable email alerts so that when your /db volume starts to fill up or if you database instance is under too much load, you receive an alert. 

The /db volume size and load capacity of your environment depends on whether you are using a single server, basic cluster, or configured environment. (See table below.)

<table>
  <tr>
    <th>Environment</th><th>Default size of EBS database volume, /db</th><th>Database instance</th>
  </tr>
  <tr>
    <td>Single server</td><td>15 GB </td><td>5 ECU  (application server with local database)</td>
  </tr>
  <tr>
    <td>Basic cluster</td><td>15 GB </td><td>5 ECU  (dedicated database instance)</td>
  </tr>
  <tr>
    <td>Custom cluster</td><td>Configurable (5 GB to 1024 GB)</td><td>Configurable; see [[Instance sizes|instance-sizes]]  </td>
  </tr> 
</table>

This page describes:  

* [Finding database volume usage][1]
* [Increasing the size of the database with _some_ downtime][2]
* [Increasing the size of the database with _minimal_ downtime][3]

<h2 id="topic1">Find database volume usage</h2>

You might want to check on database volume usage _before_ you get an alert.

###To check the database volume usage 

1. Via SSH, connect to the application and database instance (for single server environment) or the master database instance (for a clustered environment).  
2. Type:  
        df -h
    ![/db usage](images/database_usage.png)

<h2 id="topic2"> Increase the size of the database with some downtime</h2>

When you increase the size of the database instances via the UI, you are effectively creating a new environment and moving the snapshots of the instances from the old environment to a new environment. This means some downtime for your application. 

###To increase the size of the database volume or database instance via the UI with some downtime

1. Make sure that you know the number and size of the server instances in your current environment.
   
2. On the Environment page, click Stop.  
    
2. After the environment has stopped, click Boot.  
    The Configuration for Environment page appears.  

3. Select Custom.

4. For the Database Server, increase the server size and the /db volume size.

    ![/db volume size](images/db_vol_size.png)

    **Note:** You cannot decrease the size of the database volume.

5. Select the most recent snapshots from the dropdown.  
    This ensures that you don't lose data.  
    If there are snapshots are pending, this is indicated in the dropdown; wait until the snapshot is complete.

6. Click Boot This Configuration.

<h2 id="topic3"> Increase the size of the database with minimal downtime</h2>

If you need to increase the size of your master database instance with minimal downtime, you can do this with assistance from Engine Yard Support. First, a larger database slave instance is created and then, after replication is complete, the slave is promoted to master and the original (smaller) master is decommissioned. 

**Note:** This procedure applies only to clustered environments. (Single instances cannot be increased this way.) 


###To increase the size of the database volume or database instance with minimal downtime  

1. Create a database slave as described in [[Add a database slave to an existing environment|database-environments#topic3]].  
    Select a larger /db volume size or a larger instance size or both.

2. Submit a ticket with [[Engine Yard Support|http://support.cloud.engineyard.com]] to arrange promotion of the database slave.  
    Engine Yard Support works with you to schedule and coordinate the failover process.
	

<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
     <td>Enabling email alerts</td><td>[[Enable alerts|monitoring-setup#enable]]. </td>
   </tr>
   <tr>
     <td>Alert thresholds</td><td>[[About alerts for your environment|monitoring-alerts]]. </td>
   </tr>
   <tr>
	 <td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
   </tr>
</table>

[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4		"topic4"
[5]: #topic5        "topic5"