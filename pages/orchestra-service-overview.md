# Service Overview

The Orchestra team is very involved in the community and we believe in technology and innovation. Our platform reflects this and we contribute to every piece of technology we use. Be it at the community level,  core/internal patches or development to promoting it in general. We enjoy <a href="/faqs/come-see-us/speaking">talking</a> about what we use and believe in.

# <a name="deployment-software"></a>Deployment Software

The Orchestra platform currently supports deploying from <a href="/faqs/getting-started/deploy-with-git">Git</a> and <a href="/faqs/getting-started/deploy-with-subversion">Subversion</a>. It is in our near-future plans to support the likes of Mercurial and Bazaar depending on our users needs.

As a user of our service you do not need to add any commit hooks or service hooks. We periodically check for modified deltas and modified files and automatically pull the changes **every minute**. 

# <a name="caching-mesh"></a>Caching Mesh</a>

Orchestra uses a custom built Nginx HTTP caching-mesh. This provides our users with faster websites and faster response-times. The caching mesh sits in front of the load-balancing mesh and caches static files for 8 hours.

Many people like to use Varnish for this task however with proxy cache builtin nginx now (No longer as a module) we've noticed that Nginx has a lower memory footprint as the caching server which is why we opted for Nginx. Even though you do not see Varnish, we still do have an implicit caching layer on all applications deployed on the Orchestra platform.

# <a name="load-balancing-mesh"></a>Load Balancing Mesh</a>

When it comes to load-balancing, Orchestra uses two types of load-balancers. The first is a custom built Nginx load balancer and the second, provided with Elastic apps are [Elastic Load Balancers](http://aws.amazon.com/elasticloadbalancing/). The latter allows us to dedicate the load-balancing meshes per user and dedicate heuristics and tailored configurations per-application.

# <a name="php-version"></a>PHP Version

The Orchestra platform is currently running on PHP 5.3.6 and the following extensions are enabled by default:

  - [APC](http://php.net/apc) — *only non-free apps*
  - [curl](http://php.net/curl)
  - [exif](http://php.net/exif)
  - [filter](http://php.net/filter)
  - [gd](http://php.net/gd) with JPEG support
  - [gearman](http://php.net/gearman)
  - [gettext](http://php.net/gettext)
  - [http](http://php.net/http)
  - [hash](http://php.net/hash)
  - [iconv](http://php.net/iconv)
  - [imagick](http://php.net/imagick)
  - [intl](http://php.net/intl)
  - [mbstring](http://php.net/mbstring)
  - [mcrypt](http://php.net/mcrypt)
  - [memcache](http://php.net/memcache)
  - [memcached](http://php.net/memcached)
  - [mongo](http://php.net/mongo)
  - [mysql](http://php.net/mysql) (PDO, PDO Mysql, mysqlnd)
  - [openssl](http://php.net/openssl)
  - [pgsql](http://php.net/pgsql) (PDO, PDO pgsql)
  - [sqlite3](http://php.net/sqlite3)
  - [Phar](http://php.net/phar)
  - [PHPRedis](https://github.com/owlient/phpredis)
  - [ssh2](http://php.net/ssh2)
  - [uploadprogress](http://pecl.php.net/uploadprogress) — *only non-free apps*
  - [zlib](http://php.net/zlib)
  - [ZeroMQ](http://github.com/mkoppanen/php-zmq)

All of which are available through the `phpinfo();` function.

## <a name="php-dependencies"></a>PHP Dependencies
While we currently do not have an automated way for handling dependencies, we are working on an amazing extensions and packages dependencies software that will fully be released as open source. The dependency system is being built-in the new PEAR installer Pyrus and will allow you to define what PECL extensions and PEAR packages your application needs in order to run smoothly. 

# <a name="web-server"></a>Nginx WebServer

Orchestra, unlike many others, do not run on Apache but rather runs on Nginx 1.0.x. This allows us to provide high-performance websites through php-fpm which is now bundled in PHP since PHP 5.3.6.

## <a name="url-rewrites"></a>URL Rewrites

As Orchestra runs Nginx it is not possible to support the traditional .htaccess mod_rewrite (Apache) that many projects have by default.

Right now Orchestra implementes a rewrite url that will work for most frameworks out of the box.
Anything passed in the /this/is/a/path manner gets appended to index.php by using the nginx rewrite rules.

    index.php?/this/is/a/path

This can be fetched via $_SERVER['REQUEST_URI'] - This allows most PHP frameworks to plug into the passed in path without a problem. All the major frameworks have been tested with this.

In the future there will be added support for custom rewrite rules.

# <a name="automated-backups"></a>Automated Backups

Orchestra creates automated backups of the databases every hour. As your application is essentially only code, the applications code doesn't need to be backed up because it's already in your repository. Moreover, to make sure your data is safe with the Orchestra Database, the setup is replicated and if the database fails we can seamlessly switch over to the other replicated server with no downtime whatsoever. In the unlikely event where both the replicated servers were to die, we have the user-db backed-up every hour that we save for a month.

Internally, we backup our user-configuration, load-balancer configurations, and user-settings every 3 hours. Even though the backups are not available for users to download, transparent backups are something we have on our todo list for the near future. Should your application stop responding — *touch wood* — you should contact us immediately at <a href="mailto:support@orchestra.io">support@orchestra.io</a>.