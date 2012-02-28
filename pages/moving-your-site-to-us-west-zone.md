# Moving your application to a different region

The most common reason to migrate your Engine Yard application to a different geographical region is to move your application closer to your users. For example, if you are hosting your application in US West (Oregon) and you discover that most of your users are in Europe. If you move your application to the EU (Ireland) region, your users will experience better response times.



###About using SSH agent forwarding

The procedure below describes moving the database and other data by downloading it to a local machine and then uploading it to the new environment. Alternatively, particularly in a production environment, you might prefer to use SSH agent forwarding to transfer files directly from the old environment to the new one. 


##To move an application to a environment in a different region

1. Create a new environment for your application in the new region.  
    For general information about creating an environment, see [[create an environment|environment-create]]

2. Backup your database and download the backup onto your local machine.  

    For instructions, see  
        * [[Backup on-demand|database_backups.html#topic2]]  
        * [[]]
Dump your data from the /db volume and pull that dump down locally: [[Backing up the database|database_backups]].  

    This means:  
    a. Do a backup on-demand (http://docs.engineyard.com/database_backups.html#topic2).  
    b. Download the database backup (http://docs.engineyard.com/database-download.html)


2. Any other assets required for your site, on the /data volume need to be pulled down locally in preparation to be restored on the new zone.  

        scp deploy@ec2-50-19-112-194.compute-1.amazonaws.com:/data/preciousfile.txt ~/Downloads
	
	**Note:** To use the scp command, you need keys and scp setup. Link to SSH intro.	


3. Create a new environment for the application in the new region: (link to create an environment)


4. After your environment is up in the new region, upload your database and any assets, etc. to the new environment.  

    Follow Load your database (Scenario 2) http://docs.engineyard.com/database-restore.html#topic2
    Copy assets back with the scp command. 

    Test this environment.

6. Enable your [[maintenance page|deployment-maintenance-pages]] for the old environment.	Put up the maintenance on the old region's environment.  (link to deployment maintenance pages)

7. Do a final database dump and restore to get the final data off the old environment.

5. 	Update your DNS information so your domain name points to the new IP address for your environment in the US-West zone. 4. Change your DNS to point to the new environments IP address.

6. (Optional) Lower the TTL (time to live) for your old DNS record to 60 seconds.    2. Change your DNS TTL to the lowest setting, such as 60 seconds.
    This ensures that your users will be directed to the new region cluster sooner.

9. When the DNS finishes propagating and you have confirmed that your customers can see use your application in the new region, stop the old environment. 

###About using SSH agent forwarding

The procedure below describes moving the database and other data by downloading it to a local machine and then uploading it to the new environment. Alternatively, particularly in a production environment, you might prefer to use SSH agent forwarding to transfer files directly from the old environment to the new one. 




8. 

Update your DNS information so your domain name points to the new IP address for your environment in the US-West zone.


## To recreate an existing environment in a new region
  
  1. Follow the steps in [[cloning your environment|environment-clone]] to select the region.    
  2. Change your DNS TTL to the lowest setting, such as 60 seconds.
  3. Enable your [[maintenance page|deployment-maintenance-pages]] for the old environment.
  4. Change your DNS to point to the new environments IP address.



<h2 id="topic5"> More information</h2>

<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>Regions in Engine Yard Cloud</td><td>[[Use Multi-Region on Engine Yard Cloud|using-multi-region-with-engine-yard-cloud]].</td>
	  </tr>
	<tr>
	  <td>Permanently deleting the old environment</td><td>[[Use Multi-Region on Engine Yard Cloud|using-multi-region-with-engine-yard-cloud]].</td>
	  </tr>
</table>