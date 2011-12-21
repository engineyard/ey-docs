# Engine Yard Cloud FAQs

* <a href=#FAQ1>Which SCMs (Source Code Management) do you support?</a>
* <a href=#FAQ2>Is there any shared storage on Engine Yard Cloud?</a>
* <a href=#FAQ3>Do you offer Email services on Engine Yard Cloud?</a>
* <a href=#FAQ4> Can Engine Yard Cloud host my DNS?</a>
* <a href=#FAQ5> Can I have more than one IP address for my application?</a>
* <a href=#FAQ6> Can I failover to a Database Slave?</a>
* <a href=#FAQ8> Do you support Bundler?</a>
* <a href=#FAQ9> Is PostgreSQL Supported on Engine Yard Cloud?</a>
* <a href=#FAQ11> What scale of applications are appropriate for Engine Yard Cloud?</a>
* <a href=#FAQ12> What types of applications run on Engine Yard Cloud?</a>
* <a href=#FAQ13> Does Engine Yard manage my Domain Name or does my Company?</a>
* <a href=#FAQ14> Do I need an IP address? </a>
* <a href=#FAQ15> Do I have sudo access? </a>
* <a href=#FAQ16> Can I use my own SSH key? </a>
* <a href=#FAQ17> Can I reboot my instance without worrying about losing data? </a>
* <a href=#FAQ18> If I shutdown and create an instance with the same volumes, will I lose data? </a>
* <a href=#FAQ19> How do I migrate from SVN to Git? </a>
* <a href=#FAQ20> Are there reserved names in Engine Yard Cloud? </a>
* <a href=#FAQ21> What are availability zones? </a>
* <a href=#FAQ22> How do I change my Credit Card information? </a>
* <a href=#FAQ23> How do Engine Yard Cloud instances differ from Engine Yard Managed slices? </a>
* <a href=#FAQ24> Unicorn failing to reload after Bundler </a>
* <a href=#FAQ25> Do you offer any DDoS Protection on Engine Yard Cloud? </a>
* <a href=#FAQ26> 400 Bad Request While Updating Chef Recipes </a>
* <a href=#FAQ27> Error: "missing activerecord-mysql2-adapter gem" </a>
* <a href=#FAQ28> Bundler 1.0 Will Not Install Compiled Gems in UNIX When bundle install is Run in Windows </a>
* <a href=#FAQ29> One of my instances is not responding. What can I do? </a>
* <a href=#FAQ30> Can I open a custom port for my application? </a>
* <a href=#FAQ31> Can I use my Engine Yard-provided AWS/S3 account for asset storage? </a>




<a href=#FAQ1><h2 id="FAQ1"> Which SCMs (Source Code Management) do you support? </h2></a>

