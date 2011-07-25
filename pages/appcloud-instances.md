# Compute Instances on AppCloud

Currently Engine Yard AppCloud is built on top of Amazon's AWS services. When you create 
an instance with Engine Yard you are booting up an [[EC2|http://aws.amazon.com/ec2/]] instance. 
We boot this instance for you and automatically configure it with the needed 
[[Engine Yard Stack|appcloud-tech-stack]] components for your 
environment.

### Learn more about instances on AppCloud

* [[Instance Roles & Types|appcloud-instances#role-types]]
* [[Instance Sizes|appcloud-instances#sizes]]
* [[Persistent Storage|appcloud-instances#persistent-storage]]


<h2 id="role-types">Instance Roles & Types</h2>

There are various roles that an instance can play in your application's environment on AppCloud. These
roles include the following:

* ### [[Application Instances|appcloud-instances#app-instance]]
  Instances configured to run your application tier.
  
* ### [[Database Instances|appcloud-instances#db-instance]]
  Instances configured to run your database tier.

* ### [[Utility Instances|appcloud-instances#util-instance]]
  Instances configured for utility & background work.
  
* ### [[Single Instance Environment|appcloud-instances#single-instance]]
  Instance configured to combine multiple roles into one environment.


<h2 id="app-instance">Application Instances</h2>

These instances are configured to run your ruby based application. They're configured with 
the Engine Yard stack. Your application will automatically be deployed onto the `/data` mount 
which is persistent storage.

We backup the `/data` volume only on the **application master** instance. 

You can run [[crons|adding-cron-jobs]] on your Application instances and you can setup crons to run on the application master instance via the web UI's Crontab page. If your crons are CPU or Memory intensive you might consider off loading the work to a Utility Instance.

<h2 id="db-instance">Database Instances</h2>

This instance is configured to run your database. Running your database on a separate server prevents your database and application from contending for the same resources. 

MySQL is currently the only supported database on Engine Yard AppCloud. If you need to run a postgres DB you'll have to set it up via a custom chef recipe. Here's a template to get you started: http://github.com/engineyard/ey-cloud-recipes/tree/master/cookbooks/postgres/

Your database resides on the `/db` mount. This mount point is persistent and can be used to restore your database later. We take regular snapshots and backups of your database by default.

<h2 id="util-instance">Utility Instances</h2>

Utility instances are great for off loading any heavy work from your application instances. It's common to run background jobs, job queues, and crons on utility instances. They are also useful for running large memcached instances. 

We automatically push your code to the utility instances with each deploy for you. This allows your crons and background jobs to access any application code that they need.

<h2 id="single-instance">Single Instance Environment</h2>


Single instance environments, commonly called a solo instance, are great for staging and development environments since they'll save you money. You can boot up just a single instance and we'll deploy both your application and your database to this instance. These types of environments are not, however, ideal for product because your database and application will be contending for the same system resources. 

If you boot up a single instance environment to start with you can upgrade it to a multi-instance environment later.


<h2 id="sizes">Instance Sizes</h2>

Below you will find the the instance sizes that are available to boot on AppCloud.  You have access to
7 different instance sizes broken down into 3 categories.

<div class="note">
  <strong>Note:</strong> Engine Yard recommends the <strong>High CPU Medium</strong> instances when your application starts
  taking on heavier traffic or load.
</div>
  
### Normal Instances  
  
  * **Small** is 32-bit with 1.7 GB RAM, 1 ECU
      
    These instances are great for staging environments, development environments, and lower traffic production. 
    environments. With only a single ECU they're not ideal for production environments taking on larger 
    amounts of traffic. We have noticed these instances become CPU starved when serving higher amounts of traffic or load.
  
  * **Large** is 64-bit with 7.5 GB RAM, 4 ECU
    
    These instances are great when your application or database needs extra RAM but is not CPU starved.
    
  * **Extra Large** is 64-bit with 15 GB RAM, 8 ECU
    
    With extra RAM and CPU these instances are still affordable for those who need the extra horsepower.
    

### High Memory instances
  
  * **High Memory Double Extra Large** is 64-bit with 34.2 GB RAM
    
    These instances are a perfect fit for databases with large datasets. You can relieve your database
    of disk reads by loading your data into RAM.
    
  * **High Memory Quadruple Extra Large** is 64-bit with 68.4 GB RAM, 26 ECU
    
    These are the largest instances you can boot on AppCloud. With a massive amount of RAM, these are best used
    for your database tier or in-memory caches.

### High CPU instances
  
  * **High CPU Medium** is 32-bit with 1.7 GB RAM, 5 ECU
  
    These are the most ideal instance size when your app is first starting to take on real production traffic. 
    They're also a great size for scaling out horizontally, allowing you to add or remove application instances 
    as need at an affordable rate. The 5 ECU's, equating to 2 VCPUs, is a wonderful balance of RAM to CPU.
    
  * **High CPU Extra Large** is 64-bit with 7 GB RAM, 20 ECU
  
    This instance size is great for those applications that are very CPU intensive.



<h2 id="persistent-storage">Persistent Storage</h2>
Your application code and database are written out to **persistent storage** 
volumes on AppCloud. We automatically mount these volumes and take backups for you.

Both the `/data` mount on the application master instance and the `/db` mount on the database 
master instance(s) are persistent. We take advantage of Amazon's EBS storage allowing us to 
take regular disk snapshots of both of these volumes. 

If you ever have to rebuild your instances from scratch you will have the ability to restore 
both of these volumes from previous snapshots. 
