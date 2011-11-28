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

## Find out database volume usage

You might want to check on database volume usage _before_ you get an alert.

###To check the database volume usage 

1. Via SSH, connect to the Application and Database instance (for single server environment) or the Master Database instance (for a clustered environment).  
2. Type:  
        df -h
    ![/db usage](images/database_usage.png)

## Increase the size of the database

When you increase the size of the database via the UI, you are effectively creating a new environment and moving the snapshots of the instances from the old environment to a new environment. This means some downtime for your application. 

However, Engine Yard Support Engineers are able to increase the size of your database without downtime. 

###To increase the size of the database volume or database instance _without_ downtime  
* Please file a ticket with [[Engine Yard Support|http://support.cloud.engineyard.com]] to schedule an instance upgrade.

###To increase the size of the database volume or database instance _with_ downtime

1. Make sure that you know the number and size of the server instances in your current environment.
   
2. On the Environment page, click Stop.  
    
2. After the environment has stopped, click Boot.  
    The Configuration for Environment page appears.  

3. Select Custom.

4. Increase the Server size and the /db volume size.

    ![/db volume size](images/db_vol_size.png)

    **Note:** You cannot decrease the size of the database volume. 

5. Select the most recent snapshots from the dropdown.  
    This ensures that you don't lose data. If there are snapshots are pending, this is indicated in the dropdown.

6. Click Boot This Configuration.


<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
     <td>Enabling email alerts</td><td>[[Enable alerts|monitoring-setup#enable]]. </td>
   </tr>
   <tr>
     <td>Alert thresholds</td><td>[[About alerts for your environment|monitoring-alerts]] documentation. </td>
   </tr>
   <tr>
	 <td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
   </tr>
</table>