# AppCloud updates June 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 



<a href=#update16><h2 id="update16"> **Major:** Passenger 3 is now available with Beta support</h2></a>

June 29th, 2011

Phusion Passenger 3 is available with Beta support in AppCloud. (No sign-up required.)

Passenger 3 brings substantial performance improvements over Passenger 2.



<a href=#update15><h2 id="update15"> Minor: The new Basic Cluster environment is now three medium servers </h2></a>

June 29th, 2011

For new environments, the default configuration is now a Basic Cluster of:  

* 2 medium application servers  
* 1 medium database server  

Previously, the default environment was the Single Server configuration, and the Basic Cluster had only one application server (and one database server).



<a href=#update14><h2 id="update14"> Fix: Changing the domain name for an environment </h2></a>

June 28th, 2011

Fixed an issue where changes to the Domain Name field were not saved. Domain names can now be changed in the Edit the Environment page.



<a href=#update13><h2 id="update13"> Minor: A link to a sample application in GitHub is provided on the New Application page </h2></a>

June 24th, 2011

If you are new to AppCloud, test our sample repository and get the ToDo application up and running in your Engine Yard account. 

Click Try our sample... to populate the Git Repository URI with the source code for the ToDo application.

![Try our sample ToDo application](images/github_sample_repo.png)



<a href=#update12><h2 id="update12"> Minor: Improved alert for out-of-date stacks </h2></a>

June 24th, 2011

When your Engine Yard stack is not the most current, you see this message under the environment name. 

![Stack update notice](images/stack_update_notice.png)

Click !Update to update the stack. The message persists until the instance is running again and you refresh the browser page. 




<a href=#update11><h2 id="update11"> Minor: The Dashboard is now application-centric </h2></a>

June 21st, 2011

The Dashboard has moved from an *environment*-centric user interface to an *application*-centric user interface. For more information about this change, see [[We're Getting Application-centric!|http://www.engineyard.com/blog/2011/were-getting-application-centric/]]



<a href=#update10><h2 id="update10"> Minor: The default DB volume size is now 15GB </h2></a>

June 16th, 2011

The default size of the database volume has increased from 5GB to 15GB.



<a href=#update9><h2 id="update9"> Minor: Mongrel is deprecated for new environments  </h2></a>

June 16th, 2011

This does not affect environments currently running Mongrel. 

If you need to create a new environment where Mongrel is the application server stack, please file a ticket with [[Engine Yard Support|http://support.cloud.engineyard.com]].



<a href=#update8><h2 id="update8"> Fix: Automatic snapshot size </h2></a>

June 8th, 2011

Fixed an issue where the snapshot-size text field was not automatically updated when a specific snapshot was selected.



<a href=#update7><h2 id="update7"> Fix: Environment update notification </h2></a>

June 8th, 2011

Fixed an issue where some environments were not marked as needing an update.



<a href=#update6><h2 id="update6"> Fix: Rubygems 1.5.2 </h2></a>

June 3rd, 2011

Patched a bug fix from June 1st that was causing problems.



<a href=#update5><h2 id="update5"> **Major:** High memory XL VM's available </h2></a>

June 3rd, 2011

You can now create high memory extra-large VM's in your environment:

* High memory XL (64 bit)

* 6.5 ECU, 17.1GB RAM

* 420GB of non-persistent storage

See [[www.engineyard.com/products/appcloud/pricing|http://www.engineyard.com/products/appcloud/pricing]] for pricing.



<a href=#update4><h2 id="update4"> Minor: Environment variables for custom scripts </h2></a>

June 2nd, 2011

If you use custom scripts, your applications now have access to specific stack environment variables. 

You can source /engineyard/bin/env.sh to access these variables: $EY_ENVIRONMENT_NAME, $EY_STACK, $EY_FRAMEWORK_ENV, $RAILS_ENV, $RACK_ENV, and $MERB_ENV.




<a href=#update3><h2 id="update3"> Fix: HAproxy restart from single instance snapshot </h2></a>

June 2nd, 2011

Fixed an issue where HAproxy was failing to restart when creating a cluster from a single instance snapshot.



<a href=#update2><h2 id="update2"> Fix: Rubygems 1.5.2 update</h2></a>

June 2nd, 2011

Upgrading to rubygems 1.5.2 was breaking Rails applications. This issue was fixed by adding version_requirements back into rubygems 1.5.2.






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
