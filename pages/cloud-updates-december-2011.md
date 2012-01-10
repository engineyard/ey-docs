# Engine Yard Cloud updates December 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update14><h2 id="update14"><b>Major:</b> Ruby 1.9.3 is available with Beta support </h2></a>

December 22nd, 2011

Ruby 1.9.3.p0 is available in Engine Yard Cloud with Beta support.

This is the first stable release of Ruby 1.9.3. 

Ruby 1.9.3 offers faster loading times for Rails 3.x applications. For more information about this release, see [[Ruby 1.9.3 p0 is released|http://www.ruby-lang.org/en/news/2011/10/31/ruby-1-9-3-p0-is-released/]].

<a href=#update12><h2 id="update12">Major: Rubinius 2.0 (1.8) is available with Alpha support</h2></a>

December 22nd, 2011

Rubinius 2.0 (language mode Ruby 1.8) Developer Preview is available in Engine Yard Cloud with Alpha support. (Use the [[Early Access Features page|beta-intro#topic2]] or [[sign up|signup-rubinius]] to participate in the program.)

Rubinius 2.0 offers improved performance, parallelism, and better memory usage. For general information about Rubinius 2, see [[Inside the Rubinius 2.0 Preview Release|http://rubini.us/2011/06/07/inside-rubinius-20-preview/]].

Rubinius 2.0 (language mode Ruby 1.9) is coming soon.

<a href=#update11><h2 id="update11"><b>Major:</b> Engine Yard now supports the AWS regions Oregon and Brazil</h2></a>

December 20th, 2011

You can now choose to locate your Engine Yard environment in any of seven AWS regions. 
The two newest regions are:  

* US West (Oregon), us-west-2
* South America (Sao Paulo), sa-east-1  

For more information, see [[Using multi-region on Engine Yard Cloud|using-multi-region-with-engine-yard-cloud]].

<a href=#update10><h2 id="update10">Minor: Engine Yard stack upgrades</h2></a>

December 19th, 2011

The following upgrades have been made to the Engine Yard stack:  

* HAProxy to 1.4.18
* Rsync to 3.0.9
* Monit to 5.3.1
* Redis to 2.4.4
* Rubinius 2.0.0

These changes are applied when you upgrade your environment.



<a href=#update9><h2 id="update9">Minor: engineyard gem updates</h2></a>

December 14th, 2011

Version 1.4.15 of the engineyard gem contains some minor interface improvements.  

Version 1.4.14 of the engineyard gem contains these enhancements:  

* Deploy logs now show more information for failing deploys.  
* Show the user name of the person who triggers a deploy as deployed_by in deploy hooks. (See [[Using deploy hooks|use-deploy-hooks-with-engine-yard-cloud]].)
* Minor fix for checking the status of applications that have not yet been deployed.


<a href=#update8><h2 id="update8">Fix: An issue with New Relic Server Monitoring</h2></a>

December 8th, 2011

Upgraded New Relic to 1.1.2.124 to fix an issue with Server Monitoring.


<a href=#update3><h2 id="update3">Action Req'd: Amazon EC2 System Updates</h2></a>

December 8th, 2011

Amazon is in the process of applying patches to their systems. To complete the patch process, your instances need to be restarted. 

**Important!** If your instances have not yet been restarted, check your email for details about your environment and visit our [[AWS Reboot FAQs|aws-reboot-faqs]].

Here is some additional information from Amazon:

_We frequently upgrade our EC2 fleet, with many of our patches and upgrades being applied invisibly to customers.  However, some updates require instances to be restarted and we periodically reboot instances in order to apply these updates.  The upgrade we're currently rolling out to a portion of our fleet requires a short reboot of these customer instances.  We recently released our Scheduled Events functionality which allows customers to have greater visibility into when these reboots are happening going forward.    In addition to added visibility, this enables customers to manage reboots on their own schedule if they want to reboot before the scheduled update window.  This data is available for customers to easily see on the AWS management console as well as through the APIs.  Reboots such as these should be infrequent, but may be necessary from time to time to apply upgrades that strengthen our security, reliability and operational performance._

<a href=#update7><h2 id="update7">Fix: engineyard gem update</h2></a>

December 7th, 2011

Version 1.4.13 of the engineyard gem fixes an issue with Gemfiles for private git repositories that use the deploy key.

Previously, in certain cases, accessing private git repositories during bundle install failed when an instance was added that did not have GIT_SSH set correctly. This prevented the addition of new instances to a cluster.

<a href=#update6><h2 id="update6"> Minor: Nginx and Passenger 3 upgrades</h2></a>

December 6th, 2011

* Upgraded Passenger 3 to Passenger 3.0.11.  
* Upgraded Nginx to 1.0.10 except for Passenger 2 environments.

**Note:** You must upgrade your environment to apply these changes.

<a href=#update5><h2 id="update5"> Major: MySQL 5.5 is now available with Beta support</h2></a>

December 6th, 2011

MySQL 5.5 brings substantial feature and performance improvements over MySQL 5.0.

For more information, see [[MySQL 5.5 is in Beta|http://www.engineyard.com/blog/2011/mysql-5-5-is-in-beta]] and [[Using MySQL 5.1 or MySQL 5.5 with Engine Yard Cloud|database-mysql-upgrade]].

<a href=#update4><h2 id="update4"> Major: High availability for clustered environment now generally available</h2></a>

December 6th, 2011

With high availability, when you create an environment, Engine Yard Cloud automatically deploys your instances across different availability zones in an Amazon Web Services region.  Engine Yard balances the instances and ensures that master and slave instances are in separate zones.

You might notice the following changes in the Engine Yard Cloud UI:  

* When you create a new environment, you cannot choose a specific zone within a region; the zone is chosen automatically.  
* You no longer get Amazon out-of-capacity errors.


For more information, see [[High availability for clustered environments|environment-high-availability]].


<a href=#update2><h2 id="update2"><b>Major:</b> Database slave instances can be sized differently from the database master instances</h2></a>

December 2nd, 2011

There are two ways that database slaves can be sized differently:  

* Instance sizing
* /db volume sizing
 

**Instance sizing**

Now, when you create a custom cluster or add a database slave to an existing cluster, the database slave can be a larger or a smaller instance than the master database instance.

![Environment page showing both a large and a small db instance](images/dbinstances.png)

*Scenario 1: A smaller database slave instance.* Your database slave is only for replication. Save money by using a database slave instance that is less powerful than the master database instance. 

*Scenario 2: A larger database slave instance.* Your database master instance gets an average amount of traffic, but your reporting software puts a lot of load on your database slave instance. Make your reporting more robust with a more powerful database slave instance.

**/db volume sizing**

Now, when you add a database slave to an existing cluster, the slave can have a /db volume larger than the master database /db volume. 

*Scenario:* The /db volume on your master database is getting full. Add a database slave with a larger volume and after replication is finished, work with Engine Yard Support to promote the slave to master and decommission the original (smaller) master. 

To take advantage of /db volume resizing, upgrade your environment. For more information, see [[Add a database slave to an existing environment|database-environments#topic3]].

<a href=#update1><h2 id="update1">Minor: New Early Access Features page</h2></a>

December 1st, 2011

Getting access to Alpha features and Engine Yard Labs features is now faster and easier. If you have a full Engine Yard account, you can get instant access to Early Access features from your Account Settings page.

<b>To access Alpha and Engine Yard Labs features</b>

1. Navigate to Accounts > Account Settings.
2. If you have multiple accounts, click an account name.
2. Click Manage Early Access Features (under Services at the bottom of the page).
    ![The Manage Early Access button](images/manage_early_access.png)
3. Enable the Early Access features that you want to try.

**Note:** Trial account users must use the signup pages at [[Engine Yard Early Access and Labs|beta-intro]]. Full account users can also use the signup pages.


[1]: #update1        "update1"
[2]: #update2        "update2"
[3]: #update3        "update3"
[4]: #update4        "update4"
[5]: #update5        "update5"
[6]: #update6        "update6"
[7]: #update7        "update7"
[8]: #update8        "update8"
[9]: #update9        "update9"
[10]: #update10        "update10"
[11]: #update11        "update11"
[12]: #update12        "update12"
[13]: #update13        "update13"
[14]: #update14        "update14"
[15]: #update15        "update15"
[16]: #update16        "update16"
[17]: #update17        "update17"
[18]: #update18        "update18"