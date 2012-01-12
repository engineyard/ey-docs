# Customize Nginx

You might need to customize the default Nginx configuration. This page describes the layout of our Nginx configuration files and lists the files that are not altered by Chef on subsequent runs. These non-altered (customizable) files are straightforward to customize.

You can also customize Nginx with [[custom Chef recipes|custom-chef-recipes]] and with [[keep-files|configuration-keep-files]]; however, this is more difficult.  
 
**Note:** If you need to create new customized instances that cannot be based on data volume snapshots of existing customized instances, then you must use custom Chef recipes for your Nginx configuration; *cf.* [Apply Nginx customizations to new or rebuilt instances][2]. 

<h2 id="topic1"> Customizable files</h2>

These are the files that you can edit without writing a custom Chef recipe or using keep-files:  

**Note:** `/etc/nginx` is a symbolic link to `/data/nginx` on each instance.

* `/etc/nginx/http-custom.conf` - Use this file to add configurations that need to go inside the _http_ context, for example, configuring the Nginx [[proxy_cache_path|http://wiki.nginx.org/HttpProxyModule#proxy_cache_path]] directive.

* `/etc/nginx/servers/app_name/custom.conf` - Use this file to add configurations inside the _server_ context of *app_name*. This file is commonly used for rewrites.

* `/etc/nginx/servers/app_name/custom.ssl.conf` - Use this file to add configurations inside the _server_ context of *app_name* that only apply when the request comes in over HTTPS. This file does not exist if SSL is not enabled for your application.

* `/etc/nginx/servers/app_name.rewrites` - This file is only used by (deprecated) Mongrel.  Both HTTP and HTTPS requests can be affected by the rewrites in this file. 

* `/etc/nginx/servers/default.conf` - This file ensures that Nginx starts. We recommend that you leave it empty.

<h2 id="topic2"> Apply Nginx customizations to your environment</h2>

After you edit customizable files, make sure to reload Ngnix in your environment so that your customizations take effect. 

###To apply your Nginx customizations to your environment

1. Via SSH, connect to the application master instance and edit one or more of the files listed [above][1].

2. If you have a clustered environment with one or more application-slave instances, make the same edits on the slave instances (or copy the edited files from the application master instance). 

2. Load new the Ngnix configuration files by doing one of the following:  
    * In the UI, click Apply.
    * Via SSH connect to the application master instance and type this engineyard gem command:  

            ey ssh "sudo /etc/init.d/nginx reload" -e environment_name --app-servers


<h2 id="topic3"> Apply Nginx customizations to other environments or instances</h2>

Use a recent snapshot to copy your Nginx customizations from one environment or application instance to another.

**Important!** Because [these customizable files][1] are not managed by Chef, if you rebuild your environment or add an application instance from a fresh data volume (instead of a snapshot), your Nginx customizations are lost. 

###To apply your Nginx customizations to another environment or instance

1. If you don't take a recent snapshot available, take a snapshot of the environment. 

2. If you are creating an environment, clone the environment from the already customized environment.  

    or  

    If you are rebuilding the environment or adding an application slave to the existing environment, use the recent snapshot when rebuilding.  

<h2 id="topic5"> More information</h2>

<table>
  <tr>
	<th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
	<td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
  </tr> 
  <tr>
	 <td>the engineyard gem</td><td>[[Engine Yard CLI User Guide|ey_cli_user_guide]].</td>
  </tr>
<tr>
    <td>adding an instance to a cluster</td><td>[[Clustered environments|environment-cluster]].</td>
  </tr>
  <tr>
	 <td>cloning an environment</td><td>[[Clone an environment|environment-clone]].</td>
  </tr>
</table>


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"