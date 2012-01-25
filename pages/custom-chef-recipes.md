# Custom Chef Recipes

This page describes:   

* [Setting up a Chef environment][2]
* [Cloning the ey-cloud-recipes repository][3]
* [The file structure of ey-cloud-recipes][4]
* [Turning on a cookbook][5]
* [Creating a cookbook][6]
* [Invoking custom Chef recipes][7]
* [Reporting to the Dashboard from custom recipes][8]
* [Log files for Chef recipes][9]
* [Specifying which instance roles run a recipe][10]


<h2 id="topic2"> Setup Chef environment</h2>

In order to be able to develop chef recipes that build (and rebuild each time you start an instance) dependencies of your application, you need to install a few gems and set up API credentials for your Engine Yard account.

### To install the engineyard gem

* Type: 
        $ sudo gem install engineyard

<h2 id="topic3">Clone the ey-cloud-recipes repository</h2>

Fork and clone the [ey-cloud-recipes](http://github.com/engineyard/ey-cloud-recipes) repository.

1. Browse to the [ey-cloud-recipes](http://github.com/engineyard/ey-cloud-recipes) site on GitHub.  
2. Click Fork to fork the repository.  
    This creates a fork under your user account on GitHub.
3. Click the clipboard icon to copy the URL of your forked repository to your clipboard.  
4. Clone the repository to your local development machine. Be sure you do **not** put this inside of your app repository as nested repositories aren't supported in git.

        git clone git@github.com:<github username>/ey-cloud-recipes.git

This local copy of your **ey-cloud-recipes** repository will be the folder you work in when writing custom recipes for your environment.

<h2 id="topic4">File structure of ey-cloud-recipes</h2>

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


<h2 id="topic5"> Turn on a cookbook</h2>

Please browse the [[available cookbooks|http://github.com/engineyard/ey-cloud-recipes/tree/master/cookbooks]] to see the latest versions.

In order to turn on a cookbook and have that set of recipes run when you deploy your application you need to open the `cookbooks/main/recipes/default.rb` file.

This file contains a series of lines commented out that either describe or require a given recipe.  The `require_recipe` method, followed by a string named after the same cookbook.

For an example of using a cookbook checkout: [[Full text search with thinking sphinx |full-text-search-with-thinking-sphinx]]

<h2 id="topic6">Create a cookbook</h2>

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


<h2 id="topic7"> Invoking custom Chef recipes</h2>

To run your new recipe set you first need to upload the recipes to your environment.

  From the root of your recipes repository run:


    $ ey recipes upload -e <environment name>


  Then run them with:

    $ ey recipes apply -e <environment name>

  You can also choose to do a full chef run:

    $ ey rebuild -e <environment name>

You can now deploy your app code that depends on customizations that chef has configured for you.

<h2 id="topic8"> Report to the Dashboard from custom recipes</h2>

You can have messages appear when your custom chef recipes run.  These appear on the environment page under the "Instances" heading.

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

<h2 id="topic9">Log files for Chef recipes</h2>

Custom recipes are logged to /var/log/chef.custom.log. (Default Engine Yard Cloud recipes are logged to /var/log/chef.main.log.)

For example, running this code in your *.rb custom recipe file:  
`Chef::Log.info "Doing step 1."`  
writes a line like this:  
`[Sun, 22 Jan 2012 22:29:00 +0000] INFO: Doing step 1.`  
to the /var/log/chef.custom.log file. 


<h2 id="topic10"> Specifying which instance roles run a recipe</h2>

In a clustered environment, you have multiple instances, each instance playing a different role. In most cases, you want the recipe to run on only one type of instance, for example, to run on the application master, but not on the application slaves, utility instances, etc.

###To specify which instance (role) runs a recipe 

1. Add an if statement like this around the recipe code:  
        if node[:instance_role] == 'instance_role'  
    Where instance_role is one of the following:  
	* `app_master` (for the application master)  
	* `app` (for an application slave)  
	* `util` (for a utility instance)  
	* `solo` (for a single instance)
	
**Question** Can I run recipes on database instances? 	

**Question** If I write the recipe where `if node[:instance_role] == 'app_master'` , will the recipe fail if I try to run it on a single instance environment?

### Example

In the [[ssh_tunnel recipe|https://github.com/engineyard/ey-cloud-recipes/blob/master/cookbooks/ssh_tunnel/recipes/default.rb]] for a clustered environment, set the instance role to app_master:  
    if node[:instance_role] == 'app_master' 
    ...
    end


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"	
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
[8]: #topic8        "topic8"
[9]: #topic9        "topic9"
[10]: #topic10        "topic10"
[9]: #topic11        "topic11"
[10]: #topic12        "topic12"