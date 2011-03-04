# Adding Cron Jobs

Adding a scheduled task (cron job) to your environment can be done via your dashboard.
The task will be added to your application master instance under the crontab of either your deploy user or the root user (you choose which) and will only run on the application master by default. This avoids any potential adverse effects of a task accidentally running multiple times on different instances.

## Adding a new job
To add a new cron job
{{:appcloud:guides:environments:moreoptions.png?400|'More Options' menu}}

  - Click **More Options** then click on **Crontabs** 
  - You will then be presented with the **Scheduled Jobs** page

{{:appcloud:guides:environments:scheduled-jobs.png?400|Scheduled Jobs page}}

  - Give the job a name for reference
  - Enter the command to run (see notes on commands)
  - Choose which user's crontab to add this to
  - Define a schedule (if you are familiar with cron syntax, you may prefer to use the advanced interface)
  - Click **Create**
  - Return to your dashboard and click the **Please Rebuild** or **Deploy** button as prompted

## Notes about commands

One of the most common uses for the crontab is to schedule the running of rake tasks or Rails runner scripts. When setting up such a task, you need to be aware of the following points:
  - rake tasks and runners need to be run from your application root
  - the cron environment does not have the same variables available as your standard shell (i.e.: RAILS_ENV will not be defined)

With that in mind, when adding such a task under cron, you will need to add your command like one of the examples below.

### Example rake task
<code>cd /data/appname/current && RAILS_ENV=production rake some:task</code>

### Example Rails runner task
<code>cd /data/appname/current && ./script/runner -e production 'SomeClass.method'</code>

or for Rails 3:

<code>cd /data/appname/current && rails runner -e production 'SomeClass.method'</code>

## Advanced Usage
### Running crons on different instances
As mentioned at the start of this document, the default setup for scheduled jobs is to only configure them on the app master to avoid inadvertently running duplicate jobs. If you want to run cron jobs on other instances, then you need to create a [custom chef recipe](appcloud/howtos/customizations/Custom Chef Recipes) to add the jobs to the crontabs of different instances.

A common requirement is to have cron jobs running on a utility instance, to achieve this you might write code like the following inside a cookbook recipe file:

<code>
if node[:name] == 'instance_name'
  cron "task_name" do
    minute  '*/15'
    user    'deploy'
    command "cd /data/appname/current && rails runner -e production 'SomeModel.some_method'"
  end
end
</code>
Above, *instance_name* would be the name you gave your utility instance when you created it. The *task_name* is just a label for the job. (similar to how you would give the job a name via the dashboard). Note that the **minute** method is using the cron syntax to specify 'every 15 minutes' - you can also specify 'hour' and 'day' within the code block.

### Lockrun

Any frequently scheduled jobs can sometimes potentially run longer than their scheduled window allows. This can cause multiple runs of the same task to overlap. For example, if you have a rake task that runs every five minutes and one of these runs takes fifteen minutes to complete, cron will happily fire up another two runs of this task once their scheduled time comes round. This can cause various effects, dependent on what the task does, but most often causes spikes in server load and memory consumption. This problem tends to slow down the running of subsequent tasks, causing more overruns and compounding the issue.

To solve this common problem, we recommend the use of [lockrun](http://unixwiz.net/tools/lockrun.html). Lockrun is not installed by default so you will need to install it as outlined in the [manage UNIX packages](/appcloud/guides/applications/home#manage-unix-packages) article.

Once you have lockrun installed on your instance(s), you can then use it in your cron jobs by writing the commands like this:

<code>/usr/bin/lockrun --lockfile=/tmp/jobname.lockrun -- sh -c "cd /data/appname/current && rake RAILS_ENV=production some:task"</code>


## Troubleshooting cron issues =====
==== Is cron running? ====
If you find that none of your cron jobs appear to be running, first check that cron is actually running with the following command:

<code>/etc/init.d/vixie-cron status</code>

If this command states that cron is not running, it may require restarting with this command:

<code>/etc/init.d/vixie-cron restart</code>

==== Are your scripts working? ====
If you can run the scripts successfully manually, but they fail when running under cron, you're going to need to see what output comes out of the command when run under cron.

By default, cron will try and send any output from jobs via email to the user that ran the job. As our instances do not have a mailserver running by default, the sending of these messages will fail and the output ends up in a **dead.letter** file. These files are located in the home directory of the user that ran the job. For example, you will find output of jobs run by root in `/root/dead.letter` (use `sudo` to read this file) and the output of jobs by your deploy user would be in `/home/deploy/dead.letter` (assuming `deploy` is the name of this user).

Note that dead.letter can contain output from multiple jobs and does not have any timestamps in place, so you may wish to modify the script that is being called by cron to output some extra information if you are trying to debug a problem. You can also delete this file and it will be recreated as necessary when new output is emailed from cron.