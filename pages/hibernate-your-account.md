# Hibernate Your Account

If you don't need to use your EY AppCloud account, you don't have to cancel, hibernate it instead!

## What is Hibernation?

You Hibernate your account when you turn off all running instances, delete all environments and remove any Elastic IP addresses.

## Step-by-Step Instructions

  - Go to your Dashboard.
  - Turn off your instances by clicking on the **Terminate** button.
  - Then **Delete** each Environment.
  - Click on **IP Addresses**, under Server Tools.
  - Then make sure to **Delete** all Elastic IP addresses.

## Why Do I Have to Delete the IP Addresses?

If an IP address is in use, Amazon will not charge you. But if you "reserve" an IP, that is keep it assigned to your account but not running an instance, Amazon charges you a monthly fee for each IP address.

They charge $0.01 per hour.  For a 30 day month, that would be $7.20 to keep the IP address.

## How to Re-activate

When you're ready to use EY AppCloud again, just log in to your account, re-create your environment and start up an instance.
