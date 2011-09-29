# Introduction to Instances on Cloud

Instances on Cloud comprise of the compute resources that are dedicated to running
your Ruby application in the cloud.  Instances can be configured to serve your 
application tier, database tier, cache tier, background processing and utilities, 
and more.  On Cloud, instances are available in a handful of size configurations to 
meet your cpu, memory, and disk space needs.  


## Topics

* ### [[Instance types & roles on Cloud|instance-types]]
  Learn more about the different types of instances and their roles on Cloud.

* ### [[Instance sizes available for your environments|instance-sizes]]
  Learn more about the varying instance sizes available on Cloud.
  
* ### [[Change an Instance size|instance-change-size]]
  Learn how to change an instances size within your Cloud environment.
  
* ### [[Frozen instances on Cloud|instance-frozen]]
  Learn how to deal with frozen or crashed instances on Cloud.

* ### [[Degraded instances on Cloud|instance-degraded]]
  Learn how to replace a degraded instance on Cloud.

* ### [[Application master takeovers|instance-takeover]]
  Learn what happens when an application master fails and what actions you need to take both to prepare for takeover and if a takeover occurs.

## Persistent Storage
Your application code and database are written out to **persistent storage** 
volumes on Cloud. We automatically mount these volumes and take backups for you.

Both the `/data` mount on the application master instance and the `/db` mount on the database 
master instance(s) are persistent. We take advantage of Amazon's EBS storage allowing us to 
take regular disk snapshots of both of these volumes. 

If you ever have to rebuild your instances from scratch you will have the ability to restore 
both of these volumes from previous snapshots.