# Tutorial: How to deploy a sample application on a trial account

In this tutorial, you deploy a Ruby application named Fat Free CRM (Customer Relationship Management) to the Engine Yard Cloud. 

<!--This tutorial is illustrated in [[Learn to Deploy Rails Apps on Engine Yard in under 5 Mins!|http://vimeo.com/17825326]] video. -->

This is the process for deploying the Fat Free CRM application:

*  [Sign up for a trial account][1]
*  [Validate and start your trial account][2]
*  [Get the sample application from GitHub][4]
*  [Create the application][5]
*  [Create a trusted relationship between the GitHub and Engine Yard accounts][6]
*  [Try running the Fat Free CRM application][7]
*  [Add gems][8]
*  [Configure for SSH][9]
*  [Update your environment][10]
*  [Deploy the Fat Free CRM application][11]
*  [Complete the process][12]



<h2 id="topic1"> Sign up for a trial account </h2>

If you have already signed up for and started your trial account, skip to [Get the Fat Free CRM application from GitHub][4] below.

### To sign up for your trial account
 
1. Navigate to [[login.engineyard.com/signup|http://cloud.engineyard.com/signup]]
2. Enter your name, email address, and a password.
3. Agree to the terms of service and select the check box.
4. Click Create Account.


<h2 id="topic2"> Validate and start your a trial account</h2>

After signing up for a trial account, you get an email from Engine Yard. In this procedure, you validate and name the account and start your free trial.

### To validate and start your trial account
 
1. Find the email "Welcome to Engine Yard. Please verify your email." 
    This email from Engine Yard (sso@engineyard.com) should appear in your inbox a few minutes after you create your account. 
2. Click on the verification link.
    This goes to the new accounts page at cloud.engineyard.com.
 
3. Enter a name for your account.

    ![Create your Engine Yard account](images/tutorials/create_your_account_dash.png)

    The name must be unique and without spaces and punctuation. Hyphens are allowed.

4. Click Start Trial.

    ![Start Trial](images/tutorials/start_trial.png)



<h2 id="topic4"> Get the sample application from GitHub </h2>

In this procedure, you download the Fat Free CRM application from GitHub. 

You need a GitHub account for this procedure. If you don't have a GitHub account, sign up for one [[(www.github.com/plans)|http://www.github.com/plans]]. 

In general, you can use any git server with your Engine Yard account. However, in this tutorial, you use GitHub because the Fat Free CRM repository is on GitHub.  

### To get the Fat Free CRM application from GitHub

1. In a new browser window, navigate to [[github.com|http://github.com]].

2. In the search box, enter `crm` 

    ![The GitHub search box](images/tutorials/github_search_box.png) 

    A list of repositories appears.

3. Find and click [[michaeldv / fat_free_crm|https://github.com/michaeldv/fat_free_crm]].

    The fat_free_crm source appears.

4. Click Fork.

    ![The GitHub fork button](images/tutorials/github_fork_button.png)

5. Copy the SSH URL.

    You need to enter this URL in the next procedure. 

    ![The ssh url in gitHub](images/tutorials/ssh_url_github.png)

6. Leave this GitHub page open. 

    You need it again [later][6].


<h2 id="topic5"> Create the application </h2>

Because the readme for Fat Free CRM says that this is a Rails 2.3.8 application; you set the application type to Rails 2. This procedure describes how.

### To set the Rails type and create the application

1. If you are not already signed in to your Engine Yard account, log in now. [[cloud.engineyard.com/accounts|https://cloud.engineyard.com/accounts]]

2. In your Engine Yard account page, paste the URL into the Git Repository URI field.

    ![Paste Git Repository URI](images/tutorials/create_new_application.png)

3. Select Rails 2 as the Application Type.

    ![Select Rails 2](images/tutorials/rails_2.png)

4. Click Create Application.


<h2 id="topic6"> Create a trusted relationship between your GitHub and Engine Yard accounts </h2>

In this procedure, you set a Git deploy key so that you can deploy the Fat Free CRM code from GitHub to your Engine Yard account.  

### To create the trusted relationship between GitHub and Engine Yard

1. Copy the Git Deploy Key from the application.

    ![Git deploy key selected](images/tutorials/git_deploy_key.png)

2. In your GitHub page, click Admin.

    ![The GitHub Admin button](images/tutorials/admin_button_github.png)

3. Click Deploy Keys > Add another deploy key.

4. Enter a title for the key.

5. Paste the key (from step 1) into the Key field.

6. Click Add Key.

7. In your Engine Yard account page, click My Deploy Key is in Place.

    ![My deploy key is in place](images/tutorials/my_deploy_key_is_in_place.png)

    The instance boots and deploys the Fat Free CRM application. This may take 10 minutes or so.


<h2 id="topic7"> Try running the Fat Free CRM application </h2>

In this procedure, you try running the application -- and see what happens when a gem is missing.

### To try running the Fat Free CRM application

1. Make sure that the instance is loaded (that the indicator is green).

    ![Green indicator shows that the instance is loaded](images/tutorials/instance_loaded.png)

    A red indicator means a problem configuring the instance.

2. Click HTTP.

    ![http_button](images/tutorials/http_button.png)

    Expect to see a 404 Not Found error. The application failed to deploy because it is missing the Rails 2.3.8 gem. 


<h2 id="topic8"> Add gems </h2>

In the procedure above, the application failed to deploy because it needed the Rails 2.3.8 gem. This procedure describes how to add the gem.

Because Fat Free CRM doesn't have a Gemfile to manage its gems, you add them manually. If the application used bundler or Rails 3, this procedure would not be needed.
 
### To add gems

1. In your Environments page, click the application name: fat_free_crm.

    ![application name link](images/tutorials/applicationlink.png)

2. Click the Add Rubygems icon. 

    ![add rubygems icon](images/add_ruby_gem.png)

3. Search for the rails gem and add version 2.3.8 to your selected gem list.

    ![Select Rails 2.3.8](images/tutorials/rails_2.3.8.png)

    After adding the gem, message about updating your environment appears. You update the environment in [Update your environment][10] below.

 
<h2 id="topic9">Configure for SSH </h2>

In this procedure, you create an SSH key so that you can log into the instance from the command line. You do this later when you run the rake commands to [complete the Fat Free CRM application][12]. 

### To configure for SSH

1. Open a terminal window.

2. Create the key: `$ ssh-keygen -t rsa` 

3. Accept the default path and use an empty password. 

        Generating public/private rsa key pair.  
        Enter file in which to save the key (/Users/cephalopod/.ssh/id_rsa):  
        Created directory '/Users/cephalopod/.ssh'.   
        Enter passphrase (empty for no passphrase): 
        Enter same passphrase again:   

4. Copy the key: display the file (`cat .ssh/id_rsa.pub`) and copy the contents.

5. In your Engine Yard account page, click SSH Public Keys.

    ![SSH Public Keys under the Server Tools heading](images/tutorials/ssh_public_keys.png)

6. Enter a name for the key.

7. Paste the key (from step 3) into the Public Key field.

8. Click Add Key.


<h2 id="topic10"> Update your environment </h2>

In this procedure, you update your environment for the Rails gem and the SSH key.

### To update your environment

1. In your Engine Yard account page, click Dashboard.

2. Click Please Update.

    ![Please update links to the Environment page.](images/tutorials/please_update.png)

3. On the Environment page, click Update.

	![The exclamation point indicates an update is needed.](images/tutorials/update_button.png)

    

<h2 id="topic11"> Deploy the Fat Free CRM application </h2>

In this procedure, you deploy the Fat Free CRM application and discover that there are more tasks needed to get the application running.

### To deploy and verify deployment of the application

1. In your Engine Yard account page, click Dashboard.

2. Select Migrate to automatically run your db:migrate during deployment.

    ![migrate check box](images/tutorials/migrate_box.png)

3. Click Deploy.

    A message that you successfully deployed HEAD... should appear and you can view the deployment log.

3. Verify deployment:

    a. Click the Environment name.

    ![deploy button](images/tutorials/environment_name_link.png)

    b. Click Visit your application.

    Fat Free CRM should now be running. However, this (somewhat misleading) error message appears. To get the application running correctly you need to run some rake commands, as described [below][12].

    ![Message tells you to run rake commands](images/tutorials/need_to_run_rake.png)

4. Leave this window open; you refresh it in the procedure below.


<h2 id="topic12"> Complete the process </h2>

In this procedure, you:

* Run rake commands to create an admin user and to load some demo data.
* Log into the Fat Free CRM application.


### To run two rake commands and log into Fat Free CRM

1. Click SSH for the Instance.

    ![The SSH link for the Instance](images/tutorials/ssh_in_instances.png)

    A terminal window opens. 

    If this fails, make sure that you have configured your SSH key [above][9].

3. Change to the /data/fat_free_crm/current directory: 

    `$ cd /data/fat_free_crm/current` 

4. Run the rake command to set the application defaults: 

    `$ rake crm:settings:load`

5. Run the rake command to load demo data: 

    `$ rake crm:demo:load`

6. Refresh the Fat Free CRM application.

7. Log in: Enter `Frank` as the username and `frank` as the password.

The Fat Free CRM application is now up and running.

![Refresh Fat Free CRM](images/tutorials/fat_free_crm_loaded.png)


<h2 id="topic13"> What next? </h2>

You can:

* Modify the Fat Free CRM application and redeploy it.

* Delete the Fat Free CRM application and deploy your own Ruby application.


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
[8]: #topic8        "topic8"
[9]: #topic9        "topic9"
[10]: #topic10      "topic10"
[11]: #topic11      "topic11"
[12]: #topic12       "topic12"
[13]: #topic13       "topic13"

