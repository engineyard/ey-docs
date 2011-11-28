# Dealing with frozen or crashed instances

From time to time, an instance can freeze or crash and become unresponsive. When this happens you will find that you are unable to access the instance over SSH (the connection will time out, or you might see *no route to host* messages).

An instance can crash or freeze up like this for several reasons, usually it's due to resource problems on the instance, with system load increasing due to memory over-usage, or possibly an application bug that might be stressing the instance in some other way. Occasionally, the problem may be due to issues with the underlying host server that runs the instance, or maybe a kernel bug.

When viewing your Dashboard, you will notice that the status icon for the instance in question may still be green - this is because these icons are designed to show you whether the last chef run was successful, they are not aware of a system's up/down status.


## Following up on failures

Often, customers ask us to follow up occurrences of frozen instances to see if we can find out what caused the problem. Unfortunately, when an instance is terminated, the log files disappear along with it, so there is not usually any insight that we can gain into the reasons for a crash. However, we are sometimes able to find out from Amazon if there was an issue with the host server running that instance, so it is a good idea to make a note of the instance ID from the Dashboard before you initiate a termination.

While we cannot often find out the reason for a crash like this, it's certainly a good idea to make sure that you have the email alerts enabled for all your environments in the Dashboard. Doing this should make sure that you are being made aware of any possible resource problems (running out of RAM, high I/O wait) or system overloading that may have been happening on the run up to the instance failing. Having these alerts to hand can sometimes help with figuring out what caused the problem.


## Recovering from a frozen instance

*Note: When rebuilding the instance or environment as per the instructions below, do not worry that the snapshot process will not work. Snapshots are handled by the machines that host the EBS disks, not the instances, so a snapshot can still run against an instance even if it has crashed.*

After you have lost the ability to connect to the instance over SSH, the only way to recover is to terminate it and rebuild from snapshots. The way to do this differs, depending on the role of the problematic instance:

  * **Application Master or Solo Instance** - If an application master in a clustered environment fails, our takeover process kicks in and terminates this instance for you. It promotes another application instance to the master and build another application instance for you. (For more information about this process, see [[Application master takeover|instance-takeover]].) However, if you run a solo environment, then this protocol is not in place and you will need to [[terminate and rebuild the whole environment|environment-rebuild]].
  * **DB Master** - If your DB master fails, you need to [[rebuild the whole environment|environment-rebuild]] as there is no way to terminate a DB master.
  * **Application Instance** - You can terminate the specific problematic instance via the instance's ![Terminate icon](images/terminate.png) icon on the Dashboard, then add a new instance to the cluster.
  * **Utility Instance** - you can terminate the specific problematic instance via the instance's  ![Terminate icon](images/terminate.png) icon on the Dashboard, then add a new instance to the cluster, using the last snapshot that was taken.


## Note about custom chef recipes

Because instances or environments need to be terminated and rebuilt, it is important that any customizations that you have made to your environment have been carried out using custom chef recipes and not just done manually. When chef recipes have been used, a rebuild should be painless and can get you back up and running again quickly, without any intervention required. Please make sure you are familiar with our [[custom chef docs|custom-chef-recipes]] and you are using recipes for your custom configurations.

