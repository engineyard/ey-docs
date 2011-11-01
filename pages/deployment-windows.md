# Deploy to Engine Yard Cloud from Windows

Working with Rails on Windows used to be a relatively difficult task.
RailsInstaller and Engine Yard Cloud have made creating and deploying Rails applications easier. 
Below is the process for deploying your application to the Engine Yard platform.

Steps to create and deploy your application from Windows:

  * [[Create a Rails application|deployment-windows#rails]]
  * [[Adjust your Gemfile|deployment-windows#adjust]]
  * [[Setup Git and SSH|deployment-windows#git-ssh]]
  * [[Create an application|deployment-windows#application]]
  * [[Create an environment|deployment-windows#environment]]
  * [[Configure instances|deployment-windows#instances]]
  * [[Considerations when deploying from Windows|deployment-windows#consider]]        
  
<h2 id="rails">Create and configure your Rails application</h2>

1. Download and install [RailsInstaller](http://railsinstaller.org).
2. Open Programs > RailsInstaller > Command Prompt with Ruby and Rails.
3. Create a new Rails application `rails new app_name`
4. Write your Rails application.

<h2 id="adjust">Adjust your application Gemfile</h2>

1. Open the `Gemfile.lock` file in your application.
2. Under Platforms, add `ruby` if it doesn't exist.
2. If there are any gems with `-x86-minwg32`, make sure to remove the
  `-x86-mingw32` and add specify it explicitly in the Gemfile with the
  platform.
        
      bcrypt-ruby (3.0.1-x86-mingw32)

  becomes

      bcrypt-ruby (3.0.1)
      
  in Gemfile
  
      gem 'bcrypt-ruby', '~> 3.0.1', :platform => 'ruby'
        
3. Specify the bundler version in the Gemfile 

        gem 'bundler', '~> 1.0.17'
    
4. Bundle the application again from the command prompt
    
        bundle install
    
<h2 id="git-ssh">Setup a git repository and SSH</h2>

**Note**: This section presents using GitHub as a choice to host your git repository.
You can however choose to host your git repository anywhere.  You need to ensure you
can add your ssh public key to the service hosting your git repository.


1. Create and/or login to your [[GitHub|http://www.github.com]] account.
2. Create a new repository on GitHub and follow the setup directions.
3. Add your SSH public key to GitHub.
4. Add your SSH public key to your Engine Yard account.


<h2 id="application">Create your application</h2>

1. Login to your Engine Yard account.
2. Click Create New Application from the Dashboard.
3. Enter your git repository information.
4. Enter your Application Name.
5. Select the appropriate Rails version for the Application Type.
    
    The application type should be Rails 3 if you created your application using RailsInstaller.
    
6. Click Create Application.
    
    On the next page you create an Environment for this application.
    
<h2 id="environment">Create an Environment</h2>

1. Fill in the Environment Name.
  
    Example names are `production`, `staging`, `testing`

2. Select Framework Environment. (default is production)
3. Choose Application Server. (default is Passenger 3)
4. Select a Runtime. (default is Ruby 1.9.2)
5. Select the Database Stack (default is MySQL 5.0.x)
6. Configure the database backup frequency if desired.
7. Click Create Environment.
  
    On the next page you configure and boot compute instances.
  
<h2 id="instances">Configure your compute instances</h2>

Compute instances are server resources that run your application tier, database tier, utility tier,
and other resources.

1. Choose an appropriate configuration.

    Use a Single instance configuration for low traffic applications or staging environments. 
    Use a Basic Cluster or Custom Cluster configuration for higher traffic and production environments. 
    
2. Add an IP address.
3. Click Boot This Configuration.
4. After everything is finished, click on 'Visit your application' to
    check that everthing worked.


<h2 id="consider">Considerations</h2>

* RailsInstaller installs Ruby 1.8.7 and Rails 3.0.7. You can update the
  Rails version by running `gem update rails` from the command prompt. If
  you want to run multiple Ruby versions on Windows, check out
  [pik](https://github.com/vertiginous/pik) on GitHub.

* If you have deployed your code and the instance is using the wrong
  version of Bundler, click 'Update' on the application to update the
  instance.

* Default location for SSH key is `C:\Users\<name>/.ssh/id_rsa.pub`

* If using a public git repository, use the 'Git Read-Only' address from
  GitHub.

* If it's a private repository, you'll need to add a deploy key to the
  GitHub repository.

* If using the defaults from RailsInstaller 1.x, select the Ruby 1.8.7
  version when creating your environment. (Ruby 1.9.2 for RailsInstaller version 2.x)

* The first time you deploy, the 'Migrate?' button should be checked and
  migrations should run.

* Booting the application normally takes about five minutes.
