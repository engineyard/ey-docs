# Bundler tips

At Engine Yard, we advocate for the use of Bundler in users' applications, mainly
because it makes dependency management very easy. Avrohom Katz wrote a
[post](http://www.engineyard.com/blog/2011/bundler-pro-tip/) with pro tips for
Bundler and Evan Machnic wrote a [post](http://www.engineyard.com/blog/2011/bundler-and-rails-3-1-on-appcloud/)
about some issues with Bundler and Rails 3.1. Still, there are some tips for
using Bundler that will make deployment much easier.

## Bundle your bundler

As discussed in Evan's post, specifying a version of Bundler in your Gemfile
solves an issue described at [[Bundler Gemfile Version|bundler-gemfile-version]]

1. Specify the version in your Gemfile
        gem 'bundler', '~> 1.0.15'

2. Update the Gemfile.lock from your development machine terminal
        bundle update bundler
    
## Use Bundle exec

Bundler keeps all of the gems that you have specified in its own kind of
environment. To make sure you're using only the specified gems, you can use
the command `bundle exec`

Below are a couple of commands that take advantage of `bundle exec`

* Migrate the database using the specified Rake version
        bundle exec rake db:migrate
    
* Check the versions of gems that Bundler is using for your application
        bundle exec gem list

## Use Binstubs

Engine Yard automatically installs binstubs in your application. This basically
gives you the same abilities as `bundle exec` without having to call that command
everytime. If for some reason the binstubs aren't installed, you can install them
with `bundle install --binstubs`

* `bundle exec <executable>` is the same as `bin/<executable>`

## Bundle update

A note on using `bundle update`: it is usually only advisable to update a specific
gem and not every gem. Using `bundle update <gem>` will update that gem and it's
dependencies and will actually give you warnings if that update will break your
other dependencies. If you just run `bundle update`, that will update all the
specified gems but there is more risk of breaking dependencies.

## Pack your gems

Sometimes, you may want to keep your gems with your application so that you don't
have to call out to [rubygems.org](http://rubygems.org) to install the gems. This
is where `bundle pack` comes in handy. Just run that command from your development
machine which will pack the gems into `vendor/cache`. When you deploy, run
`bundle install --local` to install the gems from the `vendor/cache` directory.

<!--commenting out this section. see DOC-319 for details
## Installation groups

Currently, the only way to configure the groups passed to `bundle
install --without` is by creating an `eydeploy.rb` in the root of your
application. Then put the following in it and modify as needed:

    def bundler_10_installer(version)
      opts = [
        "--deployment",
        "--path #{c.shared_path}/bundled_gems",
        "--binstubs #{c.binstubs_path}",
        "--without development test other groups etc"
      ]
      BundleInstaller.new(version, opts.join(" "))
    end
-->