# Cloud updates September 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update17><h2 id="update17">Major:JRuby is now generally available in Engine Yard Cloud</h2></a>

September 28th, 2011

JRuby is ideal for those who want to use Ruby and Rails and have existing libraries written in Java. JRuby also offers some efficiency and performance improvements over Ruby.

For more information, see [[Using JRuby on Engine Yard Cloud|deploy-jruby]] and [[the Engine Yard blog|http://www.engineyard.com/blog/2011/jruby-ga-on-an-engine-yard-cloud-near-you/]].

<a href=#update16><h2 id="update16">Fix: "Server not available" errors with force_ssl</h2></a>

September 22nd, 2011

In some cases, Engine Yard Cloud applications on Passenger 3 with config.force_ssl=true were sending redirects that erroneously specified a port number. This resulted in "Server not available" errors. This problem is now fixed.

<a href=#update15><h2 id="update15">**Major:** MySQL 5.1 and 5.5 are now available with Alpha support</h2></a>

September 22nd, 2011

MySQL 5.1 and 5.5 are available in Engine Yard Cloud with Alpha support. ([[Sign up|signup-mysql]] to participate in the program.)
MySQL 5.1 and 5.5 bring substantial feature and performance improvements over MySQL 5.0.

For more information, see [[Using MySQL 5.1 or MySQL 5.5 with Engine Yard Cloud|database-mysql-upgrade]].

<a href=#update14><h2 id="update14">Fix: GitHub/Engine Yard account linking (Beta) more robust</h2></a>

September 21st, 2011

Fixed an issue where GitHub/Engine Yard account linking did not work for multiple repositories. (The GitHub Repository URI field appeared blank.) 

For information about GitHub/Engine Yard account linking (Beta) , see [[Linking a GitHub account to Engine Yard Cloud|linking-github-to-cloud]].

<a href=#update13><h2 id="update13">Fix: Large PostgreSQL instances start</h2></a>

September 19th, 2011

PostgreSQL instances that are configured to use more than 8 GB of memory now start because SHMALL is set correctly.

<a href=#update12><h2 id="update12">Minor: eix no longer rebuilds its database for every Chef run </h2></a>

September 19th, 2011

Because eix no longer rebuilds its database for every Chef run, you might notice that Chef runs are shorter.

<a href=#update11><h2 id="update11">Fix: Multiple accounts during signup</h2></a>

September 14th, 2011

Fixed an issue where clicking reload or submit could accidentally create multiple accounts when signing up for a single account.

<a href=#update10><h2 id="update10">Minor: Node.js pre-installed under /opt/node</h2></a>

September 14th, 2011

Node.js is now installed by default under /opt/node. This change makes asset complication faster.

<a href=#update9><h2 id="update9">Fix: LANG=C</h2></a>

September 14th, 2011

The unix environment variable LANG is now set to C by default. Previously, LANG was unspecified by default. This fix resolves some gem installation problems.

<a href=#update8><h2 id="update8">Minor: Nginx retrieving assets</h2></a>

September 14th, 2011

Nginx now supports retrieving assets from the local file system (the `assets` directory and the `last_assets` directory) or upstream from Passenger or Unicorn. This change is in preparation for full Rails 3.1 support.

<a href=#update7><h2 id="update7">Fix: Access log file rotation</h2></a>

September 12th, 2011

Fixed a problem where, under certain conditions, access log files fail to rotate, resulting in excessively large files.

<a href=#update6><h2 id="update6"> Minor: Upgrades for JRuby and Ruby  </h2></a>

September 12th, 2011

* JRuby was upgraded to 1.6.4.

* Ruby 1.9.2 was upgraded to patch 290.

<a href=#update5><h2 id="update5">Fix: MySQL open files limit increased </h2></a>

September 12th, 2011

This fix sets the MySQL open files limit to 65535. This allows more simultaneous connections to the database. (If connections were being denied by the low open file limit, this fix might result in increased database usage.)

<a href=#update4><h2 id="update4"> Fix: collectd has been updated to use rrdtool 1.4.5</h2></a>

September 12th, 2011

This upgrade fixes problems with Dashboard graphs, false low memory alerts, and elevated memory usage and rogue processes for collectd. After upgrading, you might notice that the font for the Dashboard graphs has changed.


<a href=#update3><h2 id="update3"> Minor: The Deploy user can create and load SQL stored procedures</h2></a>

September 7th, 2011

Added log-bin-trust-function-creators to allow deploy users to create and upload SQL stored procedures. After this upgrade, you no longer have to add the Super privilege for the deploy user to create and load SQL stored procedures.
    

<a href=#update2><h2 id="update2"> Minor: NTP is multi-region aware</h2></a>

September 1st, 2011

NTP (network time protocol) is now multi-region aware; it will use an NTP server local to your region.  


<a href=#update1><h2 id="update1"> Minor: The nbproc parameter removed from HAProxy </h2></a>

September 1st, 2011

HAProxy configuration was modified to remove the nbproc parameter. Use of nbproc is not best practice. It can cause restart problems and the HAProxy stats url to show only the stats for the worker in question (not for all). 




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
