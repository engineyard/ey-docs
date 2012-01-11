# Using Multi-Region on Engine Yard Cloud


With Multi-Region in Engine Yard Cloud, an entire environment and its instances 
can be located in a particular geographic region around the world. 

If a majority of your application users are based in a certain region, then locate your environment in the region that is closest to those users. This can lower latency and response
times for your users in that region.


These AWS regions are supported:

  * US East (N. Virginia), us-east-1
  * US West (N. California), us-west-1
  * US West (Orgeon), us-west-2
  * EU West (Dublin), eu-west-1
  * Asia Pacific (Singapore), ap-southeast-1
  * Asia Pacific (Tokyo), ap-northeast-1
  * South America (Sao Paulo), sa-east-1




![Engine Yard Regions](images/ey-regions_sm.png)


## Current limitations

  * Environments cannot be migrated to a new region (the region cannot be changed).
  * Environments can be cloned, but only in the same region.
  * IP addresses are assigned to a region -- and thus cannot be moved to a different region.
  * All limitations regarding the number of instances, IP addresses, and snapshots are per-region.
  * Pricing within each region is subject to change.

## To boot an environment in any region

When [[creating a new environment|environment-create]], select the 
region this environment should be deployed to. Finish configuring this 
environment and click Create Environment.

When the environment has been saved, configure your environment instances on the next page 
and boot. This environment is now being deployed in the Region you selected.


## To recreate an existing environment in a new region
  
  1. Follow the steps in [[cloning your environment|environment-clone]] to select the region.    
  2. Change your DNS TTL to the lowest setting, such as 60 seconds.
  3. Enable your [[maintenance page|deployment-maintenance-pages]] for the old environment.
  4. Change your DNS to point to the new environments IP address.

When the DNS finishes propagating, your customers see your application in the new region. You can now shut down your old environment.
