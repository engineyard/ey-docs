# AWS Reboot FAQs

## What is happening with Amazon?

Amazon is in the process of applying patches to their systems. Alerts will be sent 
to you via email and dashboard with more instructions on how to proceed when the 
patch is available for your instances. To complete the patch process, 
your instances will need to be restarted. Amazon and Engine Yard are 
currently working on a plan to ensure this is as painless as possible. Engine 
Yard will provide more information on timeframes shortly. In the meantime, 
here is some additional information from Amazon:

_We frequently upgrade our EC2 fleet, with many of our patches and upgrades being applied invisibly to customers. However, some updates require instances to be restarted and we periodically reboot instances in order to apply these updates. The upgrade we're currently rolling out to a portion of our fleet requires a short reboot of these customer instances. We recently released our Scheduled Events functionality which allows customers to have greater visibility into when these reboots are happening going forward. In addition to added visibility, this enables customers to manage reboots on their own schedule if they want to reboot before the scheduled update window. This data is available for customers to easily see on the AWS management console as well as through the APIs. Reboots such as these should be infrequent, but may be necessary from time to time to apply upgrades that strengthen our security, reliability and operational performance._




## When will my instances be rebooted?

You will be receiving an email with your specific reboot instructions 
and/or time window.  Please know we are working closely with Amazon to ensure 
this process is as seamless as possible.



## How do I reboot my instances?

**[[Follow these instructions|aws-reboot-old-stack]]** if you are on an **older version** of the Engine Yard stack.

**[[Follow these instructions|aws-reboot-instructions]]** if you are on a **newer version** of the Engine Yard stack.



## In what order should I reboot my instances?

The following should yield the lowest downtime for your website:

* Put up maintenance page.
* Reboot Database master
* Reboot all the Database slaves simultaneously
* Manually stop services on all Utility instances
    * Some services, like redis and memcache take a long time to stop, and so get killed during the shutdown process, leading to a possibility of data loss
* Reboot all Utility instances
* Disable stonith on all Application instances
* Fully reboot Application master
* Reboot the Application slaves
    * only after the Application Master is up and running again

Full instructions are **[[found here|http://docs.engineyard.com/aws-reboot-instructions.html]]**.



## I've been given a time or window when my instances will be restarted.  When exactly will my instances(s) restart?

If you've received communication asking you to restart your system before a specified time or window, what we have communicated is the _earliest_ your instances would be automatically restarted by Amazon.  Therefore, we highly recommend you restart your instance prior to the time communicated to you.  Once you've restarted your instance(s) they will no longer be subject to automatic reboot by Amazon.



## How do I know if I am on an old or new stack?

This information was included in the information we emailed you regarding the AWS reboot.


## How do I protect my data?

In order to minimize chances of database corruption you will want to cleanly shutdown 
your database prior to your scheduled instance reboot. To learn more about shutting
down your database properly during this reboot, **[[click here|aws-reboot-database]]**.


## There is upgrade available to my environment, should I upgrade first?

No, we would recommend you wait to update your environment until the reboot maintenance is over. We also recommend not doing any further changes to your environment or application until the reboot maintenance is over.


## After rebooting my instances, nginx is running, but my site doesn't come up. What's going on?

If you're running Phusion Passenger as opposed to Unicorn or (the now deprecated) Mongrel, you may need to force Passenger to restart. Passenger embeds itself into nginx, so restarting nginx will usually fix it. Issue the following command first to make sure your configuration is correct:

    sudo /etc/init.d/nginx configtest
  
You should see output similar to:

    * Checking nginx' configuration ...

    the configuration file /etc/nginx/nginx.conf syntax is ok
    configuration file /etc/nginx/nginx.conf test is successful

If you see warnings, do not worry. Generally speaking, these will not prevent nginx from starting. The main thing to look for is the presence of the '[ ok ]' item at the end of the configuration test. If you have concerns, feel free to **[[file a ticket with support|https://support.cloud.engineyard.com]]**. In general, however, you should be safe to proceed, by issuing the following command:

    sudo /etc/init.d/nginx restart

Give it a few seconds, then try accessing your site. It may take a few moments longer on the initial page load, but after that it should be back to normal.

## I ran the reboot and my dashboard is stuck on "Instance is alive, bootstrapping Engine Yard Stack" but it never finishes. What should I do?

To remedy this, click "Apply" once or manually run Chef with the following command:

    /usr/local/ey_resin/bin/ey-enzyme --main --chef-bin /usr/local/ey_resin/bin/chef-solo