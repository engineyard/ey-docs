# Configuring and deploying Resque

Resque is a Ruby job queue. You can find it and all you need to know about coding for it in the [[readme for Resque|http://github.com/defunkt/resque]].

## Anatomy of our Resque configuration

The files used to configure Resque in your application are:

<table>
  <tr>
    <th>File</th><th>Description</th>
  </tr>
  <tr>
    <td>/data/app_name/shared/config/resque.yml</td><td>Points to redis database, is symlinked to your $RAILS_ROOT/config directory</td>
  </tr><tr>
    <td>resque_?.conf</td><td>One of each of these per instance to list the queues for that worker</td>
  </tr><tr>
    <td>/engineyard/bin/resque</td><td>Monit wrapper provided by engineyard</td>
  </tr><tr>    
    <td>/etc/monit.d/resque_app_name.monitrc</td><td>Monit configuration file for Resque</td>
  </tr>
</table>

## Quick start guide

If you want to get going and work the rest out later, here's the quick version. 

### To configure and deploy Resque for an Engine Yard Cloud environment

1. Be familiar with Engine Yard docs about:
    -  [[Using chef recipes|custom-chef-recipes]]
    -  [[Deploy hooks|use-deploy-hooks-with-engine-yard-cloud]]
2. Make sure you have these gems installed:
    - [[resque|http://rubygems.org/gems/resque]]
    - [[redis|http://rubygems.org/gems/redis]]
    - [[redis-namespace|http://rubygems.org/gems/redis-namespace]]
    - [[yajl-ruby|http://rubygems.org/gems/yajl-ruby]]
3. Add `config/resque.yml` as per the Resque readme
    - Typically this is in `/data/app_name/shared/config/resque.yml` and you use a deploy hook to symlink this into `current/config`.
4. For each worker you want to have, create a `resque_x.conf`
    - (where x is a number for the worker counting from 0) If you want to use this mechanism to prioritize. Otherwise, you can skip this step.
5. Enable the Resque recipe in chef (read `/etc/chef-custom/recipes/cookbooks/resque/README.rdoc`), and upload your recipes.
6. Add deploy hooks to your code to ensure that the workers are restarted during deploys.

## Thinking through the configuration

### Redis configuration

All our environments use redis on the master database instance (or on the solo instance if just one slice is used with out a separate database) as part of our cloud application infrastructure. Typically for Resque, you use this redis instance. However, you can use a custom chef recipe to put a redis instance on your utility or any slice you want and use that.

### Queues vs workers

First decide how many workers you need and how you will allocate those workers.

When writing your Resque code, you have assigned jobs to queues. It is important to note that queues and workers aren't synonymous. A worker can service many queues, and each queue can be serviced by many workers.

You can have as many workers as your resources allow. Each worker in our default setup is monitored by monit and so has one stanza in our monit configuration per worker.

Each intended worker has a conf file in `/data/app_name/shared/config` called `resque_conf_name.conf`.

So, for three workers, in an application called myapp, you might have:
    /data/myapp/shared/config/resque_0.conf
    /data/myapp/shared/config/resque_1.conf
    /data/myapp/shared/config/resque_2.conf
    
Each of these has a `QUEUE` statement as described in the Resque readme. The default is `QUEUE=*`.
However, you may customize it to list the queues you'd like handled by that worker. By choosing how you allocate your queues to your workers, you essentially prioritize the queues.

Each worker, when run, has a memory footprint approximately the size of one of your Unicorn or Passenger workers at start up. Every time it gets a job, it forks a child which is also be about that size, and it grows as big as it needs to. 

### Stopping jobs

At different times, you need to stop or restart your workers. Perhaps a job has exceeded its allowed memory, or you need to deploy new code or for any number of other reasons.

Workers can be asked to stop one of two ways, with either a `SIGTERM` or a `SIGQUIT` (`kill -15` or `kill -3`).

If they receive a `SIGQUIT`, they allow an already running job to finish before quitting. If they receive a `SIGTERM`, then, if there is a job running, that is killed immediately, along with the worker.

So, the two things that need consideration are how long your job will run for and what are the consequences of a job being terminated during processing.

### To TERM or to QUIT

If terminating your job mid-process leaves your databases in a consistent state, doesn't result in half drawn thumbnails, or cause other embarrassing mishaps, then `SIGTERM` is the way forward. 

This involves a line in the monit configuration like:

    stop program "/engineyard/bin/resque myapp term production resque_0.conf"

If for any reason the worker doesn't stop, the script checks for and kill its child and then itself with `kill -9`.

If, however, your job can't be interrupted, you need to ask it to stop with QUIT. This involves a line in the monit configuration like:

    stop program "/engineyard/bin/resque myapp quit production resque_0.conf"

This allows your script 60 seconds to finish its job before the wrapper script ensures that it has, in fact, died. Note that for the sake of following conventions used in other monit wrapper scripts, `quit` and `stop` are synonyms.

### Time to die

However, we have customers with jobs that 5, 10, and 30 minutes, and even up to 12 hours.

To cater for this, you can set a `GRACE_TIME` environment variable:

    stop program "/bin/env GRACE_TIME=300 /engineyard/bin/resque myapp stop production resque_0.conf"

This causes the wrapper script to wait 300 seconds before forcing the death of the worker.

### Deploy time considerations

It is important that Resque gets restarted when you deploy. Firstly, because, if you don't, your Resque jobs are carried out with redundant code, possibly against the wrong database schema. Secondly, because only three releases are kept (by default), after the third deploy, the jobs are running on code that is deleted from the disk. This is likely the case if you are intermittently seeing `NameError: Uninitialized Constant`.

The correct way to have Resque restarted on each deploy is to have a line like:

    run "monit restart all -g app_name_resque" 

in your after_symlink deploy hook (where app_name is the name of your application).

However, it is also likely that you don't want your deploy to run while there are jobs still in action or for Resque to start a new job while the deploy is underway. So, in either your `before_symlink` or `before_migrate` deploy hook, code like this is in order:

Case 1. We have monit configured to use SIGQUIT and want the workers to stop when they've finished the current job. We also don't want the deploy to proceed if jobs are running.

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

In both cases, make sure to explicitly start Resque after your deploy has finished.  Add a `before_restart` deploy hook similar to this:

	run "sudo monit start all -g fractalresque_resque"

These are suggested starting points, you need to consider what needs to happen in your own situation.  

### Debugging

Resque logs its activity to:
   /data/app_name/shared/log/resque_?.log
   
So, for the worker associated `resque_0.conf`, its activity can be seen in 
   /data/app_name/shared/log/resque_0.log
   
Resque changes the verbosity of its logging, when `VERBOSE` or `VVERBOSE` environment variables are set. To set these your monit config's start line will look like 
    start program "/bin/env VERBOSE=1 /engineyard/bin/resque my_app start production resque_0.conf"
On top of that the monit resque script logs its handling of Resque to 
    /var/log/syslog

## Frequent small jobs
If you have a queue that is servicing frequent small jobs, we've experienced bottle neck that you may need to grapple with.

### Class caching
So, you're in production, you've followed the Resque readme and loaded the environment in your rake file, and you've got `config.cache_classes = true` (which is the default).

In case you're not aware, this setting in `config/environments/production.rb` is why you don't see all those pesky `SHOW FIELDS` (assuming MySQL) statements in your production.log, like you do while you're developing. Its also why you need to restart your application server when you deploy code, unlike in development. In development, the appropriate models are loaded on each request (complete with changes), in production they're loaded on demand, the first time their called.

So why is that a problem? Because in Resque the worker doesn't do the work, the child it forks does. For all useful purposes, it has a copy of the worker with your Rails application. At this stage no models have been accessed, and this is what the forked child inherits. 

After this child starts processing your job, as each model pertinent to that job is touched, the class code defining that model is ran. This involves issuing a `SHOW FIELDS` for each model involved to the database which has locking implications for your database. Further some fat models, may also have a substantial time cost spent in ruby itself. In fact for a quick job, most of the time could be spent instantiating your models.

A simple solution is to modify your Rakefile or, wherever you set your environment up, to change this line:

    task "resque:setup" => :environment
    
to something like this:


    task "resque:setup" => :environment do
      User.columns
      Post.columns
    end


Or perhaps as a way to hit all your models at once:    


    task "resque:setup" => :environment do    
      ActiveRecord::Base.send(:subclasses).each { |klass|  klass.columns }
    end
