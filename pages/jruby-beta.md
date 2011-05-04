# Getting Started with JRuby

## Before starting

  * Your application should use Bundler 1.0.10 or later to manage gems.
  * Gemfile must include `trinidad`.

## Preparing an existing Rails app

- An example snippet to your Gemfile:

<pre>
    source 'http://gems.engineyard.com'
    
    platforms :jruby do
      gem 'activerecord-jdbc-adapter'
      gem 'jruby-openssl'
      gem 'jdbc-mysql', :require => false
      gem 'jdbc-sqlite3', :require => false
      gem 'trinidad'
    end
    platforms :ruby do
      gem 'sqlite3-ruby', :require => 'sqlite3'
    end
</pre>

or, equivalently:

<pre>
  gem 'activerecord-jdbc-adapter', :platforms => :jruby
  gem 'jruby-openssl', :platforms => :jruby
  gem 'jdbc-mysql', :require => false, :platforms => :jruby
  gem 'jdbc-sqlite3', :require => false, :platforms => :jruby
  gem 'trinidad', :platforms => :jruby
  gem 'sqlite3-ruby', :require => 'sqlite3', :platforms => :ruby
</pre>

Then run these commands to update your Gemfile.lock:

<pre>
    rvm install jruby
    rvm jruby
    bundle install
    
    git commit -a -m "Gemfile updated for jruby/trinidad"
    git push origin
    
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

  - Press **Create New Environment** in the upper right corner of the AppCloud Dashboard page.
  - Choose an application to deploy, and press **Add Environment**.
    - If you're deploying a new application, press **Create New Application**, fill in the repository URI, choose the application type and version, and press **Create Application**.
  - On the **Create New Environment** screen, enter the **Environment Name**, select the **Framework Environment**, and select **Trinidad as your application server stack.
    - For the moment, you will also need to expand the **Show Advanced Options** section and select **JRuby** as your **Ruby Runtime**.
  - Press **Create Environment** to finish creating the environment.
  - Choose your server configuration as usual, and click on **Boot This Configuration**.
  - After the instance(s) have booted, your application code will be deployed!
  - Back in the Instances tab, click on "HTTP" link to view your application.

## Known Issues

  - `engingeyard` gem is not supported on JRuby. There is a dependency on `ruby-termios` gem which depends on native C extension. This appears to have problems, even with the announced C extension support on JRuby.