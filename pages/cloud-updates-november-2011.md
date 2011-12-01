# Engine Yard Cloud updates November 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 


<a href=#update12><h2 id="update12">Minor: JRuby is compatible with Ruby 1.9.2</h2></a>

November 29th, 2011

Now, when you create an environment for a JRuby runtime, you can select JRuby that is compatible with Ruby 1.9.2.

![JRuby for Ruby 1.9.2 pulldown](images/jruby4192.png)  


<a href=#update11><h2 id="update11"><b>Major:</b> High availability for clustered environment now in Alpha</h2></a>

November 28th, 2011

With high availability, when you create an environment, Engine Yard Cloud automatically deploys your instances across different availability zones in an Amazon Web Services region.  Engine Yard balances the instances and ensures that master and slave instances are in separate zones.

For more information, see [[High availability for clustered environments|environment-high-availability]]. To try out high availability, sign up [[here|signup-high-availability]]. 

<a href=#update12><h2 id="update12">Fix: engineyard gem update</h2></a>

November 26th, 2011

Fixed an issue where the deploy process reinstalled all gems on deploy. This caused short spans of downtime on every deploy.

If you deploy from the Engine Yard CLI using an engineyard gem versioned between 1.4.5 and 1.4.8 (inclusive), we strongly recommend that you upgrade the gem. (The engineyard gem 1.4.4 and below does not have this issue, but upgrading the gem is still recommended.)

<a href=#update10><h2 id="update10"><b>Major:</b> Engine Yard supports New Relic Server Monitoring</h2></a>

November 22, 2011

[[New Relic Server Monitoring|http://newrelic.com/features/server-monitoring]] is now available.

###To take advantage of Server Monitoring with New Relic

1. Upgrade your Engine Yard Cloud environment.

2. If you have not already, sign up for a New Relic account and configure your application for New Relic monitoring. For information, see [[Monitor applications with New Relic on Engine Yard Cloud|monitoring-new-relic]].

3. Review information about your Engine Yard server instances in the Servers tab in New Relic.

    ![New Relic Servers tab](images/new_relic_servers_tab.png)   

<a href=#update9><h2 id="update9">Minor: Redis 2.4.2 upgrade</h2></a>

November 22, 2011

Upgrade to Redis 2.4.2 from Redis 2.2.11. For more information, see the [[Redis 2.4 release notes|https://raw.github.com/antirez/redis/2.4/00-RELEASENOTES]].

To take advantage of this upgrade, upgrade your environment and restart your database.
 
<a href=#update8><h2 id="update8"><b>Fix:</b> Assorted fixes for the Engine Yard stack</h2></a>

November 22, 2011

* Fixed an issue where, under certain conditions, Mongrel, Unicorn, Passenger 2, and Passenger 3 did not serve assets under HTTPS.

* Fixed an issue where Passenger 2, Passenger 3, and Trinidad restarted nginx unnecessarily.

* Fixed an issue where only privileged users could customize HAproxy web server error pages. Now, all users can customize the HTTP files in /etc/haproxy/errorfiles. For more information, see [Minor: Assorted improvements to the Engine Yard Stack][4].

These fixes are applied when you upgrade your environment.


<a href=#update7><h2 id="update7"><b>Major:</b> Engine Yard announces Engine Yard Labs program and Node.js</h2></a>

November 16, 2011

Engine Yard Labs features are experimental features that Engine Yard makes available to developers. Some Labs features might later be incorporated into our product; some might remain as Labs features; and some Labs features might even be tested out and then deprecated.

Node.js is the first Labs feature. 

To try deploying Node.js applications on Engine Yard Cloud, sign up for the Node.js Labs feature [[here|signup-node]]. For information about how to run Node.js applications on Engine Yard Cloud and some example node.js applications, see [[Deploying Node.js applications on Engine Yard Cloud|deploy-node]].

Node.js lets you run JavaScript code in the backend, server-side--not just in a browser. To execute JavaScript in the backend, it needs to be interpreted and executed. This is what Node.js does: it interprets and executes JavaScript; it is a runtime environment and a library.


<a href=#update6><h2 id="update6">Minor: Snapshot messages are now removed from the Environment page</h2></a>

November 15th, 2011

Snapshot status messages are no longer displayed forever on the Environment page. The messages are now removed after 10 minutes.

![Example of a snapshot status message](images/snapshot_status_message.png)

<a href=#update5><h2 id="update5">Minor: Ruby 1.9.2 supports Psych</h2></a>

November 15th, 2011

Ruby 1.9.2 now supports the Psych YAML parser and emitter. Psych can be used as an alternative to the Ruby standard library Syck. 

<a href=#update4><h2 id="update4">Minor: Assorted improvements to the Engine Yard Stack</h2></a>

November 11th, 2011

* Security enhancement: date stamp appended to the command in the shell history. 
 
* Slave database setup modified to prevent problems with replication setup.

* In clustered environments, HAproxy web server error pages can now be customized via HTTP files in /etc/haproxy/errorfiles. This does not include 404 errors or (already customized) 500 errors.

* Increase the maximum length for a connection request queue in Passenger 3 to reduce likelihood of Passenger workers disconnecting from Nginx (and still using resources).

<a href=#update3><h2 id="update3">Minor: Engine Yard product renaming complete</h2></a>

November 2nd, 2011

Engine Yard Cloud is the new name for Engine Yard AppCloud. Engine Yard Managed is the new name for Engine Yard xCloud.

We have completed the renaming. You now see "Engine Yard Cloud" and "Engine Yard Managed" on our product and website ([[www.engineyard.com|http://www.engineyard.com]]) and in our docs ([[docs.engineyard.com|http://docs.engineyard.com]]) and promotional material.

<a href=#update2><h2 id="update2">Minor: Faster MySQL database backups</h2></a>

November 2nd, 2011

To speed up MySQL database backups, the max_allowed_packet size has been increased to 128M.

This change is applied when you upgrade your environment.

<a href=#update1><h2 id="update1">Minor: Debugging script for the Trinidad application server</h2></a>

November 2nd, 2011

For Trinidad, there is now a debugging script to dump information about the Trinidad application server. 
If the Trinidad application server CPU utilization is above 100% for more than 2 minutes, this debugging script is run automatically.

This change is applied when you upgrade your environment.




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