Only git is supported at this time. Your repository needs to be ported to git before your application can be deployed. [[GitHub|http://github.com/guides/import-from-subversion]] has a great doc on porting an SVN repository to git. 

<a href=#FAQ2><h2 id="FAQ2"> Is there any shared storage on Engine Yard Cloud? </h2></a>

No. Shared storage (GFS) is not supported on Engine Yard Cloud. If your application stores dynamic assets in `/data`, you'll need to move these assets to a content delivery network (CDN) such as S3.

We currently do not have any plans to support a shared storage on Engine Yard Cloud. 

<a href=#FAQ3><h2 id="FAQ3"> Do you offer Email services on Engine Yard Cloud? </h2></a>

Email services are not offered on Engine Yard Cloud. If your application uses Engine Yard for email either inbound or outbound, you need to sign up with an external service provider. For applications which send a lot of mail we recommend SendGrid or authSMTP. For incoming, try Rackspace mail hosting. For lower volumes in either direction we recommend Google.

Your slice environment likely came bundled with Mailtrust (now Rackspace) and if you would like to continue using that service you should submit a request to Rackspace to take over that account. They send us an email to approve release of that domain. 

<a href=#FAQ4><h2 id="FAQ4"> Can Engine Yard Cloud host my DNS? </h2></a>

Domain Name System (DNS) services are not offered on Engine Yard Cloud. If you are currently using Engine Yard's name servers you'll need to register with a DNS service provider and update your registrar to use that provider's name servers. Check with your registrar; they may also offer control of your DNS zone records.

For more information, see [[How to set up Engine Yard Cloud to work with your domain name.|ips-setup-dns]]

<a href=#FAQ5><h2 id="FAQ5"> Can I have more than one IP address for my application? </h2></a>

No. Amazon only allows us to attach a single IP address to any one instance. 

On Engine Yard Managed, it has been possible to have multiple domains, each with their own SSL certificate and IP address, all accessing the same application. This setup isn't supported on Engine Yard Cloud because Amazon EC2 instances can have only one IP address. 

If you have multiple domains pointed at your application and they all need to run under SSL you need to purchase a multi-domain cert.

<a href=#FAQ6><h2 id="FAQ6"> Can I failover to a Database Slave? </h2></a>

No, failover to a database slave is not currently an option on Engine Yard Cloud. If you do ever run into issues with your master database we suggest you can recreate your Master Database Instance from a snapshot. This is quicker than failing over and does not pose the risk of any data loss should replication be out-of-sync.

We take fresh snapshots of your `/db` volume when you terminate an instance. If you have to rebuild your DB instance you can terminate it and recreate it from the most recent snapshots.

<a href=#FAQ8><h2 id="FAQ8"> Do you support Bundler? </h2></a>

Yes. If you have a Gemfile in your application directory when you deploy your application, we detect it and then bundle your gems. This means you can skip the gems page during the setup of your environment.

<a href=#FAQ9><h2 id="FAQ9"> Is PostgreSQL supported on Engine Yard Cloud? </h2></a>

Support for PostgreSQL 9 is an Alpha feature. For more information, see [[Engine Yard Beta Program|beta-intro]].  

<a href=#FAQ11><h2 id="FAQ11"> What scale of applications are appropriate for Engine Yard Cloud? </h2></a>

Engine Yard Cloud is our recommended deployment platform for users who want to scale from small to large scale web applications. It provides metered billing and advanced provisioning, monitoring and management workflows that make it ideal for:

  * Production environments that need to rapidly scale up or down with the demand of your application.
  * Temporary demonstration environments.
  * Utility instances for any use you can imagine and [[program with chef|custom-chef-recipes]].
  * Staging environments.  Use our cloning feature to quickly clone your current production environment.
  * Experimentation and exploration with Engine Yard's [[battle-ready stack|http://www.engineyard.com/technology/stack]].

Users who need specific compliance needs, such as SAS 70, should consider our dedicated [[private cloud offerings|http://www.engineyard.com/]].

<a href=#FAQ12><h2 id="FAQ12"> What types of applications run on Engine Yard Cloud? </h2></a>

If you've got an app that runs with:

  * Rails
  * Merb
  * Sinatra
  * Rack

Then it runs on Engine Yard Cloud.  See our [[Stack Page|http://www.engineyard.com/technology/stack]] for the latest version we support.

<a href=#FAQ13><h2 id="FAQ13"> Does Engine Yard manage my Domain Name or does my company? </h2></a>

You setup and control the DNS records for your domain name of your website. You'll setup the IP address inside the application and then point your DNS to that IP address.

<a href=#FAQ14><h2 id="FAQ14"> Do I need an IP address? </h2></a>

If you're just doing staging or testing, no.  If you're ready for production then yes, because you'll need the IP address to point your DNS entries to your IP address.

See [[IP Address Overview|ip-addresses]] for more information about IP addresses and how they are used with Engine Yard Cloud.

<a href=#FAQ15><h2 id="FAQ15"> Do I have sudo access? </h2></a>

Yes.  Via sudo you have complete control over your instances.  We have sudo configured so that the user you setup has access to sudo without a password being required.

<a href=#FAQ16><h2 id="FAQ16"> Can I use my own SSH key? </h2></a>

Yes, you can upload your own SSH key to Engine Yard Cloud.  You can even specify keys which keys are used on which environments.

For more information read the [[Manage Keys|ssh-intro]] section.

<a href=#FAQ17><h2 id="FAQ17"> Can I reboot my instance without worrying about losing data? </h2></a>

Yes.  An explicit *reboot* of an instance from the command line does not affect your data on your root partition. You can *reboot* the instance at will.

NOTE: Destroying an instance from the web interface and/or a crash of the instance does not preserve the data on the instance's root partition.

The distinction is between *rebooting* an instance and *terminating* an instance.  When you terminate an instance, the data on the root partition **is** lost. 

Therefore we recommend you keep all vital data on the persistent EBS storage volumes, which are attached as `/data` and `/db`.

[[View Amazon's FAQ: What happens to my data when my instance terminates?|http://developer.amazonwebservices.com/connect/entry.jspa?externalID=1145#02]]

<a href=#FAQ18><h2 id="FAQ18"> If I shutdown and create an instance with the same volumes, will I lose data? </h2></a>

No.  Turning off your instance destroys the virtual instance on Amazon EC2.  But, your files and data stored on the `/data` and `/db` volumes are saved to snapshots.  When you boot your instance again, select a custom configuration so you can choose the most recent snapshot. Your instance is then restored to the state before shutdown.

It's worth noting that snapshot of the `/data` volume is only taken off of the Application Master instance.  The same is true for the `/db` volume and the master database.

Read [[Instance Overview|instance-types|]] for more information.

<a href=#FAQ19><h2 id="FAQ19"> How do I migrate from SVN to Git? </h2></a>

GitHub has a guide that outlines many options for importing your SVN repository into GIT.

[[GitHub - Import from Subversion|http://github.com/guides/import-from-subversion|]]

If you plan on using GitHub, the first option to automatically import your SVN repo is straightforward.  The other manual options give you more control over reconfiguring your authors or the ability to import Tags.

<a href=#FAQ20><h2 id="FAQ20"> Are there reserved names in Engine Yard Cloud? </h2></a>

  * An environment cannot be named **test**.
  * A user account cannot be named **root**.

<a href=#FAQ21><h2 id="FAQ21"> What are availability zones? </h2></a>

"Availability Zones are distinct locations that are engineered to be insulated from failures in other Availability Zones and provide inexpensive, low latency network connectivity to other Availability Zones in the same Region. 

Each availability zone runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. Common points of failures like generators and cooling equipment are not shared across availability zones, and availability zones are designed to be independent with failure modes like fires and flooding."

Source: Feature Guide, Amazon EC2 Availability Zones (developer.amazonwebservices.com)

For information about setting availability zones, see [[Using multi-region on Engine Yard Cloud|using-multi-region-with-engine-yard-cloud]].

<a href=#FAQ22><h2 id="FAQ22"> How do I change my credit card information? </h2></a>

  - Click Payment Information under Account Management in the bottom left.
  - Enter in new credit card information and click Add a Credit Card.

After you've added a new card, you can change the current credit card. There is not a way to delete a credit card.

<a href=#FAQ23><h2 id="FAQ23"> How do Engine Yard Cloud instances differ from Engine Yard Managed slices? </h2></a>

### What Instances and Slices Have in Common

Your Engine Yard Cloud instance closely resembles the Engine Yard Managed slices.

The hard work, detailed configuration, and battle-tested setup that have gone into building the [[Engine Yard Stack|http://www.engineyard.com/technology/stack]] serve as the foundation for each Engine Yard Cloud instance. 

### Convention over Configuration

We continue to use conventions developed on Engine Yard Managed.  If you are familiar with an Engine Yard slice, you should feel at home.

### No GFS or Shared Volume

The primary difference you may notice is that there is no shared volume between instances.  If you need shared assets, use a service like [[Amazon S3|http://aws.amazon.com/s3/]] or [[Amazon Cloudfront CDN|http://aws.amazon.com/cloudfront/]].

<a href=#FAQ24><h2 id="FAQ24"> Unicorn failing to reload after Bundler </h2></a>

After upgrading to Bundler 1.0 you may notice that Unicorn no longer gracefully deploys.  In order to resolve this problem, you need to add the `unicorn` gem to your Gemfile like below and re-deploy.

    gem 'unicorn', '1.0.1'

Then restart unicorn like below:

    /engineyard/bin/app_myapp reload

<a href=#FAQ25><h2 id="FAQ25"> Do you offer any DDoS protection on Engine Yard Cloud? </h2></a>

Due to the nature of DDoS attacks and how difficult it can be to protect a site against the various DDoS attacks, Engine Yard does not offer any services to help in the event of a DDoS attack.

If you need assistance protecting your site against DDoS attacks, here are some companies to consider.

* [[Prolexic Technologies|http://www.prolexic.com]]
* [[Verisign|http://www.verisigninc.com/en_US/products-and-services/network-intelligence-availability/ddos/index.xhtml]]
* [[Serverorigin|http://serverorigin.com]]
* [[Black Lotus| http://www.blacklotus.net/]]
* [[CloudFlare| http://www.cloudflare.com/]]

<a href=#FAQ26><h2 id="FAQ26"> 400 Bad Request While Updating Chef Recipes </h2></a>

While trying to update your custom chef scripts, if you run into the error "400 Bad Request" you need to do two things.

  - Click Update Instance on the environment that you're trying to apply scripts to.
  - Run `sudo gem update engineyard` to make sure your `engineyard` gem is on the latest version.

This should make sure all API endpoints line up between the gem and the application.

Also you may see the error:

    EY::API::RequestFailed 400 Bad Request {"message":"A newer version of the Engine Yard stack is available. You must 'Update Instances' before custom chef recipes can be applied."}
    
<a href=#FAQ27><h2 id="FAQ27"> Error: "missing activerecord-mysql2-adapter gem" </h2></a>

To fix this, include the `mysql2` gem in your Gemfile.

<a href=#FAQ28><h2 id="FAQ28"> Bundler 1.0 will not install compiled gems in UNIX when bundle install is run in Windows </h2></a>

When developing on Windows, you'll find when you deploy your applications that it will not find certain gems such as MySQL2 no matter what you do.  For more information, see [[Bug report #646|https://github.com/carlhuda/bundler/issues#issue/646]].

<a href=#FAQ29><h2 id="FAQ29"> One of my instances is not responding. What can I do? </h2></a>

If one of your instances stops responding, it may have crashed or frozen. You need to terminate and rebuild the instance or environment, depending on which instance is problematic. For more information, see [[Dealing with a Frozen/Crashed Instance|frozen-instances]].

<a href=#FAQ30><h2 id="FAQ30"> Can I open a custom port for my application? </h2></a>

No. Turning on a custom port can create security risks and incite problems difficult to diagnose. 

<a href=#FAQ31> <h2 id="FAQ31"> Can I use my Engine Yard-provided AWS/S3 account for asset storage? </h2></a>

No. Engine Yard does not recommend this because:

* Engine Yard Cloud relies on specific and important resources in this AWS account. Accidental alteration of these resources can result in an unstable environment and even data loss.

* If you close your Engine Yard account, all your stored assets are deleted when the account is closed.  

Engine Yard *does* recommend that you set up a separate S3 account to store your assets. That way, you are in full control of your assets. For information about how to serve assets from an S3 account using fog and CarrierWave, see [[How to use CarrierWave (and optionally fog) to upload and store files|use-carrierwave-and-optionally-fog-to-upload-and-store-files]].



