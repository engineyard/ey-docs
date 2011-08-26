# Monitoring with Pingdom

Pingdom is a great external tool for monitoring your application uptime. Pingdom can send you phone and email alerts if your site goes down. Pingdom also provides uptime and response time reports.

This page describes how to setup Pingdom to monitor your AppCloud application, using FitterHappier to xxxx.

## What pages should I monitor with Pingdom?
In general, do not monitor your home page. This is because your home page may have external dependencies that make page loading slow and thus not accurately reflect your site response time. Moreover, if one of these dependencies goes down, it brings down your home page even when the rest of your application is still functioning correctly. Also, pinging your homepage creates more load on an already heavily trafficked page.

Better practice is to ping a less commonly visited page or, as described here, to use a tool like the FitterHappier plugin to create a page specifically for tracking uptime. 

##Process

* [Get a Pingdom account.][1]
* [Install the FitterHappier plugin.][2]
* [Update and verify your environment.][3]
* [Add a check to Pingdom.][4]

<h2 id="topic1">Get a Pingdom account</h2>

With Pingdom, you can try before you buy: you can choose for a free trial or a free account, as well as basic and business accounts.

###To get a Pingdom account
1. Navigate to [[www.pingdom.com|http://www.pingdom.com]].
2. Sign up for an account.

<h2 id="topic2"> Install the FitterHappier plugin</h2>

FitterHappier is a Rails plugin that provides actions for monitoring the availability of websites and databases. The FitterHappier monitoring controller disables unnecessary Rails features, such as sessions, layouts, and logging. This allows very fast monitoring of URIs.

For information about the FitterHappier plugin, see [[github.com/atmos/fitter_happier|http://github.com/atmos/fitter_happier]]. 

<h3 id="topic5">To install the FitterHappier plugin</h3>

1. Run the following commands from the project root of your Rails application:

        cd vendor/plugins
        git clone git://github.com/atmos/fitter_happier.git

2. Start your application in development mode and test the following URIs:

        curl localhost:3000/fitter_happier
        FitterHappier Site Check Passed

        curl localhost:3000/fitter_happier/site_check
        FitterHappier Site Check Passed @ Wed, 17 Dec 2008 14:27:47 -0800

        curl localhost:3000/fitter_happier/site_and_database_check
        FitterHappier Site and Database Check Passed @ Wed, 17 Dec 2008 14:27:57 -0800
        Schema Version: 20081217141904


<h2 id="topic3"> Update and verify your environment</h2>

After you install FitterHappier, ________ and deploy. . . 
You will then have a URI testing your application's uptime, .... Is it only uptime or response time and other stuff too? 

### To update and verify your environment
1. Commit the changes to your git repository.   
    Q: What are the changes?
2. Redeploy your application.
3. Verify that the deployment was successful by testing the same URIs as [above][5].  

<h2 id="topic4"> Add a check to Pingdom</h2>

Q: I need to get more info about what a check is. How many checks would I typically add?  Is check the word that Pingdom uses? 

###To add a check 
1. Log into your Pingdom account.
2. Create a new check.
3. Set the resolution.   
    Pinging the URI every 5 minutes is a good default.
4. Enter the URI in the URL/IP field.
5. Select notification method. 


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"	
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"		