# Engine Yard Cloud updates January 2012

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update2><h2 id="update2"><b>Major:</b> Engine Yard stack upgrades</h2></a>

January 6, 2012

Security improvements related to hashing have been made for these Ruby versions:  

* Ruby 1.8.7
* Ruby 1.8.6
* JRuby
* Ruby Enterprise Edition
* Rubinius

In addition, Java has been updated to 1.6u30 to address hashing issues related to CERT-2011-003.

**Important!** If you use any of the above Ruby versions or Java or Trinidad (which relies on Java), Engine Yard strongly recommends that you update your environments. See [[Upgrading an environment|http://docs.engineyard.com/environment-upgrade.html]]. 

**Note:** Ruby 1.9.x is not affected.

For detailed information about the security issue, see:  

* [[Our recent blog post|http://www.google.com/url?q=http%3A%2F%2Fwww.engineyard.com%2Fblog%2F2011%2Fspecial-jruby-release-1-6-5-1%2F&sa=D&sntz=1&usg=AFQjCNGH_0fg-BNab2J4obsHpkclGg_bfw]]
* [[Denial of service attack was found for Ruby's Hash algorithm (CVE-2011-4815)|http://www.ruby-lang.org/en/news/2011/12/28/denial-of-service-attack-was-found-for-rubys-hash-algorithm-cve-2011-4815/]]
* [[Vulnerability Note VU#903934|http://www.kb.cert.org/vuls/id/903934]]  
* [[http://www.nruns.com/_downloads/advisory28122011.pdf|http://www.nruns.com/_downloads/advisory28122011.pdf]]


<a href=#update1><h2 id="update1">Fix: Engine Yard stack upgrades</h2></a>

January 3rd, 2012

The following fixes have been made to the Engine Yard stack:  

* A problem where binary logs were not purged on a database slave with MySQL 5.5  
* A problem where snapshots reported failure even though they succeeded

These fixes are applied when you upgrade your environment.


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