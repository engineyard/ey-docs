# AWS Reboots for Older Versions of the Engine Yard Stack

If your environment is running an older version of the Engine Yard stack that is not fully compatible with the current dashboard, you will need to follow these instructions.

To minimize post-reboot down time for your environment, we have turned off the automatic Chef run on reboot for you.  While this will protect you from the incompatibility, this will result in processes started by Chef not starting automatically on reboot.

1. Make notes on what processes are running on your instances.  Capture any unique configurations that are not reflected in your custom chef recipe.
2. Reboot all database instances. Please follow **[[these instructions|aws-reboot-database]]** to ensure database integrity. 
3. Once the instances have rebooted, ssh into them to ensure all processes are running:
  
    * If you have set up configurations via custom chef recipes, you can run the following command (all on one line) to start all processes up again:
  
    `/usr/local/ey_resin/bin/ey-enzyme --main --chef-bin /usr/local/ey_resin/bin/chef-solo`
  
    * If you do not have all your configurations captured in a custom chef recipe, you will have to manually start any additional processes -- refer to the notes you gathered before rebooting your instances.
4. Reboot all utility instances, performing step 3 on them as they become available again. For utility instance with database-like services, follow **[[these instructions|aws-reboot-database]]** to ensure data integrity.
5. Go to each of your application instances (master and slaves), and issue the following command to stop the automatic master takeover from happening when the instances are rebooted:
  
    `sudo -s /usr/local/ey_resin/bin/stonith-stop`
  
6. Reboot all application instances.
7. Repeat step 3 for the application instances.

**Note:** To reboot any instance, ssh onto that instance and issue the following command:

    sudo shutdown -r now