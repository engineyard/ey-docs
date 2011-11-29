#High availability for clustered environments

High availability for clustered environments is currently in Alpha support on Engine Yard Cloud. To use high availability for clustered environments, sign up [[here|signup-high-availability]].

This page describes:  

* [About high-availability clusters][1]
* [What to do if a zone fails][2]
* [Make an existing environment a high-availability environment][3]
* [Engine Yard Cloud changes for high availability][4]

<h2 id="topic1">About high-availability clusters</h2>

With high availability, Engine Yard Cloud boots like instances in different Amazon Availability Zones in the same region. 

Whenever possible, your application master and master database are placed in the same zone and your application and slave database instances are placed in a different zone from the masters.  Similarly, if you to add utility servers to the environment, they are placed in different zones.  This provides a redundant environment if there are problems in one zone of a region.

For example, you choose to create your environment in the Eastern United States region. Then, the instances might be distributed (automatically) as follows:

* Your application master and master database are both placed in US East Zone 1**c**. 
* Your application and slave database instances are placed in US East Zone 1**d**. 
* If you have two utility servers, they are placed in US East Zone 1**c** and US East Zone 1**d**.

To take advantage of high availability, you need to have _at least_ the following instances in your environment:  

* Application Master
* Application
* Master Database
* Slave Database

<h2 id="topic2">What to do if a zone fails</h2>

In the case of zone failure:  

* If the Application Master fails, then the takeover process begins. See [[Application master takeover|instance-takeover]] for details. If you have cron jobs or custom chef recipes for the environment, then you need to take action.
* If the Database Master fails, then contact [[Engine Yard Support|http://support.cloud.engineyard.com]] to have your slave instance promoted to master instance. 


<h2 id="topic3">Make an existing environment a high-availability environment</h2>

Before high availability, your instances were assigned randomly to availability zones. This procedure outlines how to find out if/how your existing environments need to be modified to take advantage of high availability. 

###To make an existing environment a high-availability environment

1. If you do not have a database slave, create one.  
    The database slave instance is created in an availability zone other than the zone that your master database is in.

2. Examine your environment to determine what zones your instances are currently in:  
    On the environment page, place your mouse over the hostname to see the zone. 

    ![Place mouse over IP address to see the availability zone](images/avail_zone.png)

3. If your masters and slaves are in different zones, then you do not need to take action.

4. If a master and slave are in the same zone, then do one of the following:
    * Option A: (a) Clone the environment. (b) Test the environment. (c) Use the cloned environment as your production environment. (d) Delete the original environment.
    * Option B: (a) Add a new slave to the current environment. (b) Delete the old slave. (c) Repeat Step 2 above to confirm that both your application and database slaves are in different availability zones from their masters. 

<h2 id="topic4">Engine Yard Cloud changes for high availability</h2>

You might notice the following changes in Engine Yard Cloud after you are signed up for the high-availability Alpha program:  

* When you create a new environment, you cannot choose a specific zone within a region; the zone is chosen automatically.  
* You no longer get Amazon out-of-capacity errors.



[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"

