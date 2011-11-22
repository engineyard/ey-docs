# Setting up replication

This page describes how to set up a replicated (or slave) database. 

<!-- Use this page as an introduction. Make sure to address that we automatically create the database for you.
How to choose the size of the database instance
How to choose the size of the /db volume
When to choose a database slave (is there any point to having more than one slave?) -->

This is the process:

* [  ][1].  
* [  ][2].

For a small testing environment, a single server that contains both the application and the database is fine. 
For typical mid-scale applications using ... database ... 

However, for some applications, you want to create a custom cluster, containing:

* One application master
* One or more application application slaves
* One database master
* One or more database slaves
* One or more utility servers

---
<!-- Erik Jones writes -->

Choosing between creating a new snapshot v. using an older one when booting a new slave is a trade-off.

* Creating a new snapshot  

    Using this method will mean that the new db_slave has less data from the master's binary logs to replay in order for replication to be current.  However, creating a snapshot can be very IO intensive on the master and, as such, may not be desirable on high traffic databases during your application's peak traffic hours.  Also, for large databases, the shorter time required for replication to catch up once the db_slave is up and running may be off-set by the time needed to create a new snapshot.

* Using an older snapshot

    This method skips the need for a new snapshot to be created and instead uses a pre-existing one.  Note that this option will only be available if the master still has enough binary log data going back to when the snapshot was created.  The new db_slave will then have to read, and replay, more binary log data than when using a new snapshot, and the amount of binary log data that entails is entirely dependent on your database's write traffic volume, but it should usually be a lot less IO intensive to the db_master than creating a new snapshot is.

---

##To set up a custom environment

1. Create the environment as described [[ Create an environment|environment-create]].
2. Choose Custom Environment.
3. 


Right now when I fireup the slave, it is always the same size as the master.

If my master database dies, then I call support.
Don't have recreate the environment if I have a database slave. Where I do if I just have a recent backup.
Lose less than the backup version.

See wikipedia to harvest info about database slaves. 

Make a little list about why slaves are better than back ups.

Mention high availability.
       


<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
    <td>Creating an environment</td><td>[[Create an environment|environment-create]]</td>
  </tr> 
</table>


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
