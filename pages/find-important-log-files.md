# Find important log files

Use the following substitutions for illustration:

    Username: deploy
    Application Name: myapp
    Environment: production

## Home directory

A user home directory is created for you:

  `/home/deploy`

If you look closely, this is actually a symlink to the persistent /data device. Therefore, you can safely store items in the home directory. You will see that your home directory symlinks to:

  `/data/homedirs/deploy`

## System logger: syslog

In the `syslog` you will find system messages, monit restart calls, cron job notifications and various other useful bits of information.

  `/var/log/syslog`

## Rotate your logs with logrotate

By default, all parts of the stack are under `logrotate` to properly rotate and gzip old logs. The individual configuration files are found here:

  `/etc/logrotate.d/`

## Mongrel logs

If you have mongrels, your logs exist here: 

  `/var/log/engineyard/mongrel/myapp/`

## Environment log file

If you need access to the `production.log` you can find it here:

  `/data/myapp/shared/log/production.log`

## Nginx logs

We configure nginx to split access and error into two files:

  `/var/log/engineyard/nginx/myapp/myapp.access.log`
  `/var/log/engineyard/nginx/myapp/myapp.error.log`

## Nginx configuration

Nginx configuration is symlinked from `/data/nginx` to `/etc/nginx` to ensure that it persists when the instance is shutdown.

  `/data/nginx`

A configuration for your application is automatically generated and you will find it here:

  `/data/nginx/servers/myapp.conf`

## Monit configuration

Monit configuration files are located here:

  `/etc/monit.d/`

If you are running a mongrel instance, you should see your monit and mongrel configurations here:

  `/etc/monit.d/mongrel.myapp.monitrc`

When adding additional services under `monit`, we recommend you create a new file ending in `.monitrc` according to the same naming convention.  For example:

  `sphinx.myapp.monitrc`
  `dj.myapp.monitrc`

If you'd like to edit the master monit configuration, you can do so here:

  `/etc/monitrc`