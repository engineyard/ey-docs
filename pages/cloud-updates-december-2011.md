# Engine Yard Cloud updates December 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update3><h2 id="update3">Coming soon: Amazon EC2 System Update</h2></a>

December 5th, 2011

Amazon is in the process of applying patches to their systems. <b>At this time, no action is required.</b> However, to complete the patch process, your instances will need to be restarted. Amazon and Engine Yard are currently working on a plan to ensure this is as painless as possible. Engine Yard will provide more information on timeframes shortly.  In the meantime, here is some additional information from Amazon:

_We frequently upgrade our EC2 fleet, with many of our patches and upgrades being applied invisibly to customers.  However, some updates require instances to be restarted and we periodically reboot instances in order to apply these updates.  The upgrade we're currently rolling out to a portion of our fleet requires a short reboot of these customer instances.  We recently released our Scheduled Events functionality which allows customers to have greater visibility into when these reboots are happening going forward.    In addition to added visibility, this enables customers to manage reboots on their own schedule if they want to reboot before the scheduled update window.  This data is available for customers to easily see on the AWS management console as well as through the APIs.  Reboots such as these should be infrequent, but may be necessary from time to time to apply upgrades that strengthen our security, reliability and operational performance._

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

<!--For more information, see [the blog about this new feature]. -->

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