# Troubleshooting your deployment

Here's a list of things to look for when you need to troubleshoot your deployment because it has failed or is not working as expected.


## Deployment log file

If there is a problem deploying your application, the best place to look initially is going to be the deployment log file. There are two ways to locate and view your logfile:

* ### On your dashboard
  Your dashboard will display a View Log hyperlink next to the deployment status message. Clicking on this link will open the log file in a separate browser window for viewing.

* ### On your instances
  View your log file by connecting to your instances via SSH. Once you are 
  connected to your instance, you can locate the log file in your home directory 
  with a filename like the following: `yourapp-deploy.log`, where 'yourapp' is the 
  name of your application deployed on this instance.

You can view the log using the UNIX commands `cat`, `more` or `less`.