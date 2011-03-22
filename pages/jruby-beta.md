# Getting Started with JRuby

## Before starting

  * Do note that this is in a very early stage of development. See below for known issues.
  * Your application should use Bundler 1.0.1 or later to manage gems.
  * Gemfile must include glassfish (be sure that bundler resolves the version to 1.0.3 or later).

## Preparing an existing Rails app

- An example snippet to your Gemfile:

<pre>
    source 'http://gems.engineyard.com'
    
    if defined?(JRUBY_VERSION)
      gem 'activerecord-jdbc-adapter'
      gem 'jruby-openssl'
      gem 'jdbc-mysql', :require => false
      gem 'jdbc-sqlite3', :require => false
      gem 'glassfish'
    else
      gem 'sqlite3-ruby', :require => 'sqlite3'
    end
</pre>

or, equivalently:

<pre>
  gem 'activerecord-jdbc-adapter', :platforms => :jruby
  gem 'jruby-openssl', :platforms => :jruby
  gem 'jdbc-mysql', :require => false, :platforms => :jruby
  gem 'jdbc-sqlite3', :require => false, :platforms => :jruby
  gem 'glassfish', :platforms => :jruby
  gem 'sqlite3-ruby', :require => 'sqlite3', :platforms => :ruby
</pre>

Then run these commands to update your Gemfile.lock:

<pre>
    rvm install jruby
    rvm jruby
    bundle install
    glassfish .
    
    git checkout -b jruby
    git commit -a -m "Gemfile updated for jruby/glassfish"
    git push origin jruby
    
    rvm 1.8.7
    gem install engineyard --pre --source http://gems.engineyard.com
</pre>

If you are not using RVM, do this in `$RAILS_ROOT` to update `Gemfile`:

<pre>
    jruby -S bundle bundle install
    git add Gemfile*
    git commit -m 'Update Gemfile* for JRuby'
    git push
</pre>

(Use branch of your choice.)

- `config.ru` needs to be modified to `require 'bundler/setup'` correctly before the first use of `Bundler`, like so:

<pre>
    # This file is used by Rack-based servers to start the application.
    # Find the latest bundler and get started                          
    
    require 'rbconfig'
    $:.unshift(Dir[RbConfig::CONFIG["libdir"] + "/ruby/gems/1.8/gems/bundler-*/lib"].sort.last)
    require 'bundler/setup'
    
    require ::File.expand_path('../config/environment',  __FILE__)
    run CloudstockDemo::Application
</pre>

## Steps


  - Choose **Quick Start** from the **Server Management** pane on the left.
  - Click on **Next**.
  - Fill in the repository URI, choose the application type and version.
  - Also choose **Framework Environment**, **JRuby** as your Ruby Runtime, and **Glassfish** as your Web Server Stack.
  - Click on **Next**.
  - You may be presented with a deploy key. In this case, install the deploy key in your repository as usual, and click **Next**.
  - If your application is running on Rails 3, Bundler will manage gems, so simply click **Next**. Otherwise, add gems as necessary.
  - Click on **Next**.
  - Optionally add SSH key as usual.
  - Click on **Next**.
  - Choose your server configuration as usual, and click on **Boot This Configuration**.
  - Note that this brings up the instances to a running state, but the application code is not deployed. To complete the application deployment, click on "Applications" in the environment box.
  - Click on **Deploy** button. Note, change "HEAD" to your jruby branch if necessary. Alternately, from the console.
  - ***NOTE:*** If you have migrations, you must run them manually via SSH:
  
<pre>
    ey ssh
    cd /data/APPNAME/current
    jruby -S rake db:migrate
</pre>
      
  - Back in the Instances tab, click on "HTTP" link to view your application.

## Known Issues

We are aware of these issues and working on identifying and fixing the causes.

  - Booting an environment does not completely deploy the application.
  - The "rake" command is not using the correct platform.
  - Only one application is allowed.

Also, not referenced above:

  - `engingeyard` gem is not supported on JRuby. There is a dependency on `ruby-termios` gem which depends on native C extension. This appears to have problems, even with the announced C extension support on JRuby.