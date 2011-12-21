# Migrating to the Engine Yard Cloud

This guide will help you migrate your application from your current environment to the Engine Yard Cloud. While many applications will run without any changes, some applications may require some configuration changes or customizations to take advantage of the Engine Yard Cloud service.  

To ensure you have as quick and smooth a migration as possible, it is important to plan each step of the process - and to test.

## Prerequisites 
  - Lower the TTL on your DNS to 5.
  - Create an initial migration plan.  Use our [[migration template|migration-steps-template]] as a starting point, which you can then adjust.
  - Review our [[FAQs|faq_home]] to learn what is supported in the Engine Yard Cloud.


## Prepare your application
  - [[Deploy your app|application_home]]
    * Load a dump of your current DB so you have some data to test against. See [[Restore or load a database|database-restore]] for instructions.
    * Setup any [[customizations|custom-chef-recipes]] you might need.
  - Test your setup for functionality. Some common areas to look for:
    * Ensure all areas of your application are functional.
    * Make sure you can deliver email, if needed.
    * Assets are being served properly.
    * Check that your app can properly connect to the database.

## Finalize your migration

   * Iterate through your migration plan skipping any steps that will affect your current production environment.
   * Update or add any steps as needed.
   * Continue to iterate until you can run through the migration without any issues.
   * Schedule the final cut-over and communicate the maintenance to your users. 

## Special requirements
  
Some applications have special considerations when migrating such as very large databases or very large traffic volumes. If you feel that your application falls into either of these categories please read on.

### Large data sets

If you have a large database, say over 2 GB, then you may not want to wait while you dump, compress, move, uncompress, and load your database. If this is the case we suggest that you contact our [[support organization|http://www.engineyard.com/support]] for an assisted data move.  Through our [[Professional Services Program|http://www.engineyard.com/support/services]] we can setup a replication stream from your current DB to your cloud DB.  

During the final cut-over one of our DBAs will be able to work with you to promote the new cloud DB to a master DB, ensuring that replication is completely caught up. This can take the move from a few hours to a few minutes.

### Heavy traffic applications

If you have a heavy traffic pattern it's very important to make sure you properly [[size your new environment|instance-types]] before migrating your users to your new environment. To give you peace of mind you can setup a load test. Using [[em-proxy|http://www.igvita.com/2009/04/20/ruby-proxies-for-scale-and-monitoring]] you can setup a load test with live traffic. Coupling this with [[New Relic|http://rpm.newrelic.com]] will allow you to review your cloud performance during your heaviest traffic times and make any needed adjustments. 

Read more on how to [[load test with real production traffic|em-proxy]].


## The Final cutover

When it's time for the final cutover you should have a nice migration guide that was fleshed out by walking through the steps above. You'll want to make sure you start the migration inside of a maintenance window that has been set with your end users. Here are some things to be aware of during the final cutover. 

  * In your current hosting environment put up your maintenance page and stop your application prior dumping the database. You want to be absolutely sure that your users are not still writing to the old database after you start the dump. 
  * Make sure you shut off any crons and/or background processes that modify data. This includes letting any queued processes finish running (if you are using something like [[resque|http://github.com/defunkt/resque]]). 
  * Lowering your TTL for your DNS a few days prior to the cutover will result in quick DNS updates.
  * Updating your DNS entries to point to cloud is the point of no return. After you do this, you'll be taking live traffic on your new cloud environment. As such it is especially important that you do one final test against your cloud setup before you update DNS. 

