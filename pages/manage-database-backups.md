# Managing database backups

Each instance comes with the `ey-backup` gem pre-installed.  This tool will allow you create, view, download, and restore your database backups.

## On-Demand backup

While your regular database backups will be performed according to the schedule you set for your environment, you can also request a backup to be performed at any time.  This is done with the following command:

    sudo -i eybackup --new-backup

**Tip:** Instead of `--new-backup` you may use the abbreviated flag `-n`.

## List available backups

You may view all available backups at any time.  Assuming that the name of our database is "Tests_production", we would use the following command:

    sudo -i eybackup --list-backup Tests_production

**Tip:** Instead of `--list-backup` you may use the abbreviated flag `-l`.

You will see a list like:

    listing Tests_production database
    0:Tests_production Tests_production.2009-01-22T08-02-17.sql.gz
    1:Tests_production Tests_production.2009-01-22T08-02-29.sql.gz
    2:Tests_production Tests_production.2009-01-22T08-03-06.sql.gz

**Tip:** Notice that each of the backups has a numeric index.  This is used to identify individual backups for the options that we will describe next.

## Download a backup

You may download a backup file, identified by it's unique index.  For example, if we wished to download the backup file `Tests_production.2009-01-22T08-02-29.sql.gz` shown above, we should note that it has an index of `1:Tests_production`.  The command to download the file would then be:

    sudo -i eybackup --download 1:Tests_production

**Tip:** Instead of `--download` you may use the abbreviated flag `-d`.

The file will be downloaded into `/mnt/tmp` on your server instance.

## Restore from a backup

If you wish to restore your Database from an available backup, assuming we again wished to use the above mentioned backup with an index of `1:Tests_production`, we would use the following command:

    sudo -i eybackup --restore 1:Tests_production

**Tip:** Instead of `--restore` you may use the abbreviated flag `-r`.

**WARNING!** This command will result in your current database being completely overwritten with the selected backup.  That being the case you may wish to execute a `--new-backup` immediately prior to the restore.

## Download a file

If you want to download the backup file you just created, read the [[Download a Database Backup|download-a-database-backup]] article.


-------

GOO TO KEEP FOR A LITTLE WHILE


## Locate Backups

Your database backups are located on the Environment page under the More Options heading. Click Database Backups to see download links for the last 10 days of backups.

Download the backup you are interested in restoring and you can continue with the next step.

## Restore a Backup

The key to which instance you run the restore command on is if you're running a separate database server or not.

If you've setup an [[ssh alias to your database or solo instance|ssh-intro]] then you could use a command like this to copy your dump to your instance:

    scp ~/Downloads/wiki_production.2010-03-17T01-10-03.sql myapp/~

And, that would copy the sql dump file to the home folder of the deploy user on your myapp solo instance.  Once again, if you have a separate database instance, you'll need to move the sql dump file to **that** instance instead.

Here's the command to run to restore a backup:

    mysql --user=XXXXXXXX --password=XXXXXXX database_name < /path/to/dumpfile.sql