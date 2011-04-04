# Applications

This section outlines how to manage your application on EY AppCloud. If you're looking to add SSL to your application please see this article: [[SSL Certs|ssl-certificates]].

## Add an Application

You can configure many different applications and their corresponding repository URL and framework under Engine Yard AppCloud.  Then applications can be used in one or more environment.

  - Under SERVER TOOLS, click on the **Applications** section.
  - In the top right corner, click on the **Add a New Application** link.
  - Give your application a name.
  - Enter a Git Repository URI.
  - Choose an Application Type.
  - Then click the "Create application" button to begin the process.

A new screen with the git deploy key for your application will appear.

  - Copy the git deploy key.
  - Paste it to your GitHub Account.
  - Click **My Deploy Key is in Place** when ready.

Once you've setup the deploy key, you're ready to setup any other specific gems. If you are using bundler, you can skip to the Unix Packages page.

  * Search for a Gem
  * Or Add a Gem From a Custom Gem Server
  * Click **Select Unix Packages** after all Gems have been configured.

On the Unix Packages page you can configure system dependences.  For example: *imagemagick*.

  * Search for a Unix Package
  * Click **Go to dashboard** after you've configured all Unix packages.

Now all dependences for your application have been configured by Engine Yard AppCloud, we'll be able to boot our custom AMI, apply your changes, deploy your application, and breath life to it on EC2!

## Edit an Application

There is more than one way to get to the edit an application screen.

  * The **Applications** tab under SERVER TOOLS will list your applications.
  * You can then click on the name of your application to edit.

Alternatively you can go from the Dashboard.

  * In your environment, under the Applications tab there is an **Edit** link.

Once you're on the **Edit Application** screen you'll be able to modify the following options.

  * Git Repository URI
  * Application Type
  * Domain Name

Save the settings by clicking **Update application** button.

NOTE: You can't change your Git Deploy Key, but you can copy it if needed.

## Attach an App to an Environment

You may want to attach a second application or re-attach the correct application to an environment.  If so, follow these steps.

  - Click on **Dashboard**.
  - Then click on the **Applications** tab, and click the **Add Application** link. 

You'll be taken to the list of applications for this environment.  It will then list the available Applications you can choose from.

  - Click on **Add to environment** link, to add the specific application you desire.
  - The "Choose a Domain Name" dialog appears.
  - Enter the domain name.
  - Then click **Save domain name** to save your changes.

NOTE: You may enter `_` for the first domain name.

## Detach an App from an Environment

Ready to scratch that first prototype?  Before you can delete an app you have to detach it from an environment.

  - Under you environment under the Dashboard, click on the **Applications** tab.
  - Your application is listed here, the **Detach** link is on the right.
  - Click **OK** if your ready to detach.

You can always reattach if you want, but now you're app is detached.

## Delete an Application

When you delete an application from Engine Yard AppCloud you're just removing the record of how it's configured.

NOTE: Before you can delete any application it cannot be attached to an environment.

  - From SERVER TOOLS, click on **Applications**.
  - Find the application you'd like to remove and click the **Delete** link.
  - To confirm, click **OK**.

## Manage Gems

If you need to configure gems for your application now or anytime, just navigate to the gems page.

  - Under SERVER TOOLS, click on **Dashboard** to view your list of environments.
  - For your given environment, click on the **Applications** tab.
  - Then locate the **red Add RubyGems icon**. Click on the icon to view the Gems page.

### Search for a Gem


  * Type in a search string for your package. For example "will_paginate" for Mislav Marohnić's [[will_paginate|http://wiki.github.com/mislav/will_paginate]] gem.

Results returned under the heading "Available Gems" can be configured to install when you boot an instance.

  * Click on the **Add Gem -> link** to add your gem.

Now your gem moves to the "Selected Gems" on the right. Boot your instance and the gem will be installed.

To remove a gem, click on the **x Remove link** and the gem is removed. Re-start your instance to effect the change.

### Add a Gem from a Custom Server


Use the section "Or Add a Gem From a Custom Gem Server".

  - Complete the exact "Name", "Version" and gem repository URL in the "Source" field.
  - With your information accurate and complete, click the **Add Gem** button.

The gem appears on the "Selected Gems" list below. Boot your instance and the gem will be installed.

## Manage Unix Packages

Configure additional software packages for your application within Engine Yard AppCloud.

  - Under SERVER TOOLS, click on **Dashboard** to view your list of environments.
  - For your given environment, click on the **Applications** tab.
  - Then locate the yellow **Add Unix Packages** icon.  Click on the icon to view the Ebuilds page.

### Add a Software Package

  * Type in a search string for your package.  For example `rabbitmq` for RabbitMQ.

Results returned under the heading "Available Unix Packages" can be configured to install when you boot an instance.

  * Click on the **Add ->** link to add your package.

Now your package moves to the "Selected Unix Packages" on the right.  Boot your instance and the package will be installed.

### Remove a Software Package

Just click on the **x Remove** link and the package is removed.  This will remove the package from the UI but will not remove the package from any currently running instances.
