## Read these release notes before updating!

**Important!** If you are currently using keep files or custom recipes, you need to take action before upgrading in order to keep everything working. See "What do I have to do?" below.

## What's changed?

#### General Changes
* Ruby 1.8.6 upgraded to p420
* "reconnect:true" added to database.yml
* Passenger 3 Beta environments upgraded to 3.0.7
* Added systat, lsof, and strace cookbooks
* All environments except Passenger 2 are being updated to nginx 0.8.54

#### Nginx Configuration Changes
* Removed most "if statements" in accordance with [nginx best practices](http://wiki.nginx.org/IfIsEvil)
* Improved documentation in the configuration files
* Deprecated usage:
	    /etc/nginx/#{application}.rewrites
	    /etc/nginx/#{application}/custom.locations.conf
  both are replaced by:
	/etc/nginx/#{application}/custom.conf
* Added new file for SSL-based connection customizations:
	/etc/nginx/#{application}/custom.ssl.conf
* All non-proxy code was removed from `/etc/nginx/common/proxy.conf`. Similar configuration is made available in `/etc/nginx/servers/#{application}.conf`
* All environments upgraded to nginx 0.8.54 have the following changes:
	* Removed modules from nginx: