# Getting Started

## Step 1: Add Application

### Application Information

This page is where you will add your git repo that host the code for your application.
![Quick Start - Git Repo](images/quick_start_home_1.jpg)

  * Git Repository URI
  * Application Type

We need to have your <bold>Git Repository URI</bold> to checkout your code and deploy it to the instance.  And your <bold>Application Type</bold> helps us to know how to start your application once it's deployed.

The Quick Start will use the name of your git repo to name and something else to make the name of your Environment.

### Advanced Options

  * Framework Environment
  * Web Server Stack
  * Avaliablity Zone

The **Framework Environment** gives you the ability to use any environment you want on Engine Yard AppCloud.  Great for production, staging, CI, testing, QA, etc.

We offer a choice of **Web Server Stacks** to our customers.    

  * Nginx + Mongrel
  * Nginx + Passenger
  * Nginx + Unicorn
  * Nginx + Glassfish (JRuby Only)

You can easily choose from the list now and then boot your instance.  But wait, there's more!  You can then choose to change your configuration and then deploy those changes.

With this flexibility, you can decide which stack is right for your app.

**Availability Zones** are Amazon's idea of data centers.  Currently we offer a choice of the us-east area.  We offer other regions in our [Multi-Region Alpha]() feature.

## Step 2: Git Deploy Key

If you're deploying an application that is on a public repository, this step will be skipped.  If not, you'll be prompted with a generated deploy key to be applied to your repository.

### Git Deploy Key for myapp

We're going to step you through how to get your deploy key setup on your private repository.

Not using GitHub?  Well you're probably smart enough to know how to add the deploy key yourself, so skip ahead to [Step 3: Configure Gems][]

### Add a Deploy Key to A GitHub Private Repo

![Quick Start - Add Deploy Key](images/quick_start_home_2.jpg)

Use the copy to clipboard button on the page (or just select all in the text area form and copy).

Then let's open your [GitHub](http://www.github.com) repository's address in a new window.

  - From the homepage of your private repository click on the **Admin** button.
  - Once on the Admin page, you'll see the Deploy Key's section, click **Add another deploy key**.
  - Give your Deploy Key a **Title** and paste in the **Key** into the field below Title.
  - Click **Add key** to save your key to the repository.

Now you're Deploy Key is installed on GitHub, you can click the check box **My Deploy Key is in place** and click the **Next** button to proceed.

<html><br/></html>

## Step 3: Configure Gems

Configure all the gems you need for your application on one screen.  If you're vendoring your gems or using Bundler, you can simply click the **Next** button in the bottom right to proceed to [Step 4: SSH Key][].

### Search for a Gem

  - Once you search for a gem you need installed, the results are shown below "Select Your Gems".
  - Click the **Add Gem ->** link to include the gem in your configuration.
  - The gem moves over into the Selected Gems list, which are installed on all instances you create.

### Or Add a Gem From a Custom Gem Server

If you've got a custom gem tucked away somewhere, you can add that here as well and we'll make sure it's added to your instances.

## Step 4: SSH Key

You can add the first SSH Key to your instance here.  Optionally you can [manage and deploy keys](env_ssh_keys) anytime later.

  * If you don't want to add a SSH Key at this time you can click the **Next** button.  

OR 

  * If you're ready to add an SSH Key give it a **Keypair Name** and paste your ''id_rsa.pub'' or ''id_dsa.pub'' into the **Public Key** field, then click the **Next** button.

For more information about generating SSH Keys read our [Generate an SSH Keypair](generating_ssh_keys) article.

## Boot Your Cluster

You're ready to boot your first instance on Engine Yard AppCloud!

Use the on-screen instructions to make the best decision for your needs. If you are hosting a production ready application, we recommend you choose the basic cluster. This gives you a dedicated database and gives you the flexibility to scale. If you are still in development, the single server is the best option. If you have other needs, you can configure that with the custom option.

![Quick Start - Boot Instances](images/quick_start_home_3.jpg)


## One Last Step - Deploy

![Quick Start - Deploy](images/quick_start_home_4.jpg)

After you've booted your instance there's one last step you need to do.  Click on the **Applications** tab and click the **Deploy** button to deploy your application to the instance and restart Rails/Ruby server (mongrel/passenger/unicorn etc.). If you want to know more about deployment or want to know more about the [engineyard gem](https://github.com/engineyard/engineyard) go to our [[appcloud:guides:deployment:home|Deployment page]].

Also, if you want to be able to view your Deploy log file. You will need to SSH into your instance and go into your **/home/deploy** directory. Once you are in your instance if you type ''pwd'' you should already be in that directory and the file in there will be your Deploy log.

## Where to Go From Here

You can setup various Internet & Networking technologies.

  * [IP Addresses](env_ip_addresses)
  * [SSH Keys and Configuration](env_ssh_keys)
  * [SSL Certificates](features_ssl_certificates)

Learn more about the different types of [Instances](appcloud/guides/environments/appcloud-instances) are available to you including Application, Utility and Database Instances.




