# Using Multi-Region on AppCloud


If you have multi-region enabled, you will be able to create environments and boot instances in any of the following Amazon regions:

  * US East (Northern Virginia/us-east-1)
  * US West (Northern California/us-west-1)
  * EU (Ireland/eu-west-1)
  * Asia Pacific (Singapore/ap-southeast-1)

All AppCloud features are supported in each of these regions.

{{:beta:ey-regions_sm.png|}}


## Current Limitations

There are a few limitations:

  * Environments cannot be migrated to a new region (the region cannot be changed).
  * Environments can be cloned, but only in the same region.
  * IP addresses are assigned to a region - and thus cannot be moved to a different region.
  * All limitations regarding the number of instances, IP addresses, and snapshots are per-region.
  * **WARNING**: Database backups are currently being sent to **US East** region (us-east-1), so all backup traffic will incur bandwidth charges. 
    * This is limitation is scheduled to be lifted before Multi-Region leaves the Beta Program.
  * Pricing within each region is subject to change.

## Steps for Booting Instances in any Region


After the Multi-Region feature is enabled for your account, click the ‘Create New Environment’ button in the AppCloud dashboard.

Click the drop-down arrow next to **Show advanced options** to choose the Availability Zone.

{{:beta:show_adv_options.jpg|}}

Under the drop down box for **Availability Zone**, you can choose from any of the Amazon Regions and the specific Availability Zone for each.

{{:beta:availability_zone.jpg|}} 

Add your application to the environment. It will prompt you to add your domain name. If you do not want to set your domain name at this point, you can leave the “_” domain name as a default.

Environment is created. Boot Instances for this and wait for the instances to boot.


## Recreating Existing Environments in a New Region

If you currently have an application deployed in our US East region and would like to move it to one of the newly offered regions, follow these steps below explaining how.

### Create a New Environment in the New Region

First, Create a new environment and choose the new region. Then you can choose the application to add.

Next, boot Instances for this new environment.

Finally, deploy your application and run any migrations you need.

### Migrate Your Data to New Region

Next, you need to migrate the data from your old application. Since snapshots cannot be moved across environments, you need to take the data from your database and move it to your new one. 

On your old environment, take a database dump and gzip it.

    mysqldump -u USER -pPASSWORD -h HOST db_name > db_dump.sql

    gzip db_dump.sql

**NOTE:** The username, password and host can be found in `database.yml`. On a solo instance, HOST will be localhost for example.

On your local machine, copy the dumpfile from the old environment:

    scp deploy@127.0.0.1:/data/app_name/current/db_dump.sql.gz .

Then, copy this file to your new environment:

    scp db_dump.sql.gz deploy@127.0.0.2:/data/app_name/current/db_dump.sql.gz

SSH into the new environment and unzip your dumpfile:

    gunzip -v db_dump.sql.gz

Finally, load your database dump into the MySQL database:

    mysql -u USER -pPASSWORD -h localhost db_name < db_dump.sql

From here you can check the data is correct and your application is working perfectly. Make sure you update your DNS records to point to this new IP address.


### Final Migration to New Region

Change your DNS TTL to the lowest setting, such as 60 seconds. Make this change as early in the migration process as you can to minimize the "maintenance" downtime.

Setup and enable your maintenance page on your old environment.

Perform a final database migration, as above.

Change your DNS to the new IP addresses for the new environment. When the DNS finishes propagating, your customers will automatically see your application in the new region!