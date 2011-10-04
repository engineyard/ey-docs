# Replacing degraded instances

Read this page if you have received notification from Engine Yard that one of your instances is degraded and that you need to terminate the instance and boot another. 

Engine Yard gets notification of degraded instances from Amazon and forwards the message so that you can take action.

When you get one of these notifications, it might state the time that the underlying hardware will be taken offline. If there is no time specified, replace the degraded instance as soon as you can.

If you don't replace the degraded instance in time, it might become frozen. For information about frozen instances, see [[Dealing with frozen or crashed instances|instance-frozen]].

## What is a degraded instance?

An instance is degraded when the host hardware that the instance is running on fails. The hardware failure is not catastrophic. However, Amazon needs to shut down the host to carry out maintenance. When this maintenance happens, all instances on the host are terminated.

## To replace a degraded instance

If the degraded instance is:  

 * An **application master** or **solo instance**, then [[terminate and rebuild the whole environment|environment-rebuild]].  
 * An **application instance**, then terminate the degraded instance via the instance's ![Terminate icon](images/terminate.png) icon on the Dashboard, and then add a new instance to the cluster.  
 * A **utility instance**, then terminate the specific instance via the instance's  ![Terminate icon](images/terminate.png) icon on the Dashboard, and then add a new instance to the cluster, using the most recent snapshot.  
 * A **DB master**, then [[rebuild the whole environment|environment-rebuild]]. A DB master cannot be terminated.  
