# Engine Yard Cloud updates February 2012

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update7><h2 id="update7">Minor: Engine Yard stack upgrade</h2></a>

February 24th, 2012

The following changes have been made to the Engine Yard stack:

* For Rails 3 applications that use MySQL, database-adapter detection has been improved to prevent deployment errors related to the database gem.  
* Upgraded JRuby to 1.6.7 from 1.6.6.  
* Fixed a problem related to the PostgreSQL server restarting after configuration changes; the PostgreSQL server now *reloads* after configuration changes.

These changes are applied when you upgrade your environment.

<a href=#update6><h2 id="update6">Minor: Engine Yard stack upgrade</h2></a>

February 15th, 2012

The following changes have been made to the Engine Yard stack:

* An enhancement has been made to the eybackup tool for PostgreSQL 9.1. (An error message displays if you try to restore a database that has active connections.)  
* Fixed an issue where new environments failed to deploy with PostgreSQL 9.1 if backups were disabled.  
* Fixed the problem of unintentional Sphinx upgrades after MySQL upgrade to 5.1 or 5.5.</li>
	
These changes are applied when you upgrade your environment.

<a href=#update5><h2 id="update5">Minor: Layout changes on the Dashboard</h2></a>

February 14th, 2012

Three layout changes have been made to the Engine Yard Cloud Dashboard:  

1. Server Tools are now on a drop-down menu.  
2. Quick links to Support and Documentation have been added.
3. Alerts and notifications now appear on the right (not at the top).

For more information, see [[Visual Enhancements to the Dashboard|http://www.engineyard.com/blog/2012/visual-enhancements-to-the-dashboard/]].

<a href=#update4><h2 id="update4">Fixes: Engine Yard stack upgrade</h2></a>

February 10th, 2012

The following fixes have been made to the Engine Yard stack:

* A problem with HAProxy configuration in very large (more than 50 application instances) environments.
* Two minor changes to SSL behavior (stunnel) in order to improve performance.

These fixes are applied when you upgrade your environment.

<a href=#update3><h2 id="update3">Minor: JRuby upgrade</h2></a>

February 7th, 2012

Upgraded JRuby to 1.6.6 from 1.6.5.  This upgrades RubyGems to 1.8.15 from 1.8.9. 

<a href=#update1><h2 id="update1">Major: PostgreSQL 9.1 is now available with Beta support</h2></a>

February 2nd, 2012

PostgreSQL offers stability, robustness, and an attractive feature set. 

PostgreSQL 9.1 offers some exciting new features over the 9.0 feature set. For more information about these features, see [[PostgreSQL 9.1 is now in Beta|http://www.engineyard.com/blog/2012/postgresql-9-1-is-now-in-beta/]]. 

For information about upgrading getting started with or upgrading to PostgreSQL 9.1 on Engine Yard Cloud, see [[Using PostgreSQL 9.1 with Engine Yard Cloud|using-postgresql-9-with-cloud]].


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