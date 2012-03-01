# Moving your application to a different region

A common reason to migrate your application to a different region is to improve response times. For example, you are hosting your application in US West (Oregon) and you discover that most of your users are in Europe. If you move your application to the EU (Ireland) region, your users will experience better response times.

Unfortunately, an existing environment cannot simply be edited and restarted in a different region. The process of moving to a new region involves creating a new environment in a different region and copying the database and any assets "manually" to the new environment.   

##To move an application to an environment in a different region

This procedure assumes that you are moving a production environment. If you are moving a staging or testing environment, the procedure is simpler because downtime is not a concern. (Omit Steps 6 to 9.)

Also, this procedure describes moving the database and any assets by downloading to a local machine and then uploading to the new environment. If you prefer, you can use SSH agent forwarding to transfer files directly from the old environment to the new one. 


1. Create a new environment for your application in the new region.  
    For general information about creating an environment, see [[Create an environment|environment-create]].

2. Back up your database and download the backup onto your local machine.  

    For instructions, see:  
    * [[Back up on-demand|database_backups#topic2]]  
    * [[View and download database backups|database-download]]

3. Download any assets required for your site, for example, files on the /data volume.  

        scp deploy@ec2-111-111-111-11.compute-1.amazonaws.com:/data/mydata.Z ~/targetdirectory
	
	**Note:** To use the scp command, you need [[SSH keys|ssh-setup]] setup. 	

4. Upload your database and copy assets (if any) to the new environment.  

    For instructions on uploading the database, see [[Load your database (Scenario 2)|database-restore#topic2]].     

5. Test the new environment.

6. Enable your [[maintenance page|deployment-maintenance-pages]] for the old environment. 

7. Now that your site is disabled and users are no longer making changes to the database, repeat Steps 2 to 4 to make sure that your new environment has the latest data.

8. Update your DNS information so that your domain name points to the IP address of the new environment.

9. (Optional) Lower the TTL (time to live) for the old DNS record, for example to 60 seconds.

    This is to direct users to the new environment as soon as possible.

10. After a few hours and after confirming that your users can see and use your application in the new environment, stop the old environment.


<h2 id="topic5"> More information</h2>

<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>Regions in Engine Yard Cloud</td><td>[[Use Multi-Region on Engine Yard Cloud|using-multi-region-with-engine-yard-cloud]].</td>
	  </tr>
	<tr>
	  <td>Permanently deleting the old environment</td><td>[[Delete an environment|environment-delete]].</td>
	  </tr>
</table>