# Deploy to AppCloud from a Windows environment

Working with Rails on Windows used to be difficult and then deploying
was a whole different concept. RailsInstaller and AppCloud make this process much easier. Below is the process for deploying your application
to Engine Yard's AppCloud platform.

1. Download and install [RailsInstaller](http://railsinstaller.org)
2. Open Programs > RailsInstaller > Command Prompt with Ruby and Rails
3. Create/clone Rails application `rails new my_app`
4. Make a really cool application
5. Adjust Gemfile and Gemfile.lock as needed.
    1. Open Gemfile.lock and add 'ruby' under 'Platforms'
    2. If there are any gems with `x86-minw32`, make sure and explicitly add them to the Gemfile (`gem 'bcrypt-ruby'`)
    3. Specify the 'bundler' version in the Gemfile `gem 'bundler', '~> 1.0.17'`
    3. Bundle the application again `bundle install`
6. Add SSH key to Github
7. Create a new repository on Github and follow directions
8. Add SSH key to AppCloud
9. Create new application on AppCloud
    1. Fill in repository information
    2. Fill in Application Name
    3. Select 'Rails 3' as Application Type
    4. Click 'Create Application'
10. Create new environment for your application
    1. Fill in Environment Name
    2. Select Framework Environment (default is production)
    3. Choose Application Server (default is Passenger 2)
    4. Select Ruby Runtime
    5. Select the Database Stack (default is MySQL 5.0.x)
    6. Configure the database Backups frequency if desired
    7. Click 'Create Environment'
11. Configure your server.
    1. Start with a Single Server and then decide if you will need a
       Basic Cluster or Custom setup
    2. Add IP address if needed
    3. Click 'Boot This Configuration'
12. After everything is finished, click on 'Visit your application' to
    check that everthing worked.
    
## Notes

* RailsInstaller installs Ruby 1.8.7 and Rails 3.0.7. You can update the
  Rails version by running `gem update rails` from the command prompt. If
  you want to run multiple Ruby versions on Windows, check out
  [pik](https://github.com/vertiginous/pik) on Github.

* Make sure to add `gem 'bundler', '~> <version>` to your Gemfile so that your instance
  uses the correct version of bundler

* If you have deployed your code and the instance is using the wrong
  version of Bundler, click 'Update' on the application to update the
  instance

* Default location for SSH key is `C:\Users\<name>/.ssh/id_rsa.pub`

* If it's a public repository, use the 'Git Read-Only' address from
  Github

* If it's a private repository, you'll need to add a deploy key to the
  Github repository

* If using the defaults from RailsInstaller 1.x, select the Ruby 1.8.7
  version when creating your environment (Ruby 1.9.2 for RailsInstaller version 2.x)

* The first time you deploy, the 'Migrate?' button should be checked and
  migrations should run.

* Booting the application normally takes about five minutes
