# Dump and Load your MySQL Database

Here are the steps involved to dump a MySQL Database from one location and load it into a database in another location.

## Create a Dumpfile

First conduct a MySQL dump, then compress and copy the output to the new location:

    mysqldump -u user -ppassword -h hostname dbname > dumpfile.sql  
  
    gzip -v dumpfile.sql 
   
    scp dumpfile.sql newserver:/path/to/file/dumpfile.sql 

**NOTE: You'll need keys and `scp` setup for the `scp` command to work.**

## Import a Dumpfile

SSH into the new location, Uncompress and import the MySQL dump.

    gunzip -v dumpfile.sql

    mysql -u user -ppassword -h hostname dbname < dumpfile.sql

## Concepts and Terms

Keep in mind that terms such as `user`, `password`, `hostname` and `newserver` need to be replaced with the appropriate values for your environment(s).  Of specific note, there is no space between `–p` and `password` when entering said commands.