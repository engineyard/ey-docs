# Deploy from your Dashboard

You can run a simple code deployment from your master branch, deploy your code and run migrations, or deploy code from another branch in your Git repository.

## Prequisites

* You have created an Engine Yard account.
* You have created an application in your account.
* Your application environment is currently running.


## Deploy your application

After you have completed the prerequisites you are ready to deploy your
application.  You should have new code committed to your Git repository 
that is ready to be deployed.  You have a few simple options when 
deploying your code:

### Deploy code from your master branch

* Click the Deploy button.
   <img src="images/deploy-from-dashboard.png" width="600" alt="Click the deploy button for your application" />
       
### Deploy code with migrations

1. Click Migrate? and enter your migration command.
2. Click Deploy.
   <img src="images/deploy-from-dashboard-migrations.png" width="600" alt="Enter your migration command and click the deploy button for your application" />

### Deploy code from another branch

1. Enter the branch name in the Ref text field.
2. Click Deploy.
  <img src="images/deploy-from-dashboard-branch.png" width="600" alt="Enter your branch name and click the deploy button for your application" />


## Deployment status

During a deployment the Deploy button is disabled and a status message
will be updated reflecting the current progress of your deployment.  There are
two possible outcomes when a deployment has finished:

  * **Successful deployment**. 
    The status message reflects a successful deployment and timestamp.
  * **Failed deployment**. 
    The status message reflects a failed deployment and timestamp.
    Click View Log to get a detailed trace of your 
    deployment and where it has failed.
    
## Other deployment options
The Dashboard provides a nice user interface to manage your deployments,
however sometimes it's easier or more efficient to deploy your application from 
a command line.  Engine Yard has created a command line interface (CLI) for this
purpose.  Read our [[Deploy from the CLI|ey_cli_user_guide]] documentation for more
information.