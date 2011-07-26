# Create an environment on AppCloud

**NOTE**: In order to follow this article you must have at least one
application setup within your AppCloud account.

## Create an Environment

  1. Login to your AppCloud account.
  2. Click the **Dashboard** menu item.
  3. Navigate to an application by clicking on the application name.
  4. Click the **Create New Environment** button.
  5. Enter the information necessary for your environment. (See [[Environment options|environment-create#options]] below)
  6. Click the **Create Environment** button.

<h2 id="options"> Environment options</h2>

  * ### Environment Name
    Use underscores to separate words instead of spaces.  Common environment names are: myapp_production, myapp_staging, myapp_testing, myapp_qa, myapp_ci, etc.
  
  * ### Framework Environment
    Select an option to set the RAILS_ENV, MERB_ENV or RACK_ENV for applications in this environment.
  
  * ### Application Server Stack
    Select an application server to serve your Rails or Ruby application in this environment.
    
  * ### Ruby Runtime
    Select a Ruby runtime to run your applications in this environment.
    
  * ### Domain Name
    Set your domain name for this environment.
    
  * ### Availability Zone
    Select an AWS Availability Zone for your environment. The default option is usually fine.
    
  * ### SSH Keys
    Select the ssh keys you want to have installed on instances in this environment.
    
  * ### Backups
    Select the frequency and amount of backups and snapshots you want to keep for this environment.
