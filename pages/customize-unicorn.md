# Customize Unicorn

Unicorn does not employ keep files for its configuration file. This page describes how to customize Unicorn without a keep file.

The process is:

1. [Create an alternate Unicorn configuration file.][1]
2. [Start Unicorn with Bundler instead of running the system Unicorn.][2]

<h2 id="topic1">To create the customized Unicorn configuration file and restart Unicorn</h2>

1. Add this line to the file `/data/_myapp_/shared/config/env.custom` (where _myapp_ is the name of your application):

        UNICORN_CONF="/data/_myapp_/shared/config/custom_unicorn.rb"

    This specifies an alternate configuration file for Unicorn.

2. Copy `/data/_myapp_/shared/config/unicorn.rb` to `/data/_myapp_/shared/config/custom_unicorn.rb`.

3. Edit the `/data/_myapp_/shared/config/custom_unicorn.rb` with the customizations that you want.

4. Restart Unicorn so that the customizations take effect:

        /engineyard/bin/app_myapp reload 


<h2 id="topic2"> To start Unicorn in Bundler</h2>

1. Add the Unicorn gem to your Gemfile:

        gem 'unicorn'
    
3. Run these commands to update your Gemfile.lock:

        bundle install

        git commit -a -m "Gemfile updated for Unicorn"
        git push origin
		
[1]: #topic1        "topic1"
[2]: #topic2        "topic2"