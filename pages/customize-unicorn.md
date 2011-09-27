# Customize Unicorn

## Introduction

Unicorn does not employ **keep files** for its configuration file. This page describes how to customize Unicorn without a keep file.

By updating the file `/data/myapp/shared/config/env.custom` we can do the following:

  - Create an alternate Unicorn configuration file.
  - Start Unicorn with Bundler versus running the system Unicorn.

## Unicorn env.custom file

Update the following file, where myapp is the name of your application:

    /data/myapp/shared/config/env.custom

## Alternate configuration file

To specify an alternate configuration file, do the following in the `env.custom` file:

    UNICORN_CONF="/data/myapp/shared/config/custom_unicorn.rb"

Then copy `/data/myapp/shared/config/unicorn.rb` to `/data/myapp/shared/config/custom_unicorn.rb` and customize it as you see fit.

To restart a Unicorn run:

    /engineyard/bin/app_myapp reload

## Unicorn in bundler

Add the Unicorn gem to your `Gemfile`:

    gem 'unicorn'
    
Run `bundle install` to add it to your `Gemfile.lock` for deployment.  Check it all into your repo and you're ready to deploy.