# Troubleshooting your deployment

Here are some things to check when troubleshooting your deployment because it failed or is not working as expected.

Topics on this page:

* [View the deployment log file][1] 
* [500 errors after deploying and the deployment log shows "Please install the mysql2 adapter" error][2]
* [Rails 3.1 application not displaying correctly in the staging environment][3]
* [Application fails to deploy and the deployment log shows "Malformed or pre bundler-1.0.0 Gemfile.lock"][4]


<h2 id="topic1"> View the deployment log file</h2>

If there is a problem deploying your application, the best place to look initially is the deployment log file. There are two ways to locate and view your logfile:

* ### On your Dashboard
  Your Dashboard displays a View Log link next to the deployment status message. Click this link to open the log file in a separate browser window for viewing.

* ### On your instances
  View your log file by connecting to your instances via SSH. After you are 
  connected to your instance, you can locate the log file in your home directory 
  with a filename like the following: `yourapp-deploy.log`, where 'yourapp' is the 
  name of your application deployed on this instance.

You can view the log using the unix commands `cat`, `more` or `less`.

<h2 id="topic2">  500 errors after deploying and the deployment log shows "Please install the mysql2 adapter" error</h2>

If you see the "Please install the mysql2 adapter" error in the deployment log file, follow these instructions to resolve it: [[500 errors after deploying / "Please install the mysql2 adapter" error|issue-mysql2-adapter]]. 

<h2 id="topic3"> Rails 3.1 application not displaying correctly in the staging environment </h2>

If you deploy to your Rails 3.1 application staging environment and your application looks like it has no CSS applied or is using the wrong JavaScript files (even though you _are_ precompiling assets), then try setting config.assets.digest to true as described [[here|asset-pipeline#staging]].

<h2 id="topic4"> Application fails to deploy with this message: "Malformed or pre bundler-1.0.0 Gemfile.lock "</h2>

If you are using Bundler 0.9, upgrade to Bundler 1.0 or later. See [[Action Req'd: Bundler 0.9 is being deprecated on October 3rd 2011|appcloud-updates-october-2011#update1]].

[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4		    "topic4"
