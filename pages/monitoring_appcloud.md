# Monitoring

AppCloud can monitor your instances for CPU usage, free space, etc. so that you're aware of extreme resource usage when it happens. 

We offer and recommend an External Monitoring For a Rails App|external URL monitor checking service to alert you if, after two consecutive attempts, if we have not been able to contact your URL with an HTTP 200 OK response.

This page describes:

  * [How to enable email alerts and view alerts for your environment] [1]
  * [The alert thresholds] [2]
  * [External monitoring for a Rails app] [3]

---
<h2><a id="topic1"> Instance monitoring </a></h2>

With **Instance Monitoring**, Engine Yard keeps an eye on your instance, records the alerts, and (optionally) emails you.

#### To enable email alerts

**Important!** By default, email alerts are disabled.

1. In AppCloud, click Dashboard.
2. Click **Alerts**.
2. Select the **Enable email alerts** check box.
3. Specify an email to receive the alerts.
4. Click **Update Alert Settings**.

    ![Enable Alerts](images/enable_alerts.jpg)

Follow the above steps for each environment that you'd like to receive alerts for.  For instance you may not need to receive alerts for your "staging" environment, but rather you do want alerts for your "production" environment.

#### To view alerts

**Note:** You can view the alerts, even if you have not enabled email alerts.

1. In AppCloud, click Dashboard.
2. To view the three most current alerts, click **Alerts**.

    ![Recent Alerts](images/recent_alerts.jpg)

3. To view all recorded alerts, click **View All Alerts**.

    ![All Alerts](images/all_alerts.jpg)

---
<h2><a id="topic2">Understand alerts</a></h2>

#### Load Average

Something is consuming system resources.  If this is sustained for a long period it can warrant getting on the instance and troubleshooting. 

Current Thresholds:

  * Warn: 4 x VCPU
  * Fail: 10 x VCPU

For example: a 1 VCPU, the load would be 4.00 but a 5 VCPU, it would be 20.00.  

#### IO-Wait

The instance is waiting for disk writes to complete before it can move to other operations.

Current Thresholds:

  * Warn: 40% iowait
  * Fail: 80% iowait


#### Swap Used

This alerts when the swap space is getting low.  

Current Thresholds:

  * Warn: 128 MB Swap Used
  * Fail: 384 MB Swap Used

#### Free Space

Free space is monitored on these mount points: `/`, `/data`, `/db`, and `/mnt`.

You might not realize the instance is almost out of disk space until you get this alert. The thresholds are calculated based on the space allocated to the mount point.

Current Thresholds:

* Warn: If the disk space for a particular mount point is 10 GB or less, then the warning threshold is 70% full. If the disk space is greater than 10 GB, then the warning threshold is 80% full. 
* Fail: 90% of disk space is full.

---
<h2><a id="topic3">External monitoring for a Rails app</a></h2>

Monitoring your site’s uptime is an important for keeping your site online and your visitors happy.

### Install the FitterHappier plugin

[[FitterHappier|http://github.com/atmos/fitter_happier/tree/master]] is a Rails plugin that provides actions for monitoring site and/or database availability. FitterHappier’s monitoring controller disables unnecessary Rails features, like sessions, layouts, and logging, for lightning-fast monitoring URIs.

To install FitterHappier, run the following commands from the project root of your Rails application:

    cd vendor/plugins
    git clone git://github.com/atmos/fitter_happier.git

For assurance, fire-up your application on your development machine and test the following URIs:

    curl localhost:3000/fitter_happier
    FitterHappier Site Check Passed
    
    curl localhost:3000/fitter_happier/site_check
    FitterHappier Site Check Passed @ Wed, 17 Dec 2008 14:27:47 -0800
    
    curl localhost:3000/fitter_happier/site_and_database_check
    FitterHappier Site and Database Check Passed @ Wed, 17 Dec 2008 14:27:57 -0800
    Schema Version: 20081217141904

### Update your production environment

Once successfully installed, commit the plugin to your application’s repository and deploy.  Ensure deployment was successful by testing the same URIs from above.

### Adding the URL to AppCloud

You can monitor one URL with Engine Yard AppCloud.  We'd suggest the `site_and_database_check` for optimal coverage.

  - Start at the Dashboard for Engine Yard AppCloud.
  - For your environment, click on the **Monitored URL** tab.
  - Fill out the "URL to monitor" field and click the **Add URL** button.

For example: 

    http://yoursite.com/fitter_happier/site_and_database_check

If the URL returns a 200 OK HTTP response, you'll get an email confirming your site is up.  Now if the site goes down, or doesn't respond quickly, you'll be alerted via email!

The email is the account owner of the EY AppCloud account.

  [1]: #topic1        "topic1"
  [2]: #topic2        "topic2"
  [3]: #topic3        "topic3"