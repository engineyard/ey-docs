# Clone an environment

## Introduction

Engine Yard Cloud provides a clone feature that takes an environment and creates a new standalone copy.
When an environment is cloned, *nearly* everything including the volumes that your 
original environment uses are copied, *excluding* any custom files.

An excellent use case for cloning an environment is creating an on-demand 
staging environment from your production application. This relieves the chore 
and cost of maintaining a full-time staging environment and provides the flexibility
of spinning up an environment on-demand within a matter of minutes.



## Create a clone

1. Login to your Engine Yard account.
2. Click the Dashboard menu item.
3. Navigate to the environment you want to clone by clicking on the environment name.
4. Click More Options on the environment tabs.
5. Click Clone Environment.<br />
   You should be redirected to the "Create a clone" page.
6. Enter the information necessary for your cloned environment. (See [[Clone options|environment-clone#options]] below)
7. Click Clone Environment. <br />
   You should be redirected to your new environment clone that is being provisioned.

**Tip:** Remember to shut down this environment when you are finished.


<h2 id="options">Clone options</h2>

* ### Cloned Environment Name
  Use underscores to separate words instead of spaces.  Common environment names are: myapp_staging, myapp_testing, myapp_qa, myapp_ci, etc.

* ### Rails/Rack Environment
  Enter the RAILS_ENV or RACK_ENV environment name. Example: production, development, etc.

* ### Chose IP Address
  Select the IP address you want to use or optionally opt to use a public Amazon hostname.
  
* ### Availability Zone
  Select an AWS Availability Zone for your environment. The default option is usually fine.  

* ### Domain Name
  Enter the domain name to associate with this environment. Leave this blank if using an Amazon hostname.