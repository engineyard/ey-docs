# Monitor applications with New Relic on Engine Yard Cloud

[New Relic](http://newrelic.com/) is a tool for monitoring real-time web application performance -- from the end-user experience down to a line of application code. 

You get real data about your users. For example, you can see what countries your 
users are in, what browsers they use, how long they wait for pages to download. You 
also get trending data; is your application faster or slower this week than last 
week? When problems occur, you can get a transaction response performance breakdown 
and view a detailed timeline of an individual request.    

**Note:** New Relic Standard is free for Engine Yard accounts.

### Steps to setup New Relic:

1. [Choose a New Relic plan] [1]
2. [Configure your application for monitoring] [2]
3. [View New Relic performance data for your application] [3]

<h2 id="topic1"> Choose a New Relic plan</h2>

The first task in setting up New Relic is to choose the plan you want. The 
Standard plan is free with your Engine Yard account. But, you might decide 
that the Professional plan better suits you needs. 

### To choose a New Relic plan

  1. Login to your account.
  2. Click Account > Account Settings on the toolbar.
  3. Click your account name.

  4. Click Manage your New Relic plan under the Services section.

      ![New Relic logo under Services](images/new_relic_logo.png)

  5. Choose the Standard plan or the Professional plan.
  6. Read and agree to the New Relic Terms of Service and select the check box. 
  7. Click Activate New Relic to activate your plan.

Your New Relic account is created automatically using your Engine Yard account and password. 

If you selected the Professional plan, the New Relic charge appears on your Engine Yard Cloud 
account bill. You do not get a separate bill from New Relic.

<h2 id="topic2"> Configure your application for monitoring</h2>

In order to monitor your application with New Relic, you add the New Relic gem to the environment and enable New Relic monitoring for the application.

<h3 id="topicC"> To configure your environment and application for New Relic monitoring</h3>

1. Do one of the following to add the newrelic_rpm gem:  
    * For Rails 3 and installations using bundler, add the gem to your Gemfile.
    * For Rails 2.0 and Rails 2.1 to 2.3 without bundler, edit your environment.rb file.  

    For details about installing the gem, see the [[New Relic documentation.|http://newrelic.com/docs/ruby/ruby-agent-installation]]  
1. In Engine Yard Cloud, click Dashboard.
2. Click the application name that needs monitoring.
3. Click the pencil icon to edit this application.
4. Select Enable New Relic Monitoring at the bottom of this page.  
    ![Enable New Relic Monitoring check box](images/enable_new_relic_monitoring.png)
4. Click Update Application to enable New Relic monitoring.


<h2 id="topic3"> View New Relic performance data for your application</h2>

After an environment has been configured and updated with New Relic support, you can
access your New Relic account directly from Engine Yard Cloud to view monitoring details about 
your application.

### To view New Relic data for your application

1. Login to your account.
2. Click Account > Account Settings on the toolbar.
3. Click the account name.
4. Click Access your app metrics under the Services section.

    ![New Relic logo under Services now activated](images/new_relic_logo_activated.png)

5. Click the link to login and view your performance data.

    This links to New Relic website where you can review your data.  
    **Tip:** Bookmark this New Relic page.  


  [1]: #topic1        "topic1"
  [2]: #topic2        "topic2"
  [3]: #topic3        "topic3"
  [A]: #topicA        "topicA"	
  [B]: #topicB        "topicB"
  [C]: #topicC        "topicC"