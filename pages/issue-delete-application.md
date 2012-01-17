# Stopping an application running on a multi-application environment

If your application is running in a multi-application environment, it continues to run *even* after you detach the application from the environment and delete the application. 

Follow this procedure to stop the application without bringing down the environment and stopping the other application(s) running on that environment.

##To stop an application running on a multi-application environment: 

1. Detach the application from the environment. (On the Dashboard, click the environment, and then click "Detach app_name from this environment" at the bottom of the page.)  
 
2. Delete the application. (On the Dashboard, click the application name, and then click the x icon.)  

3. SSH into the application master instance.

4. Type to delete nginx files and directories related to that application:  

        rm -rf /etc/nginx/servers/myapp*  

	where `myapp` is the name of your application. The asterisk is necessary to remove files such as myapp.conf and myapp.ssl.conf. If your application uses keep files, remove them too.
	

5. (Optional) Type to sanity check the remaining configuration:  
 
        sudo /usr/sbin/nginx -t

6. Type to reload nginx configurations:  

        sudo /etc/init.d/nginx reload

7. If the application is running in a clustered environment, repeat Steps 3 to 6 for any application slave instances.

<h2 id="topic5"> More information</h2>

<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
	  </tr> 
</table>
