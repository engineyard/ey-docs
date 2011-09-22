# Troubleshooting your deployment

Here's a list of things to look for when you need to troubleshoot your deployment because it has failed or is not working as expected.


## Deployment log file

If there is a problem deploying your application, the best place to look initially is the deployment log file. There are two ways to locate and view your logfile:

* ### On your dashboard
  Your dashboard displays a View Log link next to the deployment status message. Click this link to open the log file in a separate browser window for viewing.

* ### On your instances
  View your log file by connecting to your instances via SSH. After you are 
  connected to your instance, you can locate the log file in your home directory 
  with a filename like the following: `yourapp-deploy.log`, where 'yourapp' is the 
  name of your application deployed on this instance.

You can view the log using the UNIX commands `cat`, `more` or `less`.

##  "Please install the mysql2 adapter" error

If you see the "Please install the mysql2 adapter" error in the deployment log file, follow these instructions to resolve it: [[500 errors after deploying / "Please install the mysql2 adapter" error|issue-mysql2-adapter]]. 