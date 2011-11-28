# Connect to your instance via SSH

After you have [[setup your keys|ssh-setup]] locally, [[added your keys|ssh-add-to-cloud]]
to Engine Yard Cloud and [[installed the keys|ssh-install]] to your applications environment, you 
are now ready to connect to your instance(s) via an SSH client.

There are two methods to start an ssh session:

  1. ### Manually start a console session 
     * Open Terminal or your preferred ssh client.
     * SSH using your own ip address and username `deploy`. For example:
       
            ssh deploy@123.123.123.123
          
     * SSH using your own amazon hostname and username `deploy`. For example:
          
            ssh deploy@ec2-123-123-123-123.compute-1.amazonaws.com
      
  * ### Use our automated SSH link
      * Go to your **Dashboard**.
      * Click an environment you want to connect to.
      * Click the **SSH** link.
      * You should receive a prompt to launch an ssh client. **Accept this prompt**.


### Outcome

You should now be connected to an instance via an ssh session.
