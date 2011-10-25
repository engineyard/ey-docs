# Engine Yard AppCloud updates May 2011 

This page describes the action-required update of May 18th, 2011. (This is not a complete listing of updates in May.)

**Important!** If you are currently using keep files or custom recipes, you need to take action before upgrading in order to keep everything working. See "[[What do I have to do?|appcloud_update_2011_05_18.html#what]]" below.

## What's changed?

General Changes

* Ruby 1.8.6 upgraded to p420Cloud
* "reconnect:true" added to database.yml
* Passenger 3 Beta environments upgraded to 3.0.7
* Added systat, lsof, and strace cookbooks
* All environments except Passenger 2 are being updated to nginx 0.8.54

Nginx Configuration Changes

* Removed most "if statements" in accordance with [nginx best practices](http://wiki.nginx.org/IfIsEvil)
* Improved documentation in the configuration files
* Deprecated usage:
		/etc/nginx/servers/#{application}.rewrites
    	/etc/nginx/servers/#{application}/custom.locations.conf
  both are replaced by:
		/etc/nginx/servers/#{application}/custom.conf
* Added new file for SSL-based connection customizations:
		/etc/nginx/servers/#{application}/custom.ssl.conf
* All non-proxy code was removed from `/etc/nginx/common/proxy.conf`. Similar configuration is made available in `/etc/nginx/servers/#{application}.conf`
* All environments upgraded to nginx 0.8.54 have the following changes:
	* Removed modules from nginx:
		* [Upstream Fair Module](https://github.com/gnosek/nginx-upstream-fair). A module for attempting to run nginx into a load balancer.
		* [Upstream Request Hash Module](http://wiki.nginx.org/HttpUpstreamRequestHashModule). A module that attempts to solve the load balancing problem from a different angle.
		* [Upstream Memcached Hash Module](http://openhack.ru/nginx-patched/wiki/MemcachedHash). A module that implements memcached_hash directive for upstream blocks.
		* [Max HTTP Connections Module](https://github.com/ry/nginx-ey-balancer). A module that limited maximum connections to each upstream process in the upstream block.
	* Modified modules in nginx:
		* [Nginx Upload Module](https://github.com/vkholodkov/nginx-upload-module). Updated to v2.2.0.
		* [Nginx Headers More Module](https://github.com/agentzh/headers-more-nginx-module). Updated to v0.14rc1.
	* Removed the patch "[Post to static html](https://gist.github.com/47503/261f8e0a31ed4bb3ea03a9b6480bbea8f688d850)" from nginx. Files are now posted to application.

<h3 id="what"> What do I have to do? </h3>

This section lists the actions that you need to take to ensure smooth operation of your Ruby on Rails applications.

* [Replace "false" with "off"](#false)
* [Update keep files](#keep)
* [Update custom recipes](#recipes)
* [(Optional) Refactor rewrite directives](#optional)

<h3 id="false"> Replace "false" with "off" </h3>

If you use keep files or custom recipes, then you need to do this.
In nginx 0.7.x and above, "false" is not valid. Use "off" instead.

#### To update false to off

* In all your keep files and custom recipes, replace "false" with "off".
	
	For example, write `proxy_redirect off;`
	
	do not write `proxy_redirect false;`

<h3 id="keep"> Update keep files </h3>

If you use keep files, then you need to test your changes in a non-production environment. Don't update your production environment until you have validated your customization in a test environment.

#### To test the update

1. Do one of the following to create a test environment:
	* Clone your production environment.
	* Use your staging environment.
2. Delete the keep files.
3. Update the environment.
4. Validate/customize behavior in the environment, recreating keep files as needed.
5. Apply the update to your production environment by copying any new keep files and deleting obsolete keep files.

<h3 id="recipes"> Update custom recipes </h3>

If you use custom recipes, then you need to test your changes in a non-production environment Don't update your production environment until you have validated the update in a test environment.

#### To test the update

1. Do one of the following to create a test environment.
	* Clone your production environment.
	* Use your staging environment.
2. Update the environment.
3. Validate/customize the behavior of your custom recipes as needed using the [engineyard gem](https://github.com/engineyard/engineyard) to upload and apply them to your testing environment.
4. Use the engineyard gem to update and apply your custom recipes to your production environment.

<h3 id="optional"> (Optional) Refactor rewrite directives </h3>

Now is a good time to refactor rewrite directives.

For example:

* Slow (with embedded if's):

        if ($host != 'your_domain.com') {
        	rewrite ^/(.*)$ http://your_domain.com/$1 permanent;
        }
        
        if ($host ~* "www") {
        	rewrite ^(.*)$ http://www.domain.com;
        	break;
        }

	
* Fast (with a new server block for all rewrites):

        server {
        	listen 80 default;
        	server_name _;
        	rewrite ^ http://www.domain.com;
        	...other rewrites...
        }

For help understanding if, see [How if works](http://agentzh.blogspot.com/2011/03/how-nginx-location-if-works.html) and the [nginx docs](http://wiki.nginx.org/NginxHttpRewriteModule#if).

**To refactor your rewrite directives:**

1. Review your rewrite directives.
2. Using the Dashboard, make sure you have specified a domain name for all applications running in your environment.
3. Refactor your rewrites into a default server block based on the above example.
4. Test on a staging environment before deploying to production.

**Note:** Rewrite directives use PCRE for regular expressions.
