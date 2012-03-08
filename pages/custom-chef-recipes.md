# Customize your environment with Chef recipes

You can use Chef recipes to customize your Engine Yard Cloud environments. You can edit cookbooks that are provided by Engine Yard or you can make your own cookbooks. 

This page describes:   

* [Setting up a Chef environment][2]
* [Cloning the ey-cloud-recipes repository][3]
* [The file structure of ey-cloud-recipes][4]
* [Turning on a cookbook][5]
* [Creating a cookbook][6]
* [Invoking custom Chef recipes][7]
* [Reporting to the Dashboard from custom Chef recipes][8]
* [Reporting to a log file from custom Chef recipes][9]
* [Specifying which instance roles run a custom Chef recipe][10]


<h2 id="topic2"> Set up the Chef environment</h2>

In order to be able to develop Chef recipes that build (and rebuild each time you start an instance) your environment customizations, you need to install the engineyard gem in your local environment on your development machine.

Even if you already have the engineyard gem installed, it is good practice to run "install engineyard" to make sure that you have the latest version of the gem. 

### To install the engineyard gem

1. Type: 
        $ sudo gem install engineyard

2. When prompted, enter the password for your Engine Yard account.

<h2 id="topic3">Clone the ey-cloud-recipes repository</h2>

To work with the ey-cloud-recipes repository, you need to fork and clone it to your development environment on your local machine. Clone a local copy of the ey-cloud-recipes repository in the directory that you'll work in when writing custom Chef recipes for your environment (the same environment where you installed the engineyard gem).  

Here is the standard procedure for cloning a GitHub repository:

###To fork and clone the ey-cloud-recipes repository

1. Browse to the [ey-cloud-recipes](http://github.com/engineyard/ey-cloud-recipes) site on GitHub.  
2. Click Fork to fork the repository.  
    This creates a fork under your user account on GitHub.
3. Copy the URL of your forked repository to your clipboard.  
4. Clone the repository to your local development machine:   
   **Note:** Unless you are using submodules in git, do **not** put the ey-cloud-recipes repository in the same directory as your application repository. By default, git does not support nesting.
   
<h3 id="topic3a">About updating the ey-cloud-recipes repository</h3>

From time to time, you might want to or need to refresh your ey-cloud-recipes repository to keep up with changes made by Engine Yard. A good reason to refresh the repository is if something isn't working correctly or if there is a new feature that you want to take advantage of. You can review the GitHub Commit History for the repository to find out about recent changes. 

Make sure to test carefully after updating the repository before apply the new Chef recipes to a production environment. 

<h2 id="topic4">About the file structure of ey-cloud-recipes</h2>

Become familiar with the file structure of the ey-cloud-recipes repository.

### Base files and directories

    README.md
    Rakefile
    cookbooks/
      main/  
        attributes/  
        definitions/  
        libraries/  
        recipes/  

### Cookbooks directory

In the cookbooks directory are directories of the self-contained recipes for various "components" (such as Sphinx, MongoDB, Redis, Varnish) that you can enable and customize for your environment.

Each directory under a cookbook has a number of sub-directories.  On this page, we use the Sphinx recipe as the example:

    cookbooks/
        sphinx/
          files/
			default/
              sphinx.logrotate
          recipes/
        	default.rb
      	  templates/
			default/
        	  sphinx.monitrc.erb
        	  sphinx.yml.erb

### Recipes directory

For each cookbook `recipes/default.rb is the main definition file that prescribes how Chef performs each of its actions to achieve the customization.  View the [Sphinx example](http://github.com/engineyard/ey-cloud-recipes/blob/master/cookbooks/sphinx/recipes/default.rb).

### Files directory

In the Sphinx cookbook, the `recipes/default.rb` creates a `remote_file` *resource* (that's a Chef term).  That *resource* is found in the `files/default/sphinx.logrotate` location and corresponds to the *source* value in the code block below.


    remote_file "/etc/logrotate.d/sphinx" do
      owner "root"
      group "root"
      mode 0755
      source "sphinx.logrotate"
      backup false
      action :create
    end


The `sphinx.logrotate` is a file that has no variables. You use the templates and ERB to insert the variable data into the sphinx.logrotate file.

### Templates directory

Also in the the Sphinx cookbook, the `recipes/default.rb` creates a template and passes variables to the template. 

*In the recipes/default.rb file:*

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


The variables above are passed to the template (`sphinx.monitrc.erb`), and Chef renders the static file (`/etc/monit.d/sphinx.myapp.monitrc`).

*In the sphinx.monitrc.erb file:*

    check process sphinx_<%= @app_name %>_3312
      with pidfile /var/run/sphinx/<%= @app_name %>.pid
      start program = "/engineyard/bin/<%= @flavor %>_searchd <%= @app_name %> start" as uid <%= @user %> and gid <%= @user %>
      stop program = "/engineyard/bin/<%= @flavor %>_searchd <%= @app_name %> stop" as uid <%= @user %> and gid <%= @user %>
      group sphinx_<%= @app_name %>


<h2 id="topic5"> Turn on a cookbook</h2>

In order to turn on a cookbook and have that set of recipes run when you deploy your application, you need to uncomment the recipe in the `cookbooks/main/recipes/default.rb` file. 


###To turn on an existing cookbook

1. Select the cookbook that you want to use.  

2. In your local environment, open `cookbooks/main/recipes/default.rb` for editing. 

3. Uncomment the "require_recipe" line for the recipe that you want to turn on.

4. Follow any additional instructions in the comments.  
    For example, for Sphinx, you need to edit cookbooks/sphinx/recipes/default.rb; for details, see [[Full text search with thinking sphinx |full-text-search-with-thinking-sphinx]]. 

4. Save `cookbooks/main/recipes/default.rb` and commit your changes locally and push them to your remote repository.

5. Use the ey recipes commands to upload and apply the recipes:  
        ey recipes upload -e environment_name
        ey recipes apply -e environment_name 


<h2 id="topic6">Create a cookbook</h2>

If there isn't a ready-made cookbook to suit your needs, you can create your own cookbook from scratch.

The procedure below shows how to create a new Chef recipe called nginx_logrotate. This recipe changes the retention time of Nginx logs from 30 days (the default) to 60 days. 


###To generate a new Chef recipe:

1. In your local environment, in the ey-cloud-recipes repository directory, type:  
        $ rake new_cookbook COOKBOOK=nginx_logrotate

    This creates the file: cookbooks/nginx_logrotate/recipes/default.rb.

2. Edit cookbooks/nginx_logrotate/recipes/default.rb to add the following code:

        remote_file "/etc/logrotate.d/nginx" do
          owner "root"
          group "root"
          mode 0755
          source "nginx.logrotate"
          backup false
          action :create
        end

4.  Create a file called files/default/nginx.logrotate with the following content: 

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


5. Edit cookbook/main/recipes/default.rb to enable the recipe:

        require_recipe "nginx_logrotate"


6. Test the syntax of your new recipe:

        $ rake test


4. Commit your changes locally and push them to your remote repository.

5. Use the ey recipes commands to upload and apply the recipes:   

	        ey recipes upload -e environment_name
	        ey recipes apply -e environment_name


<h2 id="topic8"> Report to the Dashboard from custom recipes</h2>

You can have messages appear when your custom Chef recipes run.  These appear on the Environment page under the "Instances" heading; and allow you to see when the custom portions of your Chef recipes are running. These messages also appear in the chef.custom.log file. (See [Report to a log file from custom Chef recipes][9] below.)

###To report to the Dashboard from custom Chef recipes

1. Edit the RB file (for example, recipes/default.rb) file with code like this:  

        ey_cloud_report "recipe_name" do
          message "message text"
        end
    
    Where *more message text* is the message that you want to appear on Dashboard when that part of the code is executed.

    For example: 

        ey_cloud_report "nginx" do
          message "custom logrotate for nginx"
        end

There is an example of the ey_cloud_report method in the [sphinx recipe](http://github.com/engineyard/ey-cloud-recipes/blob/master/cookbooks/sphinx/recipes/default.rb).


<h2 id="topic9">Report to a log file from custom Chef recipes </h2>

Custom Chef recipes are logged to /var/log/chef.custom.log. (Default Engine Yard Cloud recipes are logged to /var/log/chef.main.log.)

###To report to a log file from custom Chef recipes 

1. Edit the RB file (for example, recipes/default.rb) file with code like this:  

        Chef::Log.info "message text"

    For example:  
        Chef::Log.info "Doing step 1." 
    writes a line like this:  
        [Sun, 22 Jan 2012 22:29:00 +0000] INFO: Doing step 1.   
    to the /var/log/chef.custom.log file. 


<h2 id="topic10"> Specify which instance roles run a recipe</h2>

In a clustered environment, you have multiple instances, each instance playing a different role. In most cases, you want the recipe to run on only one type of instance; for example, to run on the application master, but not on the application slave, database, or utility instances.

###To specify which instance (role) runs a recipe 

1. Add an if statement around the recipe code:  
        if node[:instance_role] == 'instance_role'  
    Where instance_role is one of the following:  
	* `app_master` (for the application master)  
	* `app` (for an application slave)  
	* `solo` (for a single instance)
	* `db_master` (for a database master)  
	* `db_slave` (for a database slave)
	* `util` (for a utility instance)  	
	
### Examples

In the [[ssh_tunnel recipe|https://github.com/engineyard/ey-cloud-recipes/blob/master/cookbooks/ssh_tunnel/recipes/default.rb]], to have the recipe run on only the application master in a clustered environment:  
 
    if node[:instance_role] == 'app_master' 
    ...
    end  

However, to have the same recipe run in either a clustered environment or a single-instance environment, write the condition this way:

    if ['app_master', 'solo'].include?(node[:instance_role])
    ...
    end

### About utility servers

If you want a recipe to run on a particular utility server, you can specify it by name instead of by instance role.

For example, 
    if node[:name] == 'myutility' 
    ...
    end

Where *myutility* is the name of a utility instance.

<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
    <td>the engineyard gem</td><td>[[Engine Yard CLI User Guide|ey_cli_user_guide]].</td>
  </tr>
  <tr>
	<td> the ey recipes commands</td><td>[[Engine Yard CLI User Guide|ey_cli_user_guide]].</td>
  </tr>
  <tr>
	<td> custom Chef recipes</td><td>[[Common Custom Chef Solutions|http://www.engineyard.com/blog/2011/common-custom-chef-solutions/]] blog post by Tim Littlemore.</td>
  </tr>
</table>



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
[11]: #topic11        "topic11"
[12]: #topic12        "topic12"