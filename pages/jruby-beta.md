# Getting Started with JRuby

## Before starting

  * Your application should use Bundler 1.0.10 or later to manage gems.
  * Gemfile must include `trinidad`.

## Preparing an existing Rails app

- An example snippet to your Gemfile:

<pre>
  platforms :jruby do
    gem 'jruby-openssl'
    gem 'trinidad'

    gem 'activerecord-jdbc-adapter'

    # Choose the jdbc driver according to your database engine
    gem 'jdbc-mysql', :require => false
    gem 'jdbc-sqlite3', :require => false
  end
</pre>

Then run these commands to update your Gemfile.lock:

<pre>
  rvm install jruby
  rvm jruby
  bundle install

  git commit -a -m "Gemfile updated for JRuby/Trinidad"
  git push origin
</pre>

To use the `ey deploy` CLI tool:

<pre>
  rvm --create jruby@ey exec gem install engineyard
  rvm wrapper jruby@ey --no-prefix ey
</pre>

## Steps

  - Create a new application in the AppCloud Dashboard page.
  - Create a new environment and choose **Trinidad** as your application server stack.
  - Boot the environment configuration.
  - Back in the Instances tab, click on "HTTP" link to view your application.
