# Database Backups

## Frequency

By default the database is backed up every 24 hours and we rotate 10 days worth of backups.

So if today is a Monday you can restore back to the 2nd previous Friday.  

Use the quick list below to see at a glance how far back your backups are currently stored.  The last day on the row would be whatever day it is today.

  F S U M T W R F S U M  
  S U M T W R F S U M T  
  U M T W R F S U M T W  
  M T W R F S U M T W R  
  T W R F S U M T W R F  
  W R F S U M T W R F S  
  R F S U M T W R F S U

LEGEND: M=Monday, T=Tuesday, W=Wednesday, R=Thursday, F=Friday, S=Saturday, U=Sunday

When creating or editing an environment you can change the default settings for number of backups and hours between backups.

![Backup Options](images/backup_options.jpg)


## Locate Backups

Your database backups are located under the **More Options** tab of your environment. Once you click on this tab, you will see the **Database Backups** link. Clicking on this will give you download links for the last 10 days worth of backups.

Download the backup you are interested in restoring and you can continue with the next step.

## Restore a Backup

The key to which instance you run the restore command on is if you're running a separate database server or not.

If you've setup an [[ssh alias to your database or solo instance|env_ssh_keys]] then you could use a command like this to copy your dump to your instance:

    scp ~/Downloads/wiki_production.2010-03-17T01-10-03.sql myapp/~

And that would copy the sql dump file to the home folder of the deploy user on your myapp solo instance.  Once again, if you have a separate database instance, you'll need to move the sql dump file to **that** instance instead.

Here's the command to run to restore a backup:

    mysql --user=XXXXXXXX --password=XXXXXXX database_name < /path/to/dumpfile.sql
