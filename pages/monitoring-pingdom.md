# Monitoring with Pingdom

## Why Pingdom

Pingdom is a great external tool for monitoring your app’s up-time. Pingdom can provide you with phone and email alerts if your site goes down as well as graphs of your response time. They offer both free a paid accounts, so you can try their service before you buy it.

## Getting started 

To get started head over to pingdom.com and setup an account.

Although you could check the uptime of your homepage, it is generally not a good idea for a few reasons. Firstly, your homepage may have external dependencies which will make loading the page take longer and not accurately reflect your site's response time. Moreover, if one of these dependencies goes down it may bring your homepage down even if the rest of your app is still functioning correctly. Also, pinging your homepage creates more load on an already heavily trafficked part of your app. The better practice is to ping a less commonly visited page or use a tool like fitterhappier to create a page just for tracking uptime. 


## Install the FitterHappier plugin

[[FitterHappier|http://github.com/atmos/fitter_happier]] is a Rails plugin that provides actions for monitoring site and/or database availability. FitterHappiers monitoring controller disables unnecessary Rails features, like sessions, layouts, and logging, for lightning-fast monitoring URIs.

### Installation

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


## Update your environment

Once FitterHappier has been successfully installed, commit the changes to your git repository 
and redeploy your application. Ensure deployment was successful by testing the same URIs from above.

