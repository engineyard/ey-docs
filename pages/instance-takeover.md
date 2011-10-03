#Application master takeover

Takeover is the Engine Yard failover process for recovering from failure of an application master instance.

**Note:** Takeover requires that you have at least one _application_ slave in your environment. 

If your application master has failed and takeover is happening, you:

* Receive automated email notification from Engine Yard.  
* See a takeover message for the environment on your Dashboard.  
    ![Takeover message](images/takeover_message.png)

Takeover occurs when Engine Yard detects that your application master is unable to reliably respond to requests. For example, this can happen because of an Amazon EC2 issue or because the instance froze. If the instance does not recover within a short time, Engine Yard does the following: 
 
* Terminates the problem instance.  
* Promotes an application slave to master.  
* Assigns the old master's IP address to the new master.  
* Replaces the application slave instance that was promoted. (The new application slave uses the same version of the stack as the other instances in that environment.) 
 

##Action required to apply cron jobs and custom chef recipes

The new application master is the same as the old one with two important exceptions:  

* Cron jobs are not set up.
* Custom chef recipes are not applied.

###To apply cron jobs and custom chef recipes to the new application master:
1. In your Dashboard, click the environment name.
2. Click Apply.  
    This applies/reapplies configuration, including cron jobs and custom chef recipes as appropriate, to all instances in the environment.

##Be prepared

Do the following to prepare your environment in case of application master failover. 

###To prepare your environment:

1. **Do keep** a spare application server.  
    Make sure that your cluster has one spare application server. For example, if you need three application servers to serve the everyday traffic, put four application servers in your cluster. Without a spare, your site might fail or slow down under load during the takeover.

2. **Don't keep** important data on the application server alone.  
    For example, if your application stores user-generated content, consider an online storage web service (such as Amazon S3). 

<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
    <td>Using online storage web services (such as Amazon S3) with applications</td><td>[[How to use CarrierWave (and optionally fog) to upload and store files|use-carrierwave-and-optionally-fog-to-upload-and-store-files]] </td>
  </tr>
  <tr>
    <td>Frozen instances</td><td>[[Dealing with frozen or crashed instances|instance-frozen]]</td>
  </tr>
</table>
