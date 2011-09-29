<h1>Termination Failed error when shutting down an instance</h1>

Occasionally, Amazon cannot shut down an instance when a termination request is made. If this happens, you get a "Termination Failed" message. 

The Instances tab shows "Termination Failed" for one or more instances.  

![termination failed message](images/termination_failed.png)

<h2> To resolve a Termination Failed error </h2>

1. Do one of the following:  

    *  Click <b>Retry</b> to try again to terminate the instance. If Cloud cannot terminate the instance within 10 minutes, it returns another "Termination Failed" message.

    *  Click <b>Force</b> to force-terminate the instance. 

        <b>Important!</b> If you select Force, the termination snapshot might not be good. If you later boot a cluster and use a "force-terminated" snapshot for the application instance, make sure to test the instance.