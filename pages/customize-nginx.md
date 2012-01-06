# Customize Nginx

You might need to customize the default Nginx configuration. This page describes the layout of our Nginx configuration files and lists the files that are not altered by Chef on subsequent runs. These non-altered (customizable) files are straightforward to customize.

You can also customize Nginx with [[custom Chef recipes|custom-chef-recipes]] and with [[keep-files|configuration-keep-files]]; however, this is more difficult.  
**Note:** If you need to create new customized instances that are not based on data volume snapshots of existing customized instances, then you must use custom Chef recipes for your Nginx configuration; *cf.* [Apply Nginx customizations to new or rebuilt instances][2]. 

## Customizable files

These are the files that you can edit without writing a custom Chef recipe or using keep-files:  

**Note:** `/etc/nginx` is a symbolic link to `/data/nginx` on each instance.

* `/etc/nginx/http-custom.conf` - Use this file to add configurations that need to go inside the _http_ context, for example, configuring the Nginx [[proxy_cache_path|http://wiki.nginx.org/HttpProxyModule#proxy_cache_path]] directive.

* `/etc/nginx/servers/app_name/custom.conf` - Use this file to add configurations inside the _server_ context of *app_name*. This file is commonly used for rewrites.

* `/etc/nginx/servers/app_name/custom.ssl.conf` - Use this file to add configurations inside the _server_ context of *app_name* that only apply when the request comes in over HTTPS. This file does not exist if SSL is not enabled for your application.

* `/etc/nginx/servers/app_name.rewrites` - If you use Passenger 2 or Mongrel, use this file. (This file is not  used in newer versions of the stack.) 

<!-- Do you need to say what/how you would use this file if you are on Passenger 2 or Mongrel? Presumably you use it for rewrites... but if that's the case why not just use /etc/nginx/servers/app_name/custom.ssl.conf ? -->

* `/etc/nginx/servers/default.conf` - This file ensures that Nginx starts <!-- even? --> if your environment has no configured applications. `/etc/nginx/nginx.conf` tries to include all CONF files under the `servers` directory, so if `/etc/nginx/servers/default.conf` did not exist, Nginx would fail if you removed all applications from an environment. Although you can treat this file in the same way as  `http-custom.conf`, we recommend that you leave it empty.

<!-- When you write : "if your environment has no configured applications." Do we need the word "configured"? When does my environment have non-configured applications in it? Is the distinction required? -->  


<!--**Question:** What do I need to do after editing these files to have a Nginx configuration changes take effect? -->

<h2 id="topic1"> Apply Nginx customizations to new or rebuilt instances</h2>

**Important!** Because these files are not managed by Chef, if you rebuild your environment or add an application instance from a fresh data volume, your Nginx customizations are lost. 

<!-- Is this about new instances to an existing environment or creating a new environment?  -->

<!-- what are the steps for creating a data volume from a previous snapshot? -->

###To apply your Nginx customizations to a new or rebuilt instance

1. If you don't take a recent snapshot available, take a snapshot of the environment. 
 
<!-- I snapshot a whole environment, right? Not just an instance? -->

<!-- Then I can clone the environment. If I have a cluster, I can add an instance like app or database slave that is based on a snapshot... is Nginx on DB instances or only app instances. -->




[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"