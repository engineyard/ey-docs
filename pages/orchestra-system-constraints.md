# System Constraints

Orchestra operates on the premise that your application should be easy to scale horizontally. In order to be easy to scale, an application must follow some rules defined by the Shared Nothing architectural concepts as such as independence. In order for an application to scale to near-Infinity, a few restrictions apply to the systems. Restrictions that would not apply on traditional hosting servers.

  * <a href="#file-uploads-hosting">File Uploads and Large Files Hosting</a>
  * <a href="#temp-dir">Temporary Directory</a>
  * <a href="#case-sensitive-fs">Case Sensitive Filesystem</a>
  * <a href="#custom-php-dependencies">Custom PHP Dependencies</a>
  * <a href="#ssh-access">Remote SSH Access</a>
  * <a href="#sessions">Session Files</a>
  * <a href="#git-submodules">Git Submodules</a>
  * <a href="#free-apps-restrictions">Free Applications Restrictions</a>


# <a name="file-uploads-hosting"></a>File Uploads and Large Files Hosting

In order for your applications to be easily replicated and distributed we adopt a mantra that forbids the users from saving files directly to their server. For file uploads, we recommend you save them to Amazon S3 using [PEAR::Services_Amazon_S3](http://pear.php.net/package/Services_Amazon_S3).  For files larger than 4MB we recommend you look at the [Uploadify](http://www.flynsarmy.com/2011/03/upload-to-amazon-s3-with-uploadify/) plugin and upload directly to Amazon S3.

Should you require another type of package, The [undesigned.org.za PHP library for S3](http://undesigned.org.za/2007/10/22/amazon-s3-php-class/documentation) isn't too bad and [net.tutsplus.com](http://net/tutsplus.com/tutorials/php) have a pretty decent example on [how to dynamically store and manage files with S3](http://net.tutsplus.com/tutorials/php/how-to-use-amazon-s3-php-to-dynamically-store-and-manage-files-with-ease/).

If you'd like to know more, feel free to see the <a href="#frameworks-s3-libraries">frameworks S3 libraries</a> section at the bottom of this document.

If you decide to store files directly into your application's computing unit, we cannot insure that the data will remain available forever. Keeping the files on the server prevents from easily scaling as the application starts sharing information with its unit and thereby relies on the computing unit. File hosting is complex and something many companies failed at when they tried doing so. Therefore, this is why we strongly recommend using <a href="http://aws.amazon.com/s3" target="_blank">S3</a> which is distributed and durable file hosting infrastructure at minimal costs.

# <a name="temp-dir"></a>Temporary Directory
As mentioned above, we do not encourage our users to write on the filesystem. There is an exception which most frameworks and applications have which are the temporary directory for local-caches. As described in the Symfony framework page, we allow our users to write only to a specific temporary directory. 

This directory is available in your application through the php function `sys_get_temp_dir`. This means that if your application is giving you an error message like *Caching directory must be writable* it means you need to make sure the caching dir is set to `sys_get_temp_dir()`. You will then be able to save your temporary files and local-caching files to the system.

# <a name="case-sensitive-fs"></a>Case Sensitive Filesystem
It's worth noting that the filesystem we use is ***case-sensitive***. This means that if your code includes a file named **MenuExample.php** but the actual real name of the file is **Menuexample.php**, the platform will not recognise this file therefore creating a fatal PHP error or result in a *404*.

This will mostly affect developers that use ***Mac OSX*** as OSX uses a case insensitive filesystem meaning that you can load the file **Menuexample.php** by doing `require 'MEnUExamPle.PhP';` and it will recognise it. This ***is not the case*** with the Orchestra.io platform.

# <a name="custom-php-dependencies"></a>Custom PHP Dependencies

While we currently do not have an automated way for handling dependencies, we are working on an amazing extensions and packages dependencies software that will fully be released as open source. The dependency system is being built-in the new PEAR installer Pyrus and will allow you to define what PECL extensions and PEAR packages your application needs in order to run smoothly.

# <a name="ssh-access"></a>Remote SSH Access

In order to preserve integrity of our systems and the ability to easily scale them up and down, we do not authorize or allow users to connect using SSH. You do not have to connect and we are working on making the system as configurable as possible using Chef. In the meantime, if you need something, feel free to ask us :-)

# <a name="sessions"></a>Session Files

In order to have your system as easily scalable as possible while preserving state-fulness of your application, we recommend you use the Memcached addon to store your sessions. This will allow your application to seemlessly connect to the memcached server to verify the validity of sessions. 

As we currently do not have the Memcached addon ready, you can either keep the sessions stored per-server — *change nothing, leave as is* — or save them in MySQL. MySQL sessions can be quite slow and we do not recommend keeping this as a long term solution.

Nevertheless, in order to configure PHP to store your sessions in some Memcached server, you need to have this in your code:

> `ini_set('session.save_handler', 'memcache');`
>
> `ini_set('session.save_path', 'tcp://123.123.123.123:11211');`

Of course, substitue 123.123.123.123 with the IP generated by the Addon. This will inherently save your sessions into the memcached server and does not require you to change your code.


# <a name="git-submodules"></a>Git Submodules

Git submodules can be quite tricky and they can have many levels. We only support one level of submodules therefore any submodule containing a submodule will not be recognized and retrieved. The submodules should be accessible by your user. If this is a private repository, you need to make sure the SSH-Key provided and generated for your application has access to this submodule as well.

If you would like to find out whether your repository has submodules or not, please run the following command:

> `find . -mindepth 2 -name .git`

Should you want to remove submodules and merge them into your application repository, please run the following command-set:

> `cd path/to/app`
>
> `rm -rf \`find . -mindepth 2 -name .git\``
>
> `git rm --cache \`git submodule | cut -f2 -d' '\``
>
> `git rm .gitmodules`
>
> `git add .`
>
> `git config -l | grep '^submodule' | cut -d'=' -f1 | xargs -n1 git config --unset-all`
>
> `git commit -m 'Merged submodules into app repository'`


# <a name="free-apps-restrictions"></a>Free Applications Restrictions

Service-related addons as such as Automated Jobs and Simple Error Reporting do not apply to free applications. MySQL and database addons will still work as expected. Also, free applications are not allowed to have a custom domain name and are restricted to Orchestra — *app_name.orchestra.io* — subdomains. The elasticity features are disabled and you get a maximum of ***1 concurrent connection***.

For security reasons, the opcode cache APC and system commands as such as `exec`, `shell_exec`, `popen`, `system` are disabled for free applications.

Here's a more visual list of the restrictions:

  * No service-related addons like Automated Jobs and Simple Error Reporting
  * No custom domain name, only the *app_name.orchestra.io* subdomain.
  * No elasticity (Not automatically scaling)
  * Only 1 concurrent connection
  * No APC caching extension
  * No system commands available (IE: `exec`, `shell_exec`, `popen`, `system`)


# <a name="frameworks-s3-libraries"></a>Frameworks S3 Libraries

A few projects out there already have bundled Amazon S3 libraries, here's a list of them. If your project has an Amazon S3 interaction package feel free to contact us so we can add it to the list.

  * [PEAR Services_Amazon_S3, our recommended library](http://pear.php.net/package/Services_Amazon_S3)
  * [Zend Framework](http://framework.zend.com/manual/en/zend.service.amazon.s3.html)
  * [Cake PHP CakePHP Amazon S3 Plugin](https://github.com/primeminister/CakePHP-Amazon-S3-plugin) by [Charlie van de Kerkhof](https://github.com/primeminister)
  * [Solar](http://solarphp-domain51.googlecode.com/svn/trunk/Domain51/Service/Amazon/)

An alternative effort to provide a unique and simplified API has been started by [Zend](http://zend.com). This endeavour is called [simplecloud](http://simplecloud.org/) and it aims at providing a unified API to all the cloud vendors. We **strongly** suggest keeping a close eye on this project.

# <a name="wordpress"></a>Wordpress File Uploads
As the system doesn't support large file uploads, we recommend our Wordpress users to install the [TanTan S3 Plugin](http://wordpress.org/extend/plugins/tantan-s3/) for Wordpress. This plugin will allow users to upload files to Wordpress and host them on Amazon S3 transparently.