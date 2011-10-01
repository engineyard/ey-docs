# Hibernate your Engine Yard account

If you don't need to use your Engine Yard account, you don't have to cancel, you can instead
hibernate your account. You can hibernate your account simply by stopping all running 
instances, delete all environments and removing any Elastic IP addresses.


## To hibernate your account
Your account is hibernating when all instances have been stopped, all environments have 
been removed, and all IP addresses have been deleted.

  1. Login to your Engine Yard account.
  2. For each environment in your account, click Stop.
  3. Then click Delete for each Environment.
  4. Click the IP Addresses menu item in your Dashboard.
  5. Click the Delete icon for each IP address.

## Why delete IP addresses?

Amazon does not charge for IP addresses that **are in use**. However, "reserving" an
IP address (keeping it assigned to your account but not running on an instance ) incurs
a monthly fee from Amazon.

They charge $0.01 per hour.  For a 30 day month, that would be $7.20 to keep the IP address.

## Reactivate your account

When you are ready to use your account again, just log in, re-create your 
environments, and start up an instance.
