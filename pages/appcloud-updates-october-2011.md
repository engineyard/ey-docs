# Engine Yard Cloud updates October 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

<a href=#update18><h2 id="update18"><b>Major:</b> Ruby 1.9.3 is available with Alpha support </h2></a>

October 31st, 2011

Ruby 1.9.3.p0 is available in Engine Yard Cloud with Alpha support. ([[Sign up|signup-ruby193]] to participate in the program.)

This is the first stable release of Ruby 1.9.3. 

Ruby 1.9.3 offers faster loading times for Rails 3.x applications. For more information about this release, see [[Ruby 1.9.3 p0 is released|http://www.ruby-lang.org/en/news/2011/10/31/ruby-1-9-3-p0-is-released/]]. 

<a href=#update17><h2 id="update17">Minor: vi is now the default editor </h2></a>

October 31st, 2011

vi now replaces GNU nano as the default editor on Engine Yard instances.

<a href=#update16><h2 id="update16">Minor: JRuby upgrade </h2></a>

October 28th, 2011

Upgraded JRuby to 1.6.5 from 1.6.4. This upgrades RubyGems to 1.8.9 from 1.5.1.


<a href=#update15><h2 id="update15">Minor: Security update </h2></a>

October 28th, 2011

Nginx SSL ciphers now configured to protect against the BEAST SSL attack. 

<a href=#update14><h2 id="update14">Fix: An issue with the Apply button </h2></a>

October 27th, 2011

Fixed an issue where, on rare occasions, clicking the Apply button to apply changes to the environment removed the application.

<a href=#update13><h2 id="update13">Fix: Two database-related issues</h2></a>

October 26th, 2011

* Fixed an issue with PostgreSQL 9.0 Alpha backups. (In some cases, database slaves were not getting backed up.)

* Fixed an issue where a MySQL slave server could not be added to a cluster if the master database had master.info or relay-log.info files on it.

<a href=#update12><h2 id="update12">Fix: ZSH installation</h2></a>

October 26th, 2011

ZSH is now installed.

<a href=#update11><h2 id="update11">Minor: Assorted improvements and fixes to the Engine Yard Stack</h2></a>

October 22nd, 2011

* /engineyard/bin/resque updated to fix a regression in which the Resque workers could run as root.
* GNU Wget upgraded to 1.12-r3 to address Gentoo Bug 329941 / Common Vulnerability Exposure: CVE-2010-2252.
* sshd is now configured with a "Pluggable Authentication Model". This allows more processes by default.
* Unicorn now uses "Signal -6" to ensure that log files are flushed.


<a href=#update10><h2 id="update10">Minor: No more tabs on the Environment page</h2></a>

October 18th, 2011

Fewer clicks to access the Environment tools and information: The tabs on the Environment page have been permanently expanded. 

![Headings replace tabs on the Environment page](images/no_more_tabs.png)

<a href=#update9><h2 id="update9">Minor: Warnings about missing database adapters or Gemfile.lock appear in the Dashboard</h2></a>

October 18th, 2011

Missing database-adapter gems (such as the mysql2 gem) or a missing Gemfile.lock can stop your application from deploying. 

If your application is missing a database-adapter gem or the Gemfile.lock, you now see a warning message on the Environment page of the Dashboard (in addition to the deployment log). 

![Context-sensitive help closed and open](images/gemfile_warning.png)

For information about installing the mysql2 gem, see [[500 errors after deploying|issue-mysql2-adapter]].

<a href=#update8><h2 id="update8">Fix: passenger_monitor</h2></a>

October 14th, 2011

Updated passenger_monitor to correctly handle the -l (memory limit) parameter.

<a href=#update7><h2 id="update7">Fix: PostgreSQL database backup</h2></a>

October 13th, 2011

If there are two or more PostgreSQL database slaves, backups of the database are now always made from the first database slave.


<a href=#update6><h2 id="update6">Minor: Unicorn changes</h2></a>

October 13th, 2011

<li>Upgraded Unicorn to 4.1.1.</li>
<li>In Unicorn, increased the <a href="http://unicorn.bogomips.org/Unicorn/Configurator.html#method-i-timeout">timeout</a> from 60 seconds to 180 seconds. Best practice is to consider this timeout as a line of last defense; see <a href="http://unicorn.bogomips.org/Application_Timeouts.html">Application Timeouts.</a></li>

<a href=#update5><h2 id="update5">Minor: Ruby installation order in deployment</h2></a>

October 13th, 2011

Ruby and gems are now installed after the ssh keys in the deploy user.

<a href=#update4><h2 id="update4">Minor: Customizing Nginx configuration</h2></a>

October 13, 2011

To facilitate Nginx configuration, Nginx now reads /data/nginx/http-custom.conf before any server files are sourced.

<a href=#update3><h2 id="update3">Minor: Backups include stored procedures.</h2></a>

October 13, 2011

Backups now include any stored procedures.

<a href=#update2><h2 id="update2">**Major:** Engine Yard Cloud supports Rails 3.1</h2></a>

October 12th, 2011

Engine Yard Cloud now supports Rails 3.1.

When creating a Rails 3.1 application in the Dashboard, set Application Type to Rails 3. Rails 3.0 or Rails 3.1 is used as appropriate for your code.  

The asset pipeline is a major feature of Rails 3.1. It is enabled by default: Engine Yard Cloud runs the precompile tasks as needed during deployment. 

**Note:** Currently, HTTP Streaming response in Rails 3.1 is only available with Unicorn. 

###Migrating an application from Rails 3.0 to Rails 3.1

To migrate your current Rails 3.0 application to Rails 3.1, follow this process:  

1. Upgrade your local environment to Rails 3.1.
2. Edit your application to run locally on the Rails 3.1 framework.
3. Push your application changes to the git repository for your application.
4. Redeploy your application in an Engine Yard staging environment.
5. After testing in the staging environment, redeploy your application in your production environment.

**Note:** If you are using ey deploy from the CLI to deploy your Rails 3.1 application, make sure that you have installed the latest engineyard gem.

###New deploy hooks

However, if you have special asset-compilation needs, you can edit the assets:precompile rake task or use the new deploy hooks, 'before_compile_assets.rb' and 'after_compile_assets.rb'. (For general information about deploy hooks, see [[Using deploy hooks|use-deploy-hooks-with-engine-yard-cloud]].)

###The last_assets directory for zero downtime deployments

To prevent 404 errors in zero downtime (Unicorn) deployments, there are two directories for assets in the application's shared directory:  

* The `assets` directory contains the assets for the current release of the application. This directory is re-created between the 'before_compile_assets' and 'after_compile_assets' deploy hooks.

* The `last_assets` directory contains the assets from the previous release. During a zero downtime deployment, assets are served from this directory.  

Special thanks to one of our customers for suggesting this dual directory solution for zero downtime deployments.



###More information
For additional information about the asset pipeline, see [[Rails 3.1 asset pipeline tips for Engine Yard Cloud|asset-pipeline]].




<a href=#update1><h2 id="update1">Action Required: Bundler 0.9 deprecated</h2></a>

October 10th, 2011

Bundler 0.9 is no longer supported on Engine Yard Cloud. 

Please update your version of Bundler to 1.0 or later.

Applications that use Bundler 0.9 will continue to run but cannot be re-deployed after Bundler 0.9 is deprecated. 




[1]: #update1        "update1"
[2]: #update2        "update2"
[3]: #update3        "update3"
[4]: #update4        "update4"
[5]: #update5        "update5"
[6]: #update6        "update6"
[7]: #update7        "update7"
[8]: #update8        "update8"
[9]: #update9        "update9"
[10]: #update10        "update10"
[11]: #update11        "update11"
[12]: #update12        "update12"
[13]: #update13        "update13"
[14]: #update14        "update14"
[15]: #update15        "update15"
[16]: #update16        "update16"
[17]: #update17        "update17"
[18]: #update18        "update18"

