# AppCloud updates August 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update12><h2 id="update12"><b>Major:</b> Stack Change Management</h2></a>

August 29th, 2011

Upgrading environments has changed. The Update button is replaced by two buttons: an Apply button and an Upgrade button.

![The old Update button and the new Apply and Upgrade buttons](images/stack-version-ux.png)

* The **Apply** button appears when you make changes to your environment settings or other settings, such as cron jobs, SSL certificates, or New Relic plan. Click to apply your changes to the environment.  

* The **Upgrade** button appears when a newer version of the Engine Yard stack is available. Click to upgrade your environment to the current Engine Yard version. Before upgrading, review the change list for Engine Yard stack version. For more information, see [[Upgrade an environment|environment-upgrade]].

As always, we recommend:   

* Using the latest version of the Engine Yard stack.  
* Testing in a cloned environment before applying changes or upgrading.

<b>Important!</b> If your stack is very out-of-date, you see this message: "Upgrading will enable Stack Change Management." You will not see the Apply button until after upgrading. Remember, when updating a very out-of-date stack for a production environment, always test in a cloned environment first. 


<a href=#update11><h2 id="update11"> Minor: Force-terminate for instances</h2></a>
	
August 25th, 2011

Occasionally, Amazon cannot shut down an instance when a termination request is made. If this happens, you get a "Termination Failed" message. You can then choose to <b>force</b> the instance to terminate or to <b>retry</b> to terminate the instance normally.

For more information, see [[Termination failed|trouble-termination-failed]].

<a href=#update10><h2 id="update10">Minor: Update to the collectd web interface 
	
August 19th, 2011

Updated the collectd web interface to use a unique password dynamically generated for your environment. Previously, a static password was used.

<a href=#update9><h2 id="update9">Action Req'd</b>: Passenger 2 and Passenger 3 security updates 
	
August 18th, 2011

We patched an availability vulnerability in Passenger 2 and 3. Although, there have been no known attacks targeting this vulnerability, if you use Passenger 2 or 3, **we strongly recommend that you update your environments.**  

Unpatched sites are vulnerable to DDOS attacks. 

<a href=#update8><h2 id="update8">Fix: Production.log permissions were being changed back to root
	
August 18th, 2011

Updated the delayed_job script to fix an issue where it was not running as the deploy user.

<a href=#update7><h2 id="update7"><b>Major</b>: Link your Engine Yard account to a GitHub account to make deploy keys automatic. (Beta support)</h2></a>

August 18th, 2011

No more cutting-and-pasting of deploy keys from AppCloud to GitHub. 

You can choose to link your Engine Yard account to a GitHub account. After linking accounts, when you create an AppCloud application using a GitHub repository, the deploy key is automatically created. 

For more information, see [[Linking an Engine Yard account to a GitHub account|linking-github-to-cloud]].

<a href=#update6><h2 id="update6">Minor: Update and fixes to the AppCloud stack</h2></a>

August 16th, 2011

The following minor update and fixes have been released to the AppCloud stack:  

* Improved deployment for Rails 3 applications.  
* Fix for PostgreSQL Alpha users: now only bad queries are logged; previously, all queries were logged.  
* Fix: ActiveRecord reconnection for Rack and Rails applications.

<a href=#update5><h2 id="update5">Fix: Resque workers failing</h2></a>

August 8th, 2011

Fixed a rake version issue in script/engineyard/bin/resque that caused
Resque workers to fail.

This issue applied only if bundler was used in older AppCloud environments
(or in Engine Yard xCloud environments).

<a href=#update4><h2 id="update4"> Minor: Ruby 1.9.2 is now the default Runtime for new environments</h2></a>

August 4th, 2011

Ruby 1.9.2 has been available in AppCloud for a while. However, until now, Ruby 1.8.7 has been the default Runtime.

For more information, see [[Upgrading to Ruby 1.9|upgrading-to-ruby19]]. 

<a href=#update3><h2 id="update3"> <b>Major:</b> Passenger 3 is now generally available in AppCloud</h2></a>

August 3rd, 2011

Phusion Passenger 3 brings substantial performance improvements over Passenger 2. 
For new environments, Passenger 3 is the default web stack server in AppCloud, replacing Passenger 2 as the default. 

To edit an existing environment to use Passenger 3:

1. Stop the environment.
2. On the environment, click the More Options tab. 
3. Click Edit Environments.
4. Under Web Stack Server, choose Passenger 3.
5. Update and boot the environment.

<a href=#update2><h2 id="update2"> Minor: Context-sensitive help added to UI pages</h2></a>

August 1st, 2011

Context-sensitive help now appears on Application and Environment pages in the UI. 

![Context-sensitive help closed and open](images/help_scnshot.png)



<a href=#update1><h2 id="update1"> Fix: Database exec plugins </h2></a>

August 1st, 2011

Database exec plugins are now correctly configured on database instances (solo, db_slave, db_master). Previously, these were being configured on non-database instances. 




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
