<h1>Termination failed</h1>

<b>Symptom</b>  

The Instances tab shows "Termination Failed" for one or more instances.  

![termination failed message](images/termination_failed.png)

<b>Solution</b>

Occasionally, Amazon cannot shut down an instance when a termination request is made. If this happens, you get a "Termination Failed" message. You can do one of two things:  

*  Click <b>Retry</b> to try again to terminate the instance. If AppCloud cannot terminate the instance within 10 minutes, it returns another "Termination Failed" message.

*  Click <b>Force</b> to force-terminate the instance. 

<!--<b>Important!</b> If you select Force, the termination snapshot might not be good. If you later boot a cluster and use a "force-terminated" snapshot for the application instance, make sure to test the instance.-->