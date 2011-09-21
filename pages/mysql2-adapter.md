# Error message: "Please install the mysql2 adapter"

When deploying, the following error may appear in deploy logs

    Please install the mysql2 adapter: `gem install activerecord-mysql2-adapter`
    (no such file to load -- active_record/connection_adapters/mysql2_adapter)
    
This may seem confusing, especially if you have added the `mysql2` gem to your
Gemfile. The problem is that the 0.3.x branch of `mysql2` doesn't include the
adapter.

## Rails 3.0.x

If your application is Rails 3.0.x, you need to specify the version of the gem
in your Gemfile like so:

    gem 'mysql2', '~> 0.2.13'
    
And then run `bundle update mysql2` to make sure and get the specified version.

## Rails 3.1.x

The `activerecord-mysql2-adapter` is included in Rails 3.1 by default so you need
the 0.3.x branch of `mysql2`. In your Gemfile:

    gem 'mysql2', '~> 0.3.7'
    
## Error: `*** extconf.rb failed ***`

When you install the `mysql2` gem on your local machine, you will run into
errors if MySQL is not installed. You have two options.

1. Install MySQL

  You can install MySQL on your local computer which is a good idea if you are
  planning to do a lot of development and want to test on a database like the
  one on Engine Yard Cloud. The easiest way is to use [Homebrew](http://mxcl.github.com/homebrew/)
  or [MacPorts](http://www.macports.org).

2. Bundler Groups

  Bundler provides groups to make managing dependencies on different environments
  easy. By default, if you run `bundle install`, it will install dependencies
  for all of the groups. You can also specify the groups you don't want installed.
  For our example, we'll specify the 'production' group for the `mysql2` gem.

        gem 'mysql2', '~> 0.2.13', :group => :production
    
  Then we just need to run Bundler without the 'production' group:

        bundle install --without production
    
  When you deploy to Engine Yard Cloud, `mysql2` will be installed if your environment
  is set to 'production'. 