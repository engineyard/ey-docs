# AppCloud updates July 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update8><h2 id="update8"> Minor: Improved UI messaging for updates</h2></a>

July 27th, 2011

Instead of "Environment X has changes, click the Update button on the Dashboard to apply them", we now provide additional messaging about what in the environment has changed. 

This is one step towards our goal of transparency in stack updates.


<a href=#update7><h2 id="update7"> Fix: New Relic plan upgrades</h2></a>

July 27th, 2011

Fixed an issue that prevented upgrading New Relic plans from within the Dashboard.

<a href=#update6><h2 id="update6"> **Action Req'd:** Upgrade to Ruby 1.8.7-p352 </h2></a>

July 22nd, 2011

AppCloud has been upgraded to Ruby 1.8.7-p352. 

If you are using Ruby 1.8.7 and Unicorn, you must redeploy after updating.

If you are using Ruby 1.8.7 and Passenger, we recommend that you redeploy after updating. This is to make sure that your code runs under the latest version of the MRI interpreter.


<a href=#update5><h2 id="update5"> **Major:** Improvements to the app-centric UI: more details and easier deploys </h2></a>

July 19th, 2011

In response to user feedback, we made some modifications to our application-centric UI. Some of these modifications are:

*  Expanded views
*  Fewer-click deploys
*  More detailed instance lists
*  Flags to clearly indicate whether an environment is production, staging, or development 


<a href=#update4><h2 id="update4"> **Major:** JRuby is now available in Beta for all customers </h2></a>

July 18th, 2011

JRuby is available with Beta support in AppCloud. (No sign-up required.)

Run production-quality Ruby on Rails applications on AppCloud via [[JRuby|http://jruby.org/]], [[Trinidad|https://github.com/trinidad/trinidad]] and [[Tomcat|http://tomcat.apache.org/]].

For more information, see [[Getting Started with JRuby|jruby-beta]] and [[JRuby on AppCloud available through Beta program|http://www.engineyard.com/blog/2011/jruby-on-appcloud-available-through-beta-program/]].




<a href=#update3><h2 id="update3"> Minor: Increased maximum connections for HAProxy </h2></a>

July 8th, 2011

The maximum number of connections for HAProxy increased to 65,535 from 15,000.



<a href=#update2><h2 id="update2"> Minor: Upgrade to Redis 2.2.11</h2></a>

July 8th, 2011

For more information, see the [[Redis 2.2 release notes|https://github.com/antirez/redis/blob/2.2.11/00-RELEASENOTES]].



<a href=#update1> <h2 id="update1"> Minor: Nginx Upload Progress module upgraded </h2></a>

July 1st, 2011

The nginx_uploadprogress_module was upgraded to address a vulnerability in certain configurations. 

For information, see [[nginx package in Lucid Lynx allows null byte vulnerability|https://bugs.launchpad.net/ubuntu/+source/nginx/+bug/783508]].

