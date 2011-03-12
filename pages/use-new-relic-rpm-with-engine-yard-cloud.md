# How to Use New Relic RPM with Engine Yard AppCloud

**NOTE: Engine Yard AppCloud customers can now use [[Bronze RPM for Free|http://www.newrelic.com/press-release-20110118.html]]!**

In order to use the New Relic RPM agent with Engine Yard AppCloud you'll need to follow these steps.

## Choose a Plan

  - In the top menu, click on **Account**.
  
![Figure 1](services-1.jpg)
  
  - Under the Services section then click on the **New Relic** logo.
  - On this page there are links for [[RPM's capabilities|http://www.newrelic.com/features.html]] based on the [[subscription level|http://www.newrelic.com/get-RPM.html]].
  
![Figure 2](choose_a_plan.jpg)
    
  - Once you've read and agreed to the New Relic Terms of Service, click the **check box** and click the **Choose** button to activate the plan right for you.

Your New Relic account is created automatically and you are billed all in one place: your Engine Yard AppCloud account.

## Configure your Application

There are two parts to configuring your application.  

  * You need to install a gem and add a configuration line to your `environment.rb` file.  
  * You also need to make a change in the Engine Yard AppCloud UI to let us know you've got everything setup.

### Install the Gem

  - Click on the **Dashboard** link.
  - Then click on the **Applications** tab for the environment you will monitor with New Relic.
  - Click on the **red ruby icon** to edit your gems.
  - Search for the `newrelic_rpm` gem, then add it to your **Selected Gems**.

### Add the Gem to your `environment.rb` File
  
For Rails versions 2.1 and above, edit `environment.rb` and add to the initializer block:

    config.gem "newrelic_rpm"

For Rails versions 2.0.*, edit `environment.rb` and add this statement after the initializer block:

    require "newrelic_rpm"
  
If you're running a rails app older than 2.0 you'll need to use the plugin and [[follow New Relic's guide|http://support.newrelic.com/faqs/docs/ruby-agent-installation]].

If you are using bundler you can just add the `newrelic_rpm` gem to your Gemfile and it should work fine. It will work with Rails 3.x and Rails 2.3.x.

### Enable your Application
  - Under *Server Tools* on the left, click on the **Application** link.
  - The pencil is your **edit**  link to change your application's settings.
  - At the bottom of this page, check the box to **Enable New Relic Monitoring**.

## Deploy your Application

In order for New Relic to begin gathering data you need to deploy your application.

## View New Relic Information

  - Click on your **Account**, then the **New Relic** logo.
  - On the page there is a link that says: **Click here to login and view your performance data.**  It will take you to the New Relic site to review your information.