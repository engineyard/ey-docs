#Using Keep Files to edit Configurations on AppCloud

A **keep file** gives you the flexibility to modify configuration settings on your `/data` EBS volume.

When our Chef scripts go to write out these templates, it will check the filesystem for a file with *keep* in the filename. If that file exists, then the Chef script won't write out the template and leave the one currently there.

For example, if the template was to write out `/data/myservice.conf`, it would look for `/data/keep.myservice.conf`. If its found, it skips writing out this template.

To manually change these files and keep them, rename the default file from `file.name` to `keep.file.name`.

##Available Files to Change

* /etc/engineyard/collectd.conf
* /data/#{appname}/shared/config/database.yml
* /etc/haproxy.cfg
* /etc/monit.d/#{name}#{appname}.monitrc
* /etc/mysql/my.cnf
* /data/nginx/common/proxy.conf
* /data/nginx/common/servers.conf
* /data/nginx/common/fcgi.conf
* /data/nginx/nginx.conf
* /data/nginx/servers/#{appname}.rewrites
* /data/nginx/servers/#{appname}.conf
* /data/nginx/servers/#{appname}.ssl.conf
* /etc/conf.d/nginx
* /etc/redis/redis.conf
* /etc/monit.d/unicorn_#{app.name}.monitrc

## Nginx

Your application named **myapp** you'd take your standard:

    /data/nginx/servers/myapp.conf

And you need to rename that file to:    

    /data/nginx/servers/keep.myapp.conf

Then make all your changes and they will be used in your nginx server.

This also works for other files in the folder:

    /data/nginx/servers/*    


### Extra Step for nginx.conf

Changing the `/data/nginx/nginx.conf` file requires an additional step because it's a file required by nginx itself.

  - Rename the file from `/data/nginx.conf` to `/data/nginx/keep.nginx.conf`
  - Add a deploy hook to create a symlink:
        
        ln -nfs /data/nginx/keep.nginx.conf /data/nginx/nginx.conf


## Monit 

You can keep any monit configs inside of: `/etc/monit.d/*`

This can be useful if you're trying to increase the memory limit for mongrels or background processes, etc.

##database.yml

Once you've changed the `database.yml` to use a keep file, you'll need to use a [[deploy hook|use-deploy-hooks-with-engine-yard-appcloud]] to symlink `/data/#{appname}/shared/config/database.yml` to `/data/#{appname}/shared/config/keep.database.yml`.

##Problems with Keep Files

* Keep files won't be updated if a new instance is added/deleted. This can be a problem when you stop an instance and boot a new instance up since the hostname may have been replaced.