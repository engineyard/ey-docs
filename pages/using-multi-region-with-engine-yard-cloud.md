# Using Multi-Region on Engine Yard Cloud


With Multi-Region in Engine Yard Cloud, an entire environment and its instances 
can be located in a particular geographic region around the world. 

If a majority of your application users are based in a certain region, then locate your environment in the region that is closest to those users. This can lower latency and response
times for your users in that region.


These AWS regions are supported:

  * US East (N. Virginia), us-east-1
  * US West (N. California), us-west-1
  * US West (Oregon), us-west-2
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

<h2 id="topic5"> More information</h2>

<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>Moving your application to a different region</td><td>[[Moving your application to a different region|moving-your-site-to-us-west-zone]].</td>
	  </tr>
</table>