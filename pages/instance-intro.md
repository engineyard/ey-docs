# Introduction to Instances on Engine Yard Cloud

Instances on Engine Yard Cloud comprise of the compute resources that are dedicated to running
your Ruby application in the cloud.  Instances can be configured to serve your 
application tier, database tier, cache tier, background processing and utilities, 
and more.  Instances are available in various configurations to 
meet your CPU, memory, and disk space needs.  


## Topics

* ### [[Instance types and roles|instance-types]]
  Learn about the different types of instances and their roles on Engine Yard Cloud.

* ###[[Instance limits for your account|instance-limits]]  
  Learn how many instances are allocated to your account and how to increase the allocation.

* ### [[Instance sizes available for your environments|instance-sizes]]
  Learn about the varying instance sizes available on Engine Yard Cloud and how to get more instances for your account.
  
* ### [[Change an Instance size|instance-change-size]]
  Learn how to change an instances size within your Engine Yard Cloud environment.
  
* ### [[Frozen instances|instance-frozen]]
  Learn how to deal with frozen or crashed instances on Engine Yard Cloud.

* ### [[Degraded instances|instance-degraded]]
  Learn how to replace a degraded instance on Engine Yard Cloud.

* ### [[Application master takeovers|instance-takeover]]
  Learn what happens when an application master fails and what actions you need to take both to prepare for takeover and if a takeover occurs.

## Persistent storage
Your application code and database are written out to **persistent storage** 
volumes. We automatically mount these volumes and take backups for you.

Both the `/data` mount on the application master instance and the `/db` mount on the database 
master instance(s) are persistent. We take advantage of Amazon's EBS storage allowing us to 
take regular disk snapshots of both of these volumes. 

If you ever have to rebuild your instances from scratch you will have the ability to restore 
both of these volumes from previous snapshots.

<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
<tr>
    <td>adding an instance to a cluster</td><td>[[Clustered Environments|environment-cluster]]</td>
  </tr>

</table>
