# Tutorial: How to deploy a sample application on a trial account

In this tutorial, you sign up for a trial account and deploy a Ruby application (a web-based to-do list) to the Engine Yard Cloud. 

This tutorial is illustrated in [[Learn to Deploy Rails Apps on Engine Yard in under 3 Mins!|http://vimeo.com/17825326]]

This is the process for deploying the ToDo application:

*  [Sign up for a trial account][1]
*  [Validate and start your trial account][2]
*  [Create and deploy the application][3]
*  [Run the ToDo application][4]

<h2 id="topic1"> Sign up for a trial account </h2>

If you have already signed up for and started your trial account, skip to [Create and deploy the application][3] below.

### To sign up for your trial account
 
1. Navigate to [[login.engineyard.com/signup|http://cloud.engineyard.com/signup]]
2. Enter your name, email address, and a password.
3. Agree to the terms of service and select the check box.
4. Click Create Account.


<h2 id="topic2"> Validate and start your trial account</h2>

After signing up for a trial account, you get an email from Engine Yard. 

In this procedure, you validate and name the account and start your free trial.

### To validate and start your trial account
 
1. Find the email "Welcome to Engine Yard. Please verify your email."   
    This email from Engine Yard (sso@engineyard.com) should appear in your inbox a few minutes after you create your account. 
2. Click on the verification link.  
    This goes to the new accounts page at cloud.engineyard.com.
 
3. Enter a name for your account.

    ![Create your Engine Yard account](images/create_your_account_todo.png)

    The name must be unique and without spaces and punctuation. Hyphens are allowed.

4. Click Start Trial.

    ![Start Trial](images/tutorials/start_trial.png)


<h2 id="topic3"> Create and deploy the application</h2>

The code for the ToDo application that you create in this procedure is in a public repository in GitHub.

### To set the Rails type and create the application

1. If you are not already signed in to your Engine Yard account, log in now to [[cloud.engineyard.com/accounts|https://cloud.engineyard.com/accounts]]

2. In your Engine Yard account page, click Try our sample ToDo application.  
    This populates the Git Repository URI field with the GitHub address for the ToDo application.

    ![Link for the ToDo application](images/try_our_sample.png)

    The Application Name field is auto-populated. Because the ToDo application is a Rails 3 application, do not change the Application Type field. 

4. Click Create Application.

    The _todo_production_ environment for the _todo_ application appears. 

    ![Wait for instance](images/spin_up_todo.png)


<h2 id="topic4"> Run the ToDo application </h2>

In this procedure, you try running the ToDo application that you deployed.

### To run the ToDo application

1. Make sure that the indicator is green.

    It might take 5 minutes or more for the new instance to load and the indicator to turn green.

    ![Green indicator shows that the instance is loaded](images/tutorials/instance_loaded.png)

    **Tip:** Remember that a green indicator means that the _instance_ is loaded -- it does not necessarily mean that the application has deployed successfully. A red indicator means there was a problem configuring the _instance_.

2. Click HTTP.

    ![http_button](images/tutorials/http_button.png)

    The ToDo application is running. 

    ![the todo application](images/todo_application.png)



[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
