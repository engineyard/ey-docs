# Steps to Recover from a US-East Outage

We sincerely apologize for the downtime and issues that this has cause for your company and customers.  We have compiled these steps, with links to helpful documentation, in order to help you recover your site.

Here are the steps you can take to bring your site back up in the US West zone.

- Dump your data from the /db volume and pull that dump down locally: http://docs.engineyard.com/dump-and-load-your-mysql-database.html

- Any other assets required for your site, on the /data volume would also need to be pulled down locally in preparation to be restored on the new zone.

NOTE: If you’re unable to get your files from either /db or /data volumes please open a [ticket with support](http://support.cloud.engineyard.com) immediately.

- This excellent blog post shows how to create a new environment in the US-West zone: http://www.bluemangolearning.com/blog/2011/04/migrate-instance-to-us-west-availability-zone-in-ey-appcloud/

- Once your environment is up in the US-West zone you’ll need to upload your database and any assets, etc. to the new environment.

- The final step will be to update your DNS information so your domain name points to the new IP address for your environment in the US-West zone.