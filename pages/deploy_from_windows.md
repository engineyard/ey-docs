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