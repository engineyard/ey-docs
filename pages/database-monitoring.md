# Monitoring database usage and increasing the database volume or instance size

Whenever Engine Yard Cloud creates an environment, it creates a MySQL or PostgreSQL database for the application. 

Environment	Default size of EBS database volume, /db
Single server	
Basic cluster	
Custom cluster	5 - XX GB (configurable)

<table>
  <tr>
    <th>Environment</th><th>Default size of EBS database volume, /db</th><th>Database instance</th>
  </tr>
  <tr>
    <td>Single server</td><td>  </td><td>  </td>
    <td>Basic cluster</td><td>  </td><td>  </td>
    <td>Custom cluster</td><td>5 GB and 1024 GB</td><td>  </td>
  </tr> 
</table>

When you set up your environment, make sure that you enable email alerts so that when your /db volume starts to fill up or if you database instance is under too much load, you receive an alert. 

## Increase the size of the database

In a production environment, where you need to increase your database without downtime, you need to call Engine Yard support to arrange for an instance upgrade.

###To increase the size of the database volume or database server instance _without_ downtime
* Contact Support.

In a non-production environment, where some downtime is acceptable, you can increase the size of the database volume or database server instance by following this procedure.

###To increase the size of the database volume or database server instance _with_ downtime

1. Make sure that you know the current specifications on your environment and the size and database server instance that you want in your larger environment. 

2. On the Environment page, click Stop.  
    
2. After the environment has stopped, click Boot.  
    The Configuration for Environment page appears.  

3. Select Custom.

4. Set all the parameters...

5. Select the most recent snapshots from the drop-downs.  
    This ensures that you don't lose data. If there are snapshots are pending, t we'll indicate so in the dropdown.
Resize any volume that you want to grow. When the environment boots back up this volume will be automatically resized for you.
Click Boot This Configuration.


{Problem with the text on this page: we now have an Application snapshot and a database backup -- they have been decoupled. }

{Need separate documentation about how to modify a cluster, add instances, increase app size, and utlity vol size. Can maybe reference that doc. Where should that doc go?}

<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
<tr>
    <td>Enabling email alerts</td><td>[[Enable alerts|monitoring-setup#enable]] </td>
  </tr>
<tr>
    <td>Alert thresholds</td><td>[[Understand alerts for your environment|monitoring-alerts]] documentation </td>
  </tr>

</table>