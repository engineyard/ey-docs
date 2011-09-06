# AppCloud updates September 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 


<a href=#update3><h2 id="update3"> Fix: Multiple accounts during trial signup</h2></a>

September 2nd, 2011

Fixed an issue where clicking reload or submit could accidentally create multiple accounts when signing up for a single trial account.
  

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