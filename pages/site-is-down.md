#Site is Down Diagnostic Checklist

If your site is down, here are a few things to try out. If these don't work for you, please [[open a ticket|http://support.cloud.engineyard.com]].

---
Can you access the AppCloud Dashboard via [[http://cloud.engineyard.com]]?

  * If NO, check [[@eycloud|http://twitter.com/#/eycloud]] to see if AppCloud is having any problems.

---
Once you have logged in, does your Application have any red status circles?

  * If YES, these red circles usually indicate problems with the instance.
    * Check the **Base Log** (log output for EY's Chef scripts) and the **Custom Log** (log output for your custom Chef scripts). You can find any configuration problems here.
      * SOLUTION: Fix these and click the **Update** button to re-run these scripts.
    * Check the **Alerts** tab. This will indicate if the instance had any issues with its resources.
      * NOTE: If you do not have alerts enabled, this information will not be provided - so enable alerts!
      * SOLUTION: If your application is using too many resources and causing alerts, you can [[move to a larger instance size|change-an-instance-size]] or reconfigure your environment to not use so many resources on one instance.

---
Check the deployment log to make sure the most recent deployment log was successful.


If none of these have alerted to the problem, then SSH into your instance and check these items:

---
Go to `/data/<appname>/current/log` and view your application log. This will indicate if there are any problems with your application specifically.
    
    $ cd /data/myapp/current/log
    $ tail production.log

---
If you have a cluster of instances, check to see if HAProxy is running:

    $ ps ax|grep haproxy

  If not, you can run `/etc/init.d/haproxy start`.

---
On your application instances, make sure Nginx is running:

    $ /etc/init.d/nginx status
     * status:  started
  
  If not, you can run `/etc/init.d/nginx start`.

---  
On your application instances, if using Passenger, check to see if Passenger is running:
    
    $ passenger-status
    
  If Passenger is not running, you need to restart Nginx:
    
    $ /etc/init.d/nginx restart
    
---
On your Solo instance or DB instance, check to see that MySQL is running:
   
    $ /etc/init.d/mysql status
  
  If MySQL is not running, then restart MySQL:
  
    $ /etc/init.d/mysql start