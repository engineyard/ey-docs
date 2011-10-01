# How to migrate your application

## This is an initial template you can use for your migration steps

### Migrations steps template

  - Put up your maintenance page on your current environment
  - Stop the application
  - Stop all background jobs, cron jobs, etc that update data
  - Ensure that there are no longer any connections to the database
  - Dump and compress the database
  - `scp` it to your database instance
  - `rsync` any assets over to your new instance(s)
  - Load your the DB dump into the database
  - **Test** the new setup on Engine Yard Cloud (this is the final step before sending your users over to the new setup)
  - Update DNS to point to your Engine Yard Cloud IP
  - Update your nginx config to redirect any traffic hitting your old IP to the new IP
  - Congrats you're done!

<html><div style="clear:both;"></div></html>

Before you start your migration, we recommend that you walk through the above steps, modify them as needed for your particular environment and add/remove steps as needed.  For a running production environment, you can just document and simulate steps 1-4 and 10-11 and walk through the remaining steps. 

**Tip:** Listing out or scripting any commands needed for each step can save time and prevent human errors.