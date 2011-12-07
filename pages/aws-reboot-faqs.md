# AWS Reboot FAQs

## What is happening with Amazon?

Amazon is in the process of applying patches to their systems. Alerts will be sent 
to you via email and dashboard with more instructions on how to proceed when the 
patch is available for your instances. To complete the patch process, 
your instances will need to be restarted. Amazon and Engine Yard are 
currently working on a plan to ensure this is as painless as possible. Engine 
Yard will provide more information on timeframes shortly. In the meantime, 
here is some additional information from Amazon:

_We frequently upgrade our EC2 fleet, with many of our patches and upgrades being applied invisibly to customers. However, some updates require instances to be restarted and we periodically reboot instances in order to apply these updates. The upgrade we're currently rolling out to a portion of our fleet requires a short reboot of these customer instances. We recently released our Scheduled Events functionality which allows customers to have greater visibility into when these reboots are happening going forward. In addition to added visibility, this enables customers to manage reboots on their own schedule if they want to reboot before the scheduled update window. This data is available for customers to easily see on the AWS management console as well as through the APIs. Reboots such as these should be infrequent, but may be necessary from time to time to apply upgrades that strengthen our security, reliability and operational performance._


## When will my instances be rebooted?

You will be receiving an email with your specific reboot instructions 
and/or time window.  Please know we are working closely with Amazon to ensure 
this process is as seamless as possible.

## How do I reboot my instances?

**[[Follow these instructions|aws-reboot-old-stack]]** if you are on an **older version** of the Engine Yard stack.

**[[Follow these instructions|aws-reboot-instructions]]** if you are on a **newer version** of the Engine Yard stack.

## How do I know if I am on an old or new stack?

This information was included in the information we emailed you regarding the AWS reboot.

## How do I protect my data?

In order to minimize chances of database corruption you will want to cleanly shutdown 
your database prior to your scheduled instance reboot. To learn more about shutting
down your database properly during this reboot, **[[click here|aws-reboot-database]]**.

## There is upgrade available to my environment, should I upgrade first?

No, we would recommend you wait to update your environment until the reboot maintenance is over. We also recommend not doing any further changes to your environment or application until the reboot maintenance is over.