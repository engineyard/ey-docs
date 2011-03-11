# Change Your Repo Location

Your application is linked to a Git repository that holds your current production code.  When you deploy code it will get pulled from this repository onto your slices.  If the URL to this repository is missing or wrong, you will not be able to deploy newer versions and will have issues adding instances and booting environments.

**NOTE:** Please note that **only** Git repositories are supported.  If you use SVN you can now migrate to Git and continue to use your SVN workflow.  See [GitHub's documentation](http://help.github.com/svn-importing/) for an example, or check the documentation for your repository provider.

If your Repo URL looks like http://svn.mydomain.com/svn/myapp/trunk, then it's most likely SVN and wouldn't deploy as is but could be moved to Git with history with a little work.

## Edit an Application

You can configure many different applications and their corresponding repository URL and framework under Engine Yard AppCloud.  Then applications can be used in one or more environment.

![Figure 1](images/repo_update_1.jpg)

  - Under SERVER MANAGEMENT, click on the **Applications** section.

![Figure 2](images/repo_update_2.jpg)
  
  - On the right side, click on the **Edit an Application** link.

![Figure 3](images/repo_update_3.jpg)
  
  - Enter a Git Repository URL.

![Figure 4](images/repo_update_4.jpg)
  
  - Then click the "Update application" button to finish the process.

## Check the Deploy Key

Remember, that if the repository has been moved to a new account, please check that the deploy key is installed.  You can copy it from the **Application** page.

![Figure 5](images/repo_update_5.jpg)
 
## Testing

The simple means to test your changes is to try a deploy.  If you have other production code already running on the site, you can [[clone the environment|clone-an-environment]] and test it there.