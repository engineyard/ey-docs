#Use keep files to customize and maintain configurations on AppCloud

###Introduction

A **keep file** gives you the flexibility to modify configuration settings in specific files within the /data and /etc directories of your EBS (Amazon Elastic Block Storage) volume.

When Engine Yard's Chef goes to create configuration files from its recipe templates, it checks the filesystem for certain files prefaced with _keep_.  If such files exist, then the Chef recipe doesn't create new configuration files; instead it leaves the keep files in place.

For example, if the template is about to write out a configuration file called /data/myservice.conf, Chef first looks for /data/keep.myservice.conf. If this file is found, then Chef skips writing out the template-base configuration file. And, the keep.myservice.conf file is used instead.

###Files that can be keep files

These are the files that can be made into keep files. 

**Note:** Only this subset of files in the /etc or /data directories can be made into keep files. Other files in these directories might be overwritten or ignored even if they have been prefaced with "keep".  

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

*Question for reviewers* The doc originally also said: " This also works for other files in the folder:   /data/nginx/servers/\*"  
Is this true? If so can we/should we change the "data/nginx/servers/#" bullets to /data/nginx/servers/\*?

*Question for reviewers* Similar to the above: The doc originally also said: "You can keep any monit configs inside of: "/etc/monit.d/\*" 
Is this true? If so can we/should we change the last bullet to "/etc/monit.d/\*"


### To use keep files to customize and maintain AppCloud configurations

1. Connect to your instance via SSH

2. Edit and rename (to keep._file.name_) any of the files listed above.
  
    For example, for an application name "myapp", configure the nginx server by renaming `/data/nginx/servers/myapp.conf` to `/data/nginx/servers/keep.myapp.conf` and then editing this file.

3. If you make nginx.conf or database.yml into keep files, add a deploy hook to create a symlink. 

        ln -nfs /data/nginx/keep.nginx.conf /data/nginx/nginx.conf
  or
        ln /data/#{appname}/shared/config/database.yml /data/#{appname}/shared/config/keep.database.yml

     *Question for reviewers* What happens if this symlink is not created? Is the Chef recipe default file used? or Some other fall thru configuration settings are used? or Is there error message? 

4. **Important!** If you make any changes to your environment that affect your keep files, update them before rebooting your environment. 


*Question for reviewers:* Should we rewrite and keep this? Is there a specific especially useful example for monit? "This can be useful if you're trying to increase the memory limit for mongrels or background processes, etc. 


<h3 id="topic5"> More information</h2>

The table contains links to related information in the Engine Yard doc pages. 
<table>
  <tr>
    <th>For more information about…</th><th>See…</th>
  </tr>
  <tr>
    <td>SSH in AppCloud</td><td>[[Connect to your instance via SSH|ssh-connect]] </td>
  </tr>
  <tr>
    <td>Deploy hooks</td><td>[[How To Use Deploy Hooks with AppCloud|use-deploy-hooks-with-engine-yard-appcloud]]</td>
  </tr>
</table>