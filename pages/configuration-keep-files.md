#Use keep files to customize and maintain configurations on Engine Yard Cloud

A **keep file** gives you the flexibility to modify configuration settings in specific files within the /data and /etc directories of your EBS (Amazon Elastic Block Storage) volume.

When Engine Yard's Chef goes to create configuration files from its recipe templates, it checks the filesystem for certain files prefaced with _keep_.  If such files exist, then the Chef recipe doesn't create new configuration files; instead it leaves the keep files in place.

For example, if the template is about to write out a configuration file called /data/myservice.conf, Chef first looks for /data/keep.myservice.conf. If this file is found, then Chef skips writing out the template-base configuration file. And, the keep.myservice.conf file is used instead.

##Files that can be keep files

These are the files that can be made into keep files. 

**Note:** Only this subset of files in the /etc or /data directories can be made into keep files. Other files in these directories might be overwritten or ignored even if they have been prefaced with "keep".  


* /data/#{appname}/shared/config/database.yml
* /data/nginx/nginx.conf
* /data/nginx/common/proxy.conf
* /data/nginx/common/servers.conf
* /data/nginx/common/fcgi.conf
* /data/nginx/servers/#{appname}.rewrites
* /data/nginx/servers/#{appname}.conf
* /data/nginx/servers/#{appname}.ssl.conf
* /etc/haproxy.cfg
* /etc/mysql/my.cnf
* /etc/conf.d/nginx
* /etc/engineyard/collectd.conf
* /etc/redis/redis.conf
* /etc/monit.d/unicorn_#{appname}.monitrc
* /etc/monit.d/#{name}.#{appname}.monitrc


<!-- All files in the folders: /data/nginx/servers/ /etc/monit.d/ can be keep files -->
<!-- Keep files can be especially useful for monit if you're trying to increase the memory limit for mongrels or background processes, etc. -->

## <b>Important!</b> Risks associated with keep files

There are risks associated with keep files. Use keep files with caution.

Making a keep file effectively "freezes" the file. If your environment changes, either through changes that you apply yourself or when you upgrade to the latest Engine Yard stack, your keep files can become out-of-date and thus compromise your application. 

Before making changes to a production environment, review your keep files. 

<b>Tip:</b> Where possible, consider using an include file instead of a keep file.

## To use keep files for configuration

1. Connect to your instance via SSH.

2. Edit the file and rename (to **keep**._filename.extension_) any of the files listed above.
  
    For example, for an application name "myapp", configure the nginx server by renaming `/data/nginx/servers/myapp.conf` to `/data/nginx/servers/keep.myapp.conf`

3. If you make nginx.conf or database.yml into keep files, add a deploy hook to create a symlink. 

        ln -nfs /data/nginx/keep.nginx.conf /data/nginx/nginx.conf
  or
        ln /data/#{appname}/shared/config/database.yml /data/#{appname}/shared/config/keep.database.yml

4. **Important!** If you make any changes to your environment that affect your keep files, update them before rebooting your environment. 


<h2 id="topic5"> More information </h2>  
<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
    <td>SSH</td><td>[[Connect to your instance via SSH|ssh-connect]] </td>
  </tr>
  <tr>
    <td>Deploy hooks</td><td>[[How To Use Deploy Hooks|use-deploy-hooks-with-engine-yard-cloud]]</td>
  </tr>
  <tr>
    <td>Customizing Unicorn configuration (without keep files)</td><td>[[Customize Unicorn|customize-unicorn]]</td>
  </tr>
</table>
