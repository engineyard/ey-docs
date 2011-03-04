# Customize Unicorn

Unicorn does not employ **keep files** for it's configuration and monitrc files.  Because of this we wanted to enable an way to customize unicorn without using keepfiles.

As we were re-writing the Control Scripts for passenger we desired a simple way to set things in the *environment*.  

Updating `env.custom` we can do the following and more:

  - Unicorn Configuration File.
  - Starting Unicorn with bundle exec versus running the system unicorn.

## env.custom

If your application is named myapp you would update the following file:

    /data/myapp/shared/config/env.custom

### Alternate Configuration File

If you need to specify an alternate configuration file you could do the following in the `env.custom` file:

<code>
UNICORN_CONF="/data/myapp/shared/config/custom_unicorn.rb"
</code>

Then copy `/data/myapp/shared/config/unicorn.rb` to `/data/myapp/shared/config/custom_unicorn.rb` and customize it as you see fit.  

To restart unicorn run:

<code>
/engineyard/bin/app_myapp reload
</code>

### Unicorn in Bundler

First in order to run Unicorn under bundler you must add unicorn to the Gemfile and re-deploy.  Update `env.custom` with the following:

<code>
RUBY="/usr/bin/bundle"
UNICORN_EXEC="exec unicorn"
</code>

Then restart unicorn like below:

<code>
/engineyard/bin/app_myapp reload
</code>

Provided Unicorn restarted properly your unicorn should now be running under bundler.  If it does not please check out the unicorn log files in:

    /data/myapp/shared/log
