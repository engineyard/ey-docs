# Change Your Git Repo Location

## Introduction

Your application is linked to a Git repository that holds your 
current production code.  When you deploy code it will be fetched 
from this repository and deployed to your instances.

If the URL to this repository is missing or invalid, you will not be able 
to deploy your application. Additionally, you will have issues adding instances 
and booting your environment.

## Update your repository url

You can configure many different applications and their corresponding repository URL and framework under Engine Yard Cloud.

  1. In your Engine Yard account, click on the Dashboard link.
  2. On the Dashboard page, click on the application you want to update.
  3. On the Application page, click the pencil icon to edit your application.
  4. On the Application edit page, enter your new Git repository url.
  5. Click the Update Application submit button

## Test your changes first

A simple means to test your new repository url is to try a deploy. If 
you have a production environment that is currently running, you 
can clone this environment and test your updates there before updating
your production environment.

## Check the deploy key

If the repository has been moved to a new account, you will need to ensure that your deploy key is installed for this repository on GitHub. You can find your
deploy key on the application page referenced in step 3 above.


## A note about SVN
Currently Engine Yard Cloud only supports git repositories for deployment.  If you use SVN you can now migrate to Git and continue to use your SVN workflow.  See [GitHub's documentation](http://help.github.com/svn-importing/) for an example, or check the documentation for your repository provider.

If your Repo URL looks like http://svn.mydomain.com/svn/myapp/trunk, then it's most likely SVN and wouldn't deploy as is but could be moved to Git with history with a little work.
