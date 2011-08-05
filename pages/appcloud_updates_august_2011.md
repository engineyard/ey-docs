# AppCloud updates August 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update4><h2 id="update4"> Minor: Ruby 1.9.2 is now the default Ruby runtime for new environments</h2></a>

August 4th, 2011

Ruby 1.9.2 has been available in AppCloud for a while. However, until now, Ruby 1.8.7 has been the default Ruby runtime.

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