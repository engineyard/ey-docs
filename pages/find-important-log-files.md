# Find important log files

This page describes:  

* [Home directory][1]
* [System logger: syslog][2]
* [Rotate your logs with logrotate][3]
* [Mongrel logs][4]
* [Environment log file][5]
* [Nginx logs][6]
* [Nginx configuration][7]
* [Monit log][8] 
* [Monit configuration][9]
* [Passenger 3 log][10]
* [Unicorn log][11]

Use the following substitutions for illustration:  
Username: `deploy`  
Application name: `myapp`  
Environment: `production`  

<h2 id="topic1"> Home directory </h2>

A user home directory is created for you:

  `/home/deploy`

If you look closely, this is actually a symlink to the persistent /data device. Therefore, you can safely store items in the home directory. You will see that your home directory symlinks to:

  `/data/homedirs/deploy`

<h2 id="topic2"> System logger: syslog </h2>

In the `syslog` you find system messages, monit restart calls, cron job notifications and various other useful bits of information.

  `/var/log/syslog`

<h2 id="topic3"> Rotate your logs with logrotate </h2>

By default, all parts of the stack are under `logrotate` to properly rotate and gzip old logs. The individual configuration files are found here:

  `/etc/logrotate.d/`

<h2 id="topic4"> Mongrel logs </h2>

If you have mongrels, your logs exist here: 

  `/var/log/engineyard/mongrel/myapp/`

<h2 id="topic5"> Environment log file </h2>

If you need access to the `production.log` you can find it here:

  `/data/myapp/shared/log/production.log`

<h2 id="topic6"> Nginx logs </h2>

We configure nginx to split access and error into two files:

  `/var/log/engineyard/nginx/myapp/myapp.access.log`  
  `/var/log/engineyard/nginx/myapp/myapp.error.log`

<h2 id="topic7"> Nginx configuration </h2>

Nginx configuration is symlinked from `/data/nginx` to `/etc/nginx` to ensure that it persists when the instance is shutdown.

  `/data/nginx`

A configuration for your application is automatically generated and you will find it here:

  `/data/nginx/servers/myapp.conf`

<h2 id="topic8"> Monit log </h2>

Monit log information is sent to the system logger. See [System logger: syslog][2] above.


<h2 id="topic9"> Monit configuration </h2>

Monit configuration files are located here:

  `/etc/monit.d/`

If you are running a mongrel instance, you should see your monit and mongrel configurations here:

  `/etc/monit.d/mongrel.myapp.monitrc`

When adding additional services under `monit`, we recommend you create a new file ending in `.monitrc` according to the same naming convention.  For example:

  `sphinx.myapp.monitrc`
  `dj.myapp.monitrc`

If you'd like to edit the master monit configuration, you can do so here:

  `/etc/monitrc`

<h2 id="topic10"> Passenger 3 log </h2>

Passenger 3 sends log information to:

    /var/log/nginx/passenger.log

<h2 id="topic11"> Unicorn log </h2>

Unicorn sends log information to three log files in the `/data/myapp/current/log` directory:

* `/data/app_name/current/log/unicorn.log`  
* `/data/app_name/current/log/unicorn.stderr.log`  
* `/data/app_name/current/log/unicorn.stout.log`  

<h2 id="topic12"> Chef recipe logs</h2>

See [[Log files for Chef recipes|find-important-log-files#topic9]]
    


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"
[7]: #topic7        "topic7"
[8]: #topic8        "topic8"
[9]: #topic9        "topic9"
[10]: #topic10        "topic10"
[11]: #topic11        "topic11"
[12]: #topic12        "topic12"
[13]: #topic13        "topic13"
[14]: #topic14        "topic14"
[15]: #topic15        "topic15"
[16]: #topic16        "topic16"
[17]: #topic17        "topic17"
