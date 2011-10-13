# Engine Yard Cloud updates October 2011

The updates described are either important (where you need to take action) or of interest (you might want to know about these changes but you don't need to do anything). 

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

**Note:** Streaming response is not yet supported for Rails 3.1 in Engine Yard Cloud. 

###Migrating an application from Rails 3.0 to Rails 3.1

To migrate your current Rails 3.0 application to Rails 3.1, follow this process:  

1. Upgrade your local environment to Rails 3.1.
2. Edit your application to run locally on the Rails 3.1 framework.
3. Push your application changes to the git repository for your application.
4. Redeploy your application in an Engine Yard staging environment.
5. After testing in the staging environment, redeploy your application in your production environment.

###New deploy hooks

However, if you have special asset-compilation needs, you can edit the assets:precompile rake task or use the new deploy hooks, 'before_compile_assets.rb' and 'after_compile_assets.rb'. (For general information about deploy hooks, see [[Using deploy hooks|use-deploy-hooks-with-engine-yard-appcloud]].)

###The last_assets directory for zero downtime deployments

To prevent 404 errors in zero downtime (Unicorn) deployments, there are two directories for assets in the application's shared directory:  

* The `assets` directory contains the assets for the current release of the application. This directory is re-created between the 'before_compile_assets' and 'after_compile_assets' deploy hooks.

* The `last_assets` directory contains the assets from the previous release. During a zero downtime deployment, assets are served from this directory.  

Special thanks to one of our customers for suggesting this dual directory solution for zero downtime deployments.



###More information
For additional information about the asset pipeline, see [[Rails 3.1 Asset pipeline tips for Engine Yard Cloud|asset-pipeline]].




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