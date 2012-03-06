# Engine Yard Cloud updates March 2012

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update2><h2 id="update2">Minor: Engine Yard stack upgrade</h2></a>

March 7th, 2012

HAProxy now uses the leastconn load-balancing algorithm by default.

Upgrade your environment to take advantage of this improvement.

<a href=#update1><h2 id="update1">Minor: Engine Yard stack upgrade</h2></a>

March 1st, 2012

The following changes have been made to the Engine Yard stack:

* For Rails 3 applications that use MySQL, database-adapter detection has been improved to prevent deployment errors related to the database gem.  
* Upgraded JRuby to 1.6.7 from 1.6.6.  
* Fixed a problem related to the PostgreSQL server restarting after configuration changes; the PostgreSQL server now *reloads* after configuration changes.

These changes are applied when you upgrade your environment.



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