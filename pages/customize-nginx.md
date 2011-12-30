# Customize Nginx

You may find that you need to customize our default Nginx configuration that we setup for your app. While there are many ways to do this with [[custom Chef recipes|custom-chef-recipes]] or '[[keep-files|configuration-keep-files]]', these methods have caveats that you need to be aware of. This document shows you the layout of our Nginx configuration files and shows you which files can be customized by you, without being altered by Chef on subsequent runs.

## Customizable Files

The files that we provide that you can edit without needing to write a custom Chef recipe or use keep-files are as follows (note that `/etc/nginx` is a symbolic link to `/data/nginx` on each instance):

* `/etc/nginx/http-custom.conf` - use this file to add any configurations that need to go inside the _http_ context. An example use for this file could involve configuring Nginx's [[proxy_cache_path|http://wiki.nginx.org/HttpProxyModule#proxy_cache_path]] directive.
* `/etc/nginx/servers/YOUR_APP/custom.conf` - use this file to add configurations inside the _server_ context of __YOUR_APP__. It is common for this file to be used for rewrites.
* `/etc/nginx/servers/YOUR_APP/custom.ssl.conf` - use this file to add configurations inside the _server_ context of __YOUR_APP__ that only apply when the request comes in over HTTPS. This file will not exist if your app does not have SSL enabled.
* `/etc/nginx/servers/YOUR_APP.rewrites` - this file is no longer used in newer versions of our stack, but if you're still using Passenger 2 or Mongrel, you can use this file.
* `/etc/nginx/servers/default.conf` - this file exists to ensure that Nginx can start successfully if your environment has no apps currently configured. `/etc/nginx/nginx.conf` tries to include all `*.conf` files under the `servers` directory, so if this file did not exist, Nginx would fail if you removed all apps from an environment. While you can treat this file in the same was as the `http-custom.conf` file, we recommend that you leave it empty.

## Persistence of Customizations

As these files are not managed by Chef, you will need to bear in mind that they will not be generated with your customizations in place if you rebuild your environment or add an application instance from a fresh data volume. To ensure that these files appear on any new instances (or after a rebuild), you will need to create your data volume from a previous snapshot.

If you need to be able to boot instances from non-snapshotted data volumes for any reason, then you would need to use a custom Chef recipe to ensure that these files existed with the customizations in place.

