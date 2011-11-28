# Monitoring application uptime

Monitoring your applications uptime is important for keeping your 
application highly available and knowing about application outages when they happen.
Engine Yard Cloud provides the ability to monitor an applications external
urls to determine if your application is accessible.

To enable uptime monitoring for an environment:

1. [[Install the FitterHappier plugin|]]
2. [[Update your environment|]]
3. [[Add the monitored URL to Engine Yard Cloud|]]

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

After FitterHappier has been successfully installed, commit the changes to your git repository 
and redeploy your application. Ensure deployment was successful by testing the same URIs from above.

## Add the monitored URL to Engine Yard Cloud

You can monitor a single URL per environment.  We suggest monitoring the 
URL `http://yoursite.com/fitter_happier/site_and_database_check` for optimal coverage.

### Steps

  1. Login to your Engine Yard account.
  2. Select an environment by clicking the environment name.
  3. In the Environment page, click HTTP Monitoring.
  5. Add the url you wish to monitor in the URL to monitor text field.
  6. Click Add URL.

Engine Yard Cloud pings the URL you provided approximately every 2 minutes.  If the application does not return a
200 OK HTTP response, an alert will be created and an email will be sent to the configured email address.
When the application comes back online, an email will be sent to confirm availability.