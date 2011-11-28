# Compute instances on Engine Yard Cloud

Currently Engine Yard Cloud is built on top of Amazon's AWS services. When you create 
an instance with Engine Yard you are booting up an [[EC2|http://aws.amazon.com/ec2/]] instance. 
We boot this instance for you and automatically configure it with the appropriate
[[Engine Yard Stack|cloud-tech-stack]] components for your 
environment. 


## Instance types and roles

There are various roles that an instance can play in your application's environment. These
roles include the following:

* ### [[Application instances|instance-types#app-instance]]
  Instances configured to run your application tier.
  
* ### [[Database instances|instance-types#db-instance]]
  Instances configured to run your database tier.

* ### [[Utility instances|instance-types#util-instance]]
  Instances configured for utility and background work.
  
* ### [[Single instance environment|instance-types#single-instance]]
  A single instance configured to combine multiple roles into one environment.


<h2 id="app-instance">Application instances</h2>

These instances are configured to run your ruby based application. They're configured with 
the Engine Yard stack. Your application will automatically be deployed onto the `/data` mount 
which is persistent storage.

We backup the `/data` volume only on the **application master** instance. 

You can run [[crons|adding-cron-jobs]] on your Application instances and you can setup crons to run on the application master instance via the web UI's Crontab page. If your crons are CPU or Memory intensive you might consider off loading the work to a Utility Instance.

<h2 id="db-instance">Database instances</h2>

This instance is configured to run your database. Running your database on a separate server prevents your database and application from contending for the same resources. 

MySQL is currently the only supported database on Engine Yard Cloud. If you need to run a postgres DB you'll have to set it up via a custom chef recipe. Here's a template to get you started: http://github.com/engineyard/ey-cloud-recipes/tree/master/cookbooks/postgres/

Your database resides on the `/db` mount. This mount point is persistent and can be used to restore your database later. We take regular snapshots and backups of your database by default.

<h2 id="util-instance">Utility instances</h2>

Utility instances are great for off loading any heavy work from your application instances. It's common to run background jobs, job queues, and crons on utility instances. They are also useful for running large memcached instances. 

We automatically push your code to the utility instances with each deploy for you. This allows your crons and background jobs to access any application code that they need.

<h2 id="single-instance">Single instance environment</h2>


Single instance environments, commonly called a solo instance, are great for staging and development environments since they'll save you money. You can boot up just a single instance and we'll deploy both your application and your database to this instance. These types of environments are not, however, ideal for product because your database and application will be contending for the same system resources. 

If you boot up a single instance environment to start with you can upgrade it to a multi-instance environment later.

