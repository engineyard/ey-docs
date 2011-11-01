# Steps to recover from a US-East outage

**If data retention is more important to you at this time, we are recommending that you wait it out now until full operation is restored. Looking at the AWS status page now (http://status.aws.amazon.com), it doesn't sound like this can be too much further away.**

**Steps to recover if multi-region is not an option**

*Trying a different subzone*

Some customers have been able to utilize our multi-region beta feature to move to another availability zone. However, it may be best to first try and create on East in a different sub zone since this would be the simplest option. Amazon is stating that all but one subzone in the US East region is operating properly. Unfortunately, the zone labels are assigned differently on a per-client basis to aid in load balancing -- so we recommend using trial-and-error by selecting a specific zone in the “Edit Environment” link on the Environment page.

*Note about snapshots*

Taking snapshots can fail if your volume is affected by the EBS problem. Normally when an environment is terminated we initiate snapshots of the volumes required to bring the environment back up to its previous state. This can fail for the environment affected by this problem. If you choose to take down the environment, it can result in data loss.

**Steps to recover if multi-region is an option**

Follow the directions on [[Moving your site to US West|moving-your-site-to-us-west-zone]]