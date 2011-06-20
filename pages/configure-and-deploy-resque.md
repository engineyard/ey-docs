# Configuring and Deploying Resque

Resque is a Ruby job queue. You can find it, and all you need to know about coding for it [[here|http://github.com/defunkt/resque]]. This is the Readme for resque, it's quite comprehensive and worth reading more than once.

***Important Caveat: A lot of the configuration options are dependent on our portage package ey_monit_scripts at version 0.18.3. At the time of writing, this version isn't available on either xCloud or AppCloud, so to work with this please contact EY support staff who can provide you with a copy.***

## Anatomy of our Resque Configuration

The files used to configure Resque in your application are:

<table>
  <tr>
    <th>File</th><th>Description</th>
  </tr>
  <tr>
    <td>/data/{app_name}/shared/config/resque.yml</td><td>Points to redis database, is symlinked to your $RAILS_ROOT/config directory.</td>
  </tr><tr>
    <td>resque_?.conf</td><td>One of each of these per instance to list the queues for that worker</td>
  </tr><tr>
    <td>/engineyard/bin/resque</td><td>Monit wrapper provided by engineyard</td>
  </tr><tr>    
    <td>/etc/monit.d/resque_{app_name}.monitrc</td><td>Monit configuration file for Resque</td>
  </tr>
</table>

## Quick Start Guide

If you just want to get going, and work the rest out later, here's the quick version:

  - Be familiar with our docs on:
      -  [[using chef recipes|custom-chef-recipes]]
      -  and [[deploy hooks|deploy_hooks_api]]
  - Check you have these gems installed\\ 
      - [[resque|http://rubygems.org/gems/resque]]
      - [[redis|http://rubygems.org/gems/redis]]
      - [[redis-namespace|http://rubygems.org/gems/redis-namespace]]
      - [[yajl-ruby|http://rubygems.org/gems/yajl-ruby]]
  - Add `config/resque.yml` as per the Resque `README`
      - Typically this will be in `/data/{app_name}/shared/config/resque.yml` and you will use a deploy hook to symlink this into `current/config`.
  - For each worker you wish to have create a `resque_{x}.conf`
      - (where x is a number for the worker counting from 0) IF you want to use this mechanism to prioritize. Otherwise you can simply skip this step.
  - Enable the resque recipe in chef (read `/etc/chef-custom/recipes/cookbooks/resque/README.rdoc`), and upload your recipes.
  - Add deploy hooks to your code to ensure that the workers are restarted during deploys.

## Thinking Through the Configuration

### Redis configuration

All our AppCloud environments use redis on the master db server (or on the solo instance if just one slice is used with out a separate db) as part of our cloud apps infrastructure. Typically for Resque you will use this redis instance, however you are of course free to use a custom chef recipe to put a redis instance on your utility or any other slice you like and use that.

### Queues vs Workers

The first thing to decide is how many workers you will need, and how you will allocate those workers.

When writing your resque code, you will have assigned jobs to queues. Its important to note, that queues and workers aren't synonymous. A worker can service many queues, and each queue can be serviced by many workers.

You can have as many workers as your resources will allow. Each worker in our default setup will be monitored by monit, and so will have one stanza in our monit configuration per worker.

Each intended worker, will have a conf file in `/data/{APP}/shared/config` called `resque_{conf_name}.conf`.

So, for 3 workers, in an app called my_app you might have:
    /data/my_app/shared/config/resque_0.conf
    /data/my_app/shared/config/resque_1.conf
    /data/my_app/shared/config/resque_2.conf
    
Each of these will have a `QUEUE` statement as described in the resque `README`. The default is `QUEUE=*`.
However, you may customize it to list the queues you'd like handled by that worker. By choosing how you allocate your queues to your workers, you essentially prioritize the queues.

Each worker when run will have a memory foot print, approximately the size of one of your unicorns or passenger workers at start up. Every time it gets a job it will fork a child which will also be about that size, and it  will grow as big as it needs to. 

### Stopping Jobs

At different times, you'll be needing to stop, or restart your workers. Perhaps a job has exceeded its allowed memory, or you need to deploy new code or for any number of other reasons.

Workers can be asked to stop one of two ways, with either a `SIGTERM` or a `SIGQUIT` (`kill -15` or `kill -3`).

If they receive a `SIGQUIT`, they will allow an already running job to finish before quitting. If they receive a `SIGTERM`, then if there is a job running, that will be killed immediately, along with the worker.

So, the two things that need consideration then are how long your job will run for, and what are the consequences of a job being terminated during processing.

#### To TERM or to QUIT

If terminating your job mid process leaves you databases in a consistent state, doesn't result in half drawn thumbnails, or cause other embarrassing mishaps, then `SIGTERM` is the  simplest way forward. 

This will involve a line in the monit configuration like:

    stop program "/engineyard/bin/resque my_app term production resque_0.conf"

If for any reason the worker doesn't stop, the script will check for and kill its child, then itself with `kill -9`.

If however your job can't be interrupted, you'll need to ask it to stop with QUIT. This will involve a line in the monit configuration like:

    stop program "/engineyard/bin/resque my_app quit production resque_0.conf"

This will allow your script 60 seconds to try and finish its job, before the wrapper script will ensure that it has in fact died. Note, that for the sake of following conventions used in other monit wrapper scripts, `quit` and `stop` are synonyms.

#### Time to Die

However we have customers with jobs that 5, 10, and 30 minutes, and even up to 12 hours.

To cater for this, you can set a `GRACE_TIME` environment variable:

    stop program "/bin/env GRACE_TIME=300 /engineyard/bin/resque my_app stop production resque_0.conf"

will cause the wrapper script to wait 300 seconds before forcing the death of the worker.

### Deploy Time Considerations

Its important that resque gets restarted when you deploy. Firstly because if you don't your resque jobs will be being carried out with redundant code, possibly against the wrong database schema. Secondly, as only 3 releases are kept (by default), after the 3rd deploy the jobs will be running on code thats deleted from the disk. This is likely the case if you're intermittently seeing `NameError: Uninitialized Constant`.

The correct way to have resque restarted on each deploy is to have a line like:

    run "monit restart all -g {app_name}_resque" 

in your after_symlink deploy hook.

However, its also likely that you don't want your deploy to run while there are jobs still in action, or for resque to start a new job while the deploy is underway. So in either your `before_symlink` or `before_migrate` deploy hook, code like this might be in order:

Case 1. we have monit configured to use SIGQUIT, and want the workers to stop when they've finished the current job. We also don't want the deploy to proceed if jobs are running.

    run "sudo monit stop all -g fractalresque_resque"
    if %x[ps axo command|grep resque[-]|grep -c Forked].to_i > 0 
      raise "Resque Workers Working!!"
    end


Case 2. Monit is configured using `SIGTERM` - but we want the workers to stop when they've finished the current job and we don't want the deploy to proceed if jobs are running. However if they're not running, we want the workers stopped.

    if %x[ps axo command|grep resque[-]|grep -c Forked].to_i > 0 
      raise "Resque Workers Working!!"
    else
      run "sudo monit stop all -g fractalresque_resque"
    end


These are just suggested starting points, you'll need to consider what needs to happen in your own situation.

### Debugging

Resque will log its activity to:
   /data/{APP}/shared/log/resque_?.log
   
So, for the worker associated `resque_0.conf`, its activity can be seen in 
   /data/{APP}/shared/log/resque_0.log
   
Resque changes the verbosity of its logging, when `VERBOSE` or `VVERBOSE` environment variables are set. To set these your monit config's start line will look like 
    start program "/bin/env VERBOSE=1 /engineyard/bin/resque my_app start production resque_0.conf"
On top of that the monit resque script logs its handling of resque to 
    /var/log/syslog

## Frequent Small Jobs
If you have a queue thats servicing frequent small jobs, we've experienced bottle neck that you may need to grapple with.

#### Class Caching
So, you're in production, you've followed the `README` and loaded the environment in your rake file, and you've got `config.cache_classes = true` (which is the default).

In case you're not aware, this setting in `config/environments/production.rb` is why you don't see all those pesky `SHOW FIELDS` (assuming MySQL) statements in your production.log, like you do while you're developing. Its also why you need to restart your app server when you deploy code, unlike in development. In development, the appropriate models are loaded on each request (complete with changes), in production they're loaded on demand, the first time their called.

So why is that a problem? Because in resque, the worker doesn't do the work, the child it forks does. For all useful purposes it has a copy of the worker with your Rails app. At this stage no models have been accessed, and this is what the forked child inherits. 

Once this child starts processing your job, as each model pertinent to that job is touched, the class code defining that model is ran. This involves issuing a `SHOW FIELDS` for each model involved to the database which has locking implications for your db. Further some fat models, may also have a substantial time cost spent in ruby itself. In fact for a very quick job, most of the time could be spent instantiating your models.

A very simple solution is to modify your Rakefile or, wherever you set your environment up, to change this line:

    task resque:setup => :environment
    
to something like this:


    task resque:setup => :environment do
      User.columns
      Post.columns
    end


Or perhaps as away to hit all your models at once:    


    task resque:setup => :environment do    
      ActiveRecord::Base.send(:subclasses).each { |klass|  klass.columns }
    end