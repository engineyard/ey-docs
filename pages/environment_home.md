# Environments

**Environment** is an overloaded term. Here at EY when we refer to your 'environment' we are talking about the cluster of instances that collectively run an application or set of applications. An environment includes Application Instance(s), Database Instance(s), and possibly
one or more Utility Instances. Check out this article if you want to know more about the various instances types: [[AppCloud Instances|appcloud-instances]].

We'll automatically associate an [[IP Address|ip-addresses]] to your environment for you. You'll be able to point your domain name to this address.

At the 'environment' level you'll be able to manage the following:

  * [[IP Addresses|ip-addresses]]
  * [[SSH Keys|env_ssh_keys]]
  * [[Adding Cron Jobs|adding-cron-jobs]]
  * [[Instance Sizes|change-an-instance-size]]
  * [[Resource Usage Graphs|usage-graphs|]]
  * [[Using Snapshots|using-snapshots]]
  * [[Rebuilding an Environment|rebuilding-an-environment]]

## Create an Environment

**NOTE**: In order to use this article you must have first setup at least one environment with the Quick Start method.

### Create an Environment

  - Click on the **Dashboard** section under SERVER TOOLS.
  - In the top right corner, click on the **Create New Environment** link.
  - Enter your data, make your selections, and press the **Create environment** button.

### Environment Options

  * When creating your "Environment Name", use underscores to separate words instead of spaces.  Common environment names are: myapp_production, myapp_staging, myapp_testing, myapp_qa, myapp_ci, etc.
  * The "SSH Username" is used to create a user on the system.  Your application runs under this user.  Also, this user has sudo rights.

**NOTE**: Your user account name cannot be root.

  * Usually leaving the default "Availability Zone" selected is fine.
  * Choose your preferred "Web Server Stack".
  * The default 10 backups is recommended for the "Number of database backups to keep".  You may alter this to your taste.
  * If you need more frequent database backups, change the "How often to run database backups in hours" value.

## Delete an Environment

### Before You Begin

  * The Environment you want to delete can't have any instances running.

### Delete the Environment

  - Under SERVER TOOLS, click on "Dashboard" to see a list of all environments.
  - To permanently delete the Environment, click on the **Delete** button in the top right corner.
  - You will be prompted to verify that you wish to do so, click "OK".

That environment is now gone.


## Start Your Environment

If you have no instances running, these steps will help you get going.

  - Get to the Dashboard.  Under SERVER TOOLS click on the Dashboard section.  
  - From your list of environments, click on the **Create New Instance(s)** link.

Follow the on screen prompts to choose from either a Single Small Server, Basic Cluster or Custom.  The compute cost will be calculated and displayed for you in the top right.

### Start an Instance in a Running Environment

You can grow your cluster by adding additional application or database instances as needed.

From the Dashboard again, this time click on **Add New Instance to Cluster** link.

You can choose from three options:

  * Add Application Server
  * Add Database Server
  * Add Utility Server

Click the **Add to Instances** button to add the type of instance to your cluster.

## Clone an Environment

AppCloud makes it easy to clone your environment.  This can be useful so that you can do a test deploy, make sure everything will run correctly, before deploying to production.

Because when you clone an environment, it clones **everything**, including the volumes your original environment uses.

### Steps

  - From the Dashboard, click on the **Clone** link for the environment you'd like to clone.
  - The *Clone your production environment* page appears.  Setup the **Name**, **Framework Environment**, **IP Address**, and **Domain Name(s)** for each application.  Click **Clone Environment** button.
  - Once your cloned environment is booted, you'll see it in your Dashboard as ready.

Now you're ready to do your tests and when your done you can terminate the experimental cloned environment.  

Gone are the costs of having to maintain a staging environment and the time it takes to make it match production!

## Cluster Architechture

![Cluster Architecture](images/cluster_architechture.png)

## View Your HAProxy Stats

In order to gain a better picture of the current availability of your application, we generate a password so you can securely review your HAProxy stats for your application cluster.

**NOTE:** You must be running at least two application instances to view HAProxy stats.

Your password is generated for each environment you've got running.

### How to Display HAProxy Stats

  - Click on the **More Options** tab of the environment
  - You will see a link to **HAProxy Stats** listed here (unless you are not running multiple app instances in this environment)

Upon clicking the link, you'll be greeted with a page full of information recorded by HAProxy on the current connections.

![HAProxy Stats](images/haproxy_stats.jpg)

Just refresh the page to get the latest stats.

### Further Reading

Go to [[HAProxy's documentation|http://haproxy.1wt.eu/#docs]] for more information how to interpret the stats.


