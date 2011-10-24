#Upgrading free trial account to full account

Whether you are upgrading your free trial account to add additional capacity or to extend your usage beyond your first 500 hours, Engine Yard makes it easy to add as much computing power as you need for your application.

Before adding capacity, you need to upgrade to a full account. At any point during your free trial, click the **Upgrade Account** button to submit your billing information and gain access to the full options and features of Engine Yard Cloud. After you've provided the requested information and arrived back at the Dashboard, you notice that a number of buttons are now available that were previously disabled.

Unless you stopped your environment before upgrading, the instance that your Free Trial began with is still running and your application is still deployed. You will not be billed for any usage that occurred prior to upgrading, but billing does begin as soon as you unlock Cloud's full feature range.

##Adding capacity to your account

Trial accounts provide users with a single High-CPU Medium instance (single server).  While this configuration provides more than sufficient capacity for developing your application, many customers will want to add additional capacity when going to production. To grow from a single instance to a cluster, you will need to be in a position where you can safely bring your application down for a few minutes without disrupting your developers or users. The next step is to determine what kind of environment you'd like to configure. Options include a **single instance** (this is what you currently have), a **basic cluster** or a **custom environment**.

###Using cluster-based architectures to improve scalability

We recommend that most customers who are going into production move to a cluster--designating separate instances for your application and database will lead to improved performance and stability. To utilize a cluster for your application, you can either select **Basic Cluster** which will provide you with a pre-configured environment or you can choose **Custom** to have fine-grained control over the instances in your environment. Custom environments provide you with the greatest flexibility, and after you've upgraded to a custom environment, adding additional application, database and utility instances is easy and will not require additional down time.

###Configuring your new environment

When you are ready, go to your Dashboard and click the **Stop** button associated with the environment you are planning to upgrade.

![Stop Instance](images/01_stop_instance.png)

This will cause a snapshot to be taken of the current **/data** and **/db** directories in your instance. Your new instances can use this snapshot to load the data that was on the previous environment.

![Boot Instance](images/02_boot_instance.png)

Next, choose **Boot** to configure and create new instances. You’re presented with three choices: **Single Server** (what you started with), **Basic Cluster** (separate application and database instances), and **Custom**. For this example, we will choose Custom.

![Configuration](images/03_configuration.png)

###Specifying site info

After you've selected the Custom option, you will see some new options show up lower in the page in a section entitled **Site Info**.  Check the box next to **Use separate database instance** to configure a cluster of instances.

![Site Info](images/04_site_info.png)

Next, you can specify the quantity of Application Instances you'd like to add as well as their size.  For more information on the details associated with various instance sizes, check out the Engine Yard Cloud [[price list|http://www.engineyard.com/products/cloud/pricing]].

After you've specified your instance requirements, the next step is to choose which snapshot you'd like to boot from. The most recent snapshot should appear at the top, or notify you if the most recent snapshot is still pending. You can also choose how much room you want to reserve for future snapshot storage- the default is 5GB and it can range up to 1024GB.  Finally, you can choose to add Utility instances (servers designed to run dedicated tasks) if you would like.

###Booting and verifying your environment

Click **Boot This Configuration** and your instances will begin to boot. Your browser will return you to the Dashboard and you will see status messages about the progress of the boot process.  After this is done, you can click the HTTP button associated with your new environment to verify your application is up and running.
