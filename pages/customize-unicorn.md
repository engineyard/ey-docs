# Customize Unicorn

Unicorn does not employ **keep files** for its configuration and monitrc files.  Because of this, we wanted to enable Unicorn customization without keep files.

As we were re-writing the Control Scripts for Passenger, we wanted a simple way to set things in the *environment*.  

Updating `env.custom` we can do the following and more:

  - Unicorn Configuration File.
  - Starting Unicorn with bundle exec versus running the system Unicorn.

## env.custom

If your application is named myapp, you would update the following file:

    /data/myapp/shared/config/env.custom

### Alternate configuration file

To specify an alternate configuration file, do the following in the `env.custom` file:

<code>
UNICORN_CONF="/data/myapp/shared/config/custom_unicorn.rb"
</code>

Then copy `/data/myapp/shared/config/unicorn.rb` to `/data/myapp/shared/config/custom_unicorn.rb` and customize it as you see fit.  

To restart a Unicorn run:

<code>
/engineyard/bin/app_myapp reload
</code>

### Unicorn in bundler

No modifications are needed to use Unicorn with bundler. Just add the unicorn gem to your Gemfile.