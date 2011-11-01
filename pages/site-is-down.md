#Site is down: Diagnostic checklist

If your site is down, here are some things to try. If these don't work, [[open a ticket|http://support.cloud.engineyard.com]].

---
Can you access the Dashboard via [[http://cloud.engineyard.com]]?

  * If not, go to [[@eycloud|http://twitter.com/#/eycloud]] to see if Engine Yard Cloud has problems.

---
After you have logged in, does your application show red status circles?

  * If yes, these red circles usually indicate problems with the instance.
    * Check the Base log (log output for Engine Yard's Chef scripts) and the Custom log (log output for your custom Chef scripts). You can find configuration problems in the logs.
      * SOLUTION: Fix these and click Apply to re-run these scripts.
    * Review the Alerts on the Environment page. These indicate if the instance has issues with its resources.
      * **Note:** Alerts are enabled by default but, to receive email notification, enable email alerts.
      * SOLUTION: If your application is using too many resources and causing alerts, you can [[move to a larger instance size|instance-change-size]] or reconfigure your environment to not use so many resources on one instance.

---
Click View Log and review the log to make sure that the most recent deployment log was successful.


If none of these have alerted to the problem, then SSH into your instance and check these items:

---
Go to `/data/<appname>/current/log` and view your application log. This log indicates if there are problems with your running application.
    
    $ cd /data/myapp/current/log
    $ tail production.log

---
If you have a cluster of instances, make sure that HAProxy is running:

    $ ps ax|grep haproxy

  If HAProxy is not running, run `/etc/init.d/haproxy start`.

---
On your application instances, make sure that Nginx is running:

    $ sudo /etc/init.d/nginx status
     * status:  started
  
  If Nginx is not running, run `sudo /etc/init.d/nginx start`.

---  
On your application instances, if using Passenger, make sure Passenger is running:
    
    $ passenger-status
    
  If Passenger is not running, restart Nginx:
    
    $ sudo /etc/init.d/nginx restart
    
---
On your solo instance or database instance, make sure that MySQL is running:
   
    $ sudo /etc/init.d/mysql status
  
  If MySQL is not running, restart MySQL:
  
    $ sudo /etc/init.d/mysql start