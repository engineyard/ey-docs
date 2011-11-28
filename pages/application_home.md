# Applications

This section outlines how to manage your application on Engine Yard Cloud. If you're looking to add SSL to your application please see this article: [[SSL Certs|ssl-certificates]].

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

Just click the x Remove link and the gem is removed.  This will remove the gem from the UI but will not remove the gem from any currently running instances.


## Manage Unix Packages

Configure additional software packages for your application within Engine Yard Cloud.

  - Under SERVER TOOLS, click Dashboard to view your list of applications.
  - Click name of the application you want to modify
  - Then click the Add Unix Packages icon in the upper right.

### Add a Software Package

  * Type in a search string for your package.  For example `rabbitmq` for RabbitMQ.

Results returned under the heading "Available Unix Packages" can be configured to install when you boot an instance.

  * Click the Add -> link to add your package.

Now your package moves to the "Selected Unix Packages" on the right.  Boot your instance and the package will be installed.

### Remove a Software Package

Click the x Remove link and the package is removed.  This will remove the package from the UI but will not remove the package from any currently running instances.
