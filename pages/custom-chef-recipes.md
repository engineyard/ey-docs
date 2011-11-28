# Custom Chef Recipes

## Setup Chef Environment

In order to be able to develop chef recipes that build (and rebuild each time you start an instance) dependencies of your application, you need to install a few gems and set up API credentials for your Engine Yard account.

### Install the Engineyard Gem

First install the engineyard gem.

    $ sudo gem install engineyard

## Clone ey-cloud-recipes repository

Fork and clone the [ey-cloud-recipes](http://github.com/engineyard/ey-cloud-recipes) repository.

  - Browse to the [ey-cloud-recipes](http://github.com/engineyard/ey-cloud-recipes) site on GitHub.
  - Click on the **Fork** button to "Fork" the repository.
  - This creates a fork under your user account on GitHub.
  - Click on the **clipboard icon** to copy the URL of your forked repository to your clipboard.
  - Clone the repository to your local development machine. Be sure you do **not** put this inside of your app repository as nested repositories aren't supported in git.

        git clone git@github.com:<github username>/ey-cloud-recipes.git

This local copy of your **ey-cloud-recipes** repository will be the folder you work in when writing custom recipes for your environment.

## File structure of ey-cloud-recipes

### Base files and folders

    README.md
    Rakefile
    cookbooks/
      main/
        attributes/
        definitions/
        libraries/
        recipes/

These folders and files were original to the **ey-cloud-recipes** repository before any other cookbooks were added.

### Cookbooks directory

Under `cookbooks/` you will see a folder for each of the self-contained recipes for various components you can choose to enable.

Each folder under a cookbook has a number of sub-folders.  For this example the sphinx recipe is used:

    cookbooks/sphinx/
      files/
        default/
          sphinx.logrotate
      recipes/
        default.rb
      templates/
        sphinx.monitrc.erb
        sphinx.yml.erb

### Recipes directory

For each cookbook the `recipes/default.rb` is the main definition file that will prescribe how chef will perform each of its actions to achieve the goal.  View the [sphinx example](http://github.com/engineyard/ey-cloud-recipes/blob/master/cookbooks/sphinx/recipes/default.rb).

### Files directory

In the sphinx cookbook the `recipes/default.rb` creates a `remote_file` *resource* (that's a chef term).  And that *resource* is found in the `files/default/sphinx.logrotate` location.  Which corresponds to the *source* value in the code block below.


    remote_file "/etc/logrotate.d/sphinx" do
      owner "root"
      group "root"
      mode 0755
      source "sphinx.logrotate"
      backup false
      action :create
    end


Why have a flat file?  Well the `sphinx.logrotate` is a file that has no variables.  That's what the *templates* are for and that's what you can use standard ERB to inject variable data.

### Templates directory

Once again in the `recipes/default.rb` of the sphinx cookbook a *resource* is created.  This time it is passing variables to a template.


    template "/etc/monit.d/sphinx.#{app_name}.monitrc" do
      source "sphinx.monitrc.erb"
      owner node[:owner_name]
      group node[:owner_name]
      mode 0644
      variables({
        :app_name => app_name,
        :user => node[:owner_name],
        :flavor => flavor
      })
    end


The variables above are passed to the template below and then chef renders the static file defined in the template resource, i.e `/etc/monit.d/sphinx.myapp.monitrc`.


    check process sphinx_<%= @app_name %>_3312
      with pidfile /var/run/sphinx/<%= @app_name %>.pid
      start program = "/engineyard/bin/<%= @flavor %>_searchd <%= @app_name %> start" as uid <%= @user %> and gid <%= @user %>
      stop program = "/engineyard/bin/<%= @flavor %>_searchd <%= @app_name %> stop" as uid <%= @user %> and gid <%= @user %>
      group sphinx_<%= @app_name %>


## Turn on a cookbook

Please browse the [[available cookbooks|http://github.com/engineyard/ey-cloud-recipes/tree/master/cookbooks]] to see the latest versions.

In order to turn on a cookbook and have that set of recipes run when you deploy your application you need to open the `cookbooks/main/recipes/default.rb` file.

This file contains a series of lines commented out that either describe or require a given recipe.  The `require_recipe` method, followed by a string named after the same cookbook.

For an example of using a cookbook checkout: [[Full text search with thinking sphinx |full-text-search-with-thinking-sphinx]]

## Create a cookbook

For the purposes of this example, we will be creating a new recipe called **nginx_logrotate**.

Go to your local **ey-cloud-recipes** repository folder.  To generate a new recipe type:

    $ rake new_cookbook COOKBOOK=nginx_logrotate

Edit **cookbooks/nginx_logrotate/recipes/default.rb** adding the following code:


    remote_file "/etc/logrotate.d/nginx" do
      owner "root"
      group "root"
      mode 0755
      source "nginx.logrotate"
      backup false
      action :create
    end


Create a new nginx logrotate config file. Change the retention of Nginx logs to 60 days (the default is 30) by creating the file **files/default/nginx.logrotate** with the following content:

    /var/log/engineyard/nginx/*.log {
      daily
      missingok
      compress
      rotate 60
      dateext
      notifempty
      sharedscripts
      extension gz
      postrotate
          [ ! -f /var/run/nginx.pid ] || kill -USR1 `cat /var/run/nginx.pid`
      endscript
    }


Add the following line to the bottom of **cookbook/main/recipes/default.rb** to enable the recipe:


    require_recipe "nginx_logrotate"


Test the syntax of your new recipe:


    $ rake test


The final step is to commit your changes to the repository.  After your changes are committed to HEAD of your local git repository then you are ready to deploy.


    $ git add . && git commit -am "Custom logrotate for nginx"


## Invoking custom Chef recipes

To run your new recipe set you first need to upload the recipes to your environment.

  From the root of your recipes repository run:


    $ ey recipes upload -e <environment name>


  Then run them with:

    $ ey recipes apply -e <environment name>

  You can also choose to do a full chef run:

    $ ey rebuild -e <environment name>

You can now deploy your app code that depends on customizations that chef has configured for you.

## Report to the Dashboard from custom recipes

You can have messages appear when your custom chef recipes run.  

The first part of this is included in the **ey-cloud-recipes** repository.  The second part you can include in the **recipe/default.rb** you create.

This code can be found in the **ey-cloud-recipes** repository under ''cookbooks/main/definitions/ey_cloud_report.rb'':

    define :ey_cloud_report do
      execute "reporting for #{params[:name]}" do
        command "ey-enzyme --report '#{params[:message]}'"
        epic_fail true
      end
    end


Then inside your cookbook in the **recipe/default.rb** file, you can use the code like this example: 

    ey_cloud_report "nginx" do
      message "custom logrotate for nginx"
    end

There are further examples of how the ''ey_cloud_report'' method is used in the [sphinx recipe](http://github.com/engineyard/ey-cloud-recipes/blob/master/cookbooks/sphinx/recipes/default.rb).

Now can see when the custom portions of your chef recipes are running in the Dashboard.