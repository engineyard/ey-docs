# Applications

This section outlines how to manage your application on Engine Yard Cloud. 
For information about adding SSL to your application, see [[How to obtain and install SSL certificates for applications|ssl-certificates]].

## Add an Application

You can configure many different applications and their corresponding repository URL and framework under Engine Yard Cloud.

  - In the top right corner, click the Create New Application link.

On the new application page

  - Enter a Git Repository URI.
  - Give your application a name.
  - Choose an Application Type.
  - Then click the "Create application" button to begin the process.

A new screen with the git deploy key for your application will appear.

  - Copy the git deploy key.
  - Paste it to deploy keep section of your GitHub Account.
  - Click My Deploy Key is in Place when ready.

After you've setup the deploy key, you're ready to fine tune your environment. Often the defaults are fine but you should still look over them. 

  * Set your Environment Name 
  * Framework Environment ("production" , "staging", etc.)
  * Application stack
  * Version of Ruby
  * Domain Name 
  * Availability Zone
  * SSH Keys
  * Database
  * How often snapshots are taken

After your have finished configuring your environment, click "Create Environment" 

You are now at the deployment screen for your environment. Here you can select if you wish to run your application on a single server or as a cluster. You can also choose to boot from previous snapshots of your application if they exist.

Finally, select the external address of your application and click "Boot this Configuration"


## Edit an Application

There is more than one way to get to the edit an application screen.

  * The Applications tab under SERVER TOOLS will list your applications.
  * You can then click the name of your application to edit.

Alternatively you can go from the Dashboard.

  * In your environment, under the Applications tab there is an Edit link.

After you're on the Edit Application screen you'll be able to modify the following options.

  * Git Repository URI
  * Application Type
  * Domain Name

Save the settings by clicking Update application button.

NOTE: You can't change your Git Deploy Key, but you can copy it if needed.



## Manage Gems

If you need to configure gems for your application now or anytime, just navigate to the gems page.

  - Under SERVER TOOLS, click Dashboard.
  - Click the name of your application.
  - Then click the Add RubyGems icon, in the upper right.


### Search for a Gem


  * Type in a search string for your package. For example "will_paginate" for Mislav Marohnić's [[will_paginate|http://wiki.github.com/mislav/will_paginate]] gem.

Results returned under the heading "Available Gems" can be configured to install when you boot an instance.

  * Click the Add Gem -> link to add your gem.

Now your gem moves to the "Selected Gems" on the right. Boot your instance and the gem will be installed.

To remove a gem, click the x Remove link and the gem is removed. Re-start your instance to effect the change.

### Add a Gem from a Custom Server


Use the section "Or Add a Gem From a Custom Gem Server".

  - Complete the exact "Name", "Version" and gem repository URL in the "Source" field.
  - With your information accurate and complete, click the Add Gem button.

The gem appears on the "Selected Gems" list below. Boot your instance and the gem will be installed.

### Remove a Gem

Click the x Remove link and the gem is removed.  This will remove the gem from the UI but will not remove the gem from any currently running instances.


## Add Unix packages to your application

You can add additional software packages to your application within Engine Yard Cloud. Packages are added at the account-level. After a package is applied to specific environment, it cannot be removed from that environment. (Although, after a package is dissociated from an application, new environments for that application do not have the package.)

###To configure additional software packages for your application within Engine Yard Cloud.

1. In the Dashboard, click the name of the application you want to modify.  
2. Click the Unix Packages icon.
3. Search for your package.  
    For example `rabbitmq` for RabbitMQ.  
    Results are returned under the heading "Available Unix Packages".
4. Click Add ->.  
    The package is added to the Selected list.  
5. To install the package on an existing environment:  
    a. Click Go to dashboard.  
    b. Click the environment name.  
    c. Click Apply.  
6. To install the package on new environment:  
	a. Click Go to dashboard.  
	b. Create and boot a new environment for the application.  

### To remove a software package

1. In the Dashboard, click the name of the application to remove the software package from.  
2. Click the Unix Packages icon.
3. Click x Remove for the package.  
   This removes the package from the UI but does not remove the package from any currently running environments.


<h2 id="topic5"> More information</h2>

<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>Create an environment </td><td>[[Create an environment|environment-create]].</td>
	  </tr>
</table>

