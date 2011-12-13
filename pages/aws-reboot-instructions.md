# Required Reboot of All Running Instances

Due to some urgent maintenance performed by Amazon, the Infrastructure provider we use for our Engine Yard Cloud product, you are required to reboot your instances to have these changes applied.  If you do not reboot your instances by the prescribed date, your instance will be rebooted for you by Amazon, though it is much preferred that you do it yourself at a time that is convenient for you and your users prior to that to mitigate any issues. 

To reboot each instance, you simply log into the instance via ssh and issue the following command:

    sudo shutdown -r now

That being said, there are several caveats to follow to make the process run smoothly, which are listed below (and why you want to do this yourself rather than wait for Amazon to reboot them for you)

First off, if you have any custom configurations that you have applied directly onto an instance without using custom chef recipes, there is the potential that these will be overwritten by the Chef provisioning process that is run on reboot.  Please backup any of these changes off-instance, as you may have to re-apply these after reboot.  We highly recommend using custom chef recipes to automate this configuration process so that your system configuration can be rebuilt correctly when needed.

Secondly, it is recommended that your reboot your instances in the following order: databases, utility, then application.  You will want each group to return from reboot prior to starting the reboot of the next group, as this makes sure resources used by following groups (such as databases, memcached, etc.) will be available when they are started.

When rebooting database instances (or utility instance with database-like services), follow the instructions **[[found here|aws-reboot-database]]** to ensure database integrity.

Finally, when rebooting application instances, you will want to turn off the protective automatic failover mechanism.  This is normally used to promote a slave application instance to master should the master become unavailable, but in this case, that behaviour is not desired as all the instances are being rebooted.  To turn this off, issue the following command on every application instance prior to rebooting any of them:

    sudo -s /usr/local/ey_resin/bin/stonith-stop