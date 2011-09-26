# Customize Unicorn

## Introduction

Unicorn does not employ **keep files** for its configuration file.  Because of this, we wanted to show you how you can enable Unicorn customization without the use of a keep file.

As we were re-writing the control scripts for Passenger, we wanted a simple way to set things in the *environment*.  The file `env.custom` was created to solve this problem.

By updating the file `/data/myapp/shared/config/env.custom` we can do the following:

  - Create an alternate Unicorn configuration file.
  - Start Unicorn with bundler versus running the system Unicorn.

## Unicorn env.custom file

If your application is named myapp, you would update the following file:

    /data/myapp/shared/config/env.custom

## Alternate configuration file

To specify an alternate configuration file, do the following in the `env.custom` file:

    UNICORN_CONF="/data/myapp/shared/config/custom_unicorn.rb"

Then copy `/data/myapp/shared/config/unicorn.rb` to `/data/myapp/shared/config/custom_unicorn.rb` and customize it as you see fit.

To restart a Unicorn run:

    /engineyard/bin/app_myapp reload

## Unicorn in bundler

You do want to add the Unicorn gem to your `Gemfile`.

    gem 'unicorn'
    
Then also run `bundle install` to add it to your `Gemfile.lock` for deployment.  Check it all into your repo and you're ready to deploy.