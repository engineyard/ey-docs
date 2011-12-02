# Engine Yard Cloud updates December 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update2><h2 id="update2"><b>Major:</b> Database slave instances can be sized differently from the database master instances</h2></a>

December 2nd, 2011

Now, when you create a custom cluster or add a database slave to an existing cluster, the database slave instance can be larger or smaller than the master database instance.

![Environment page showing both a large and a small db instance](images/largeandsmalldbs.png)

**Scenario 1: A smaller database slave instance.** You use the database slave only for replication. Save money by using a database slave instance that is less powerful than the master database instance. 

**Scenario 2: A larger database slave instance.** Your database master instance gets an average amount of traffic, but your reporting software puts a lot of load on your database slave instance. Make your reporting more robust with a more powerful database slave instance.


<!--To take full advantage of this new feature, upgrade your environment. See [[Add a database slave to an existing environment|database-environment#topic3]] -->

<a href=#update1><h2 id="update1">Minor: New Early Access Features page</h2></a>

December 1st, 2011

Getting access to Alpha features and Engine Yard Labs features is now faster and easier. If you have a full Engine Yard account, you can get instant access to Early Access features from your Account Settings page.

<b>To access Alpha and Engine Yard Labs features</b>

1. Navigate to Accounts > Account Settings.
2. If you have multiple accounts, click an account name.
2. Click Manage Early Access Features (under Services at the bottom of the page).
    ![The Manage Early Access button](images/manage_early_access.png)
3. Enable the Early Access features that you want to try.

**Note:** Trial account users must use the signup pages at [[Engine Yard Early Access and Labs|beta-intro]]. Full account users can also use the signup pages.

<!--For more information, see [the blog about this new feature]. -->

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