# 500 errors after deploying / Gemfile missing database adapter

If you get a 500 error after deploying your application or the environment page of the Dashboard shows a warning about missing a database adapter, then you might be missing the mysql2 gem. This page describes how to find out if you are missing the mysql2 gem and how to install it.

## To find out if you are missing the mysql2 gem

1. On your Dashboard, click Deployment history > View Log.

2. Search the deployments log for this error:  

        Please install the mysql2 adapter: `gem install activerecord-mysql2-adapter`
	    (no such file to load -- active_record/connection_adapters/mysql2_adapter)
	
If you find this message, install the mysql2 as described below ([To install the mysql2 gem for a Rails 3.0.x application][1] or [To install the mysql2 gem for a Rails 3.1.x application][2]).

<h2 id="rails30"> To install the mysql2 gem for a Rails 3.0.x application</h2>

1. Add the latest version of the 0.**2**.x mysql2 gem to your Gemfile, for example:

        gem 'mysql2', '~> 0.2.13'

2. Run bundle install to update Gemfile.lock.

        bundle install

3. If you get the error message "extconf.rb failed", see [To resolve the "extconf.rb failed" error][3] below.

<h2 id="rails31"> To install the mysql2 gem for a Rails 3.1.x application </h2>

1. Add the latest version of the 0.**3**.x mysql2 gem to your Gemfile, for example:

	    gem 'mysql2', '~> 0.3.7'

2. Run bundle install to update Gemfile.lock.

	    bundle install

3. If you get the error message "extconf.rb failed", see [To resolve the "extconf.rb failed" error][3] below.

<h2 id="extconf">To resolve the "extconf.rb failed" error</h2>

* If you see the "extconf.rb failed" error after running `bundle install` above, do one of the following:  

    * Install MySQL.  
        If you want to do development on your local machine and test your applications on a MySQL database before deploying, then install MySQL. On Mac OS X, consider using [Homebrew](http://mxcl.github.com/homebrew/) or [MacPorts](http://www.macports.org) to install and configure MySQL.
 
    * Use Bundler groups. (This allows you to deploy your application without installing MySQL locally.)
        1. Add `:group => :production` to the gem 'mysql2' line in your Gemfile. For example,  
                gem 'mysql2', '~> 0.2.13', :group => :production
            or
	            gem 'mysql2', '~> 0.3.7', :group => :production
	    2. Run bundle install without the production group:    
	            bundle install --without production  
	        When you deploy, `mysql2` is installed if Framework Environment is set to production in your environment.
	
        *About Bundler groups. *Bundler groups are for managing dependencies on different environments. By default, running `bundle install` installs dependencies for all of the groups. In Step 2 above, when you run bundle install locally, you skip the dependencies for the production group (which includes the mysql2 gem).
	
[1]: #rails30        "rails30"
[2]: #rails31        "rails31"
[3]: #extconf        "extconf"
