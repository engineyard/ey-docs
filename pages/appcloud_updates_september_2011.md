# AppCloud updates September 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update4><h2 id="update4"> Fix: collectd has been updated to use rrdtool 1.4.5</h2></a>

September 9th, 2011

This upgrade fixes problems with AppCloud dashboard graphs, false low memory alerts, and elevated memory usage for collectd. After upgrading, you might notice that the font for the dashboard graphs has changed.


<a href=#update3><h2 id="update3"> Minor: The Deploy user can create and load SQL stored procedures</h2></a>

September 7th, 2011

Added log-bin-trust-function-creators to allow deploy users to create and upload SQL stored procedures. After this upgrade, you no longer have to add the Super privilege for the deploy user to create and load SQL stored procedures.
    

<a href=#update2><h2 id="update2"> Minor: NTP is multi-region aware</h2></a>

September 1st, 2011

NTP (network time protocol) is now multi-region aware; it will use an NTP server local to your region.  


<a href=#update1><h2 id="update1"> Minor: The nbproc parameter removed from HAProxy </h2></a>

September 1st, 2011

HAProxy configuration was modified to remove the nbproc parameter. Use of nbproc is not best practice. Within in AppCloud, it can cause restart problems and the HAProxy stats url to show only the stats for the worker in question (not for all). 




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