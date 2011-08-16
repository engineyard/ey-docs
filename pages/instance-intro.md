# Introduction to Instances on AppCloud

## Topics

* ### [[Instance types & roles on AppCloud|appcloud-instances]]
  Learn more about the different types of instances and their roles on AppCloud.

* ### [[Instance sizes available for your environments|instance-sizes]]
  Learn more about the varying instance sizes available on AppCloud.
  
* ### [[Change an Instance size|instance-change-size]]
  Learn how to change an instances size within your AppCloud environment.
  
* ### [[Frozen instances on AppCloud|instance-frozen]]
  Learn how to deal with frozen or crashed instances on AppCloud.

## Persistent Storage
Your application code and database are written out to **persistent storage** 
volumes on AppCloud. We automatically mount these volumes and take backups for you.

Both the `/data` mount on the application master instance and the `/db` mount on the database 
master instance(s) are persistent. We take advantage of Amazon's EBS storage allowing us to 
take regular disk snapshots of both of these volumes. 

If you ever have to rebuild your instances from scratch you will have the ability to restore 
both of these volumes from previous snapshots.