# Dump and Load your Postgres Database

## Create a Dumpfile

First conduct a Postgres dump, then compress and copy the output to the new location:

	pg_dump -o dbname > dumpfile
		
	gzip -v dumpfile
	
	scp dumpfile newserver:/path/to/file/dumpfile
	
**NOTE: The -o flag is required to dump OIDs (such as foreign keys)**

**ALSO NOTE: You'll need keys and `scp` setup for the `scp` command to work.**



## Import a Dumpfile

SSH into the new location, Uncompress and import the Postgres dump.

    gunzip -v dumpfile

	psql dbname < dumpfile
	
	
## Helpful links

[[Official Postgres Docs|http://www.postgresql.org/docs/8.1/static/backup.html]]
