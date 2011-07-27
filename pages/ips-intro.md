# IP addresses on AppCloud

Engine Yard AppCloud uses Amazon AWS [[ Elastic IP Addresses|http://aws.amazon.com/ec2/]]. 
Each AppCloud account is initially allotted 5 IP addresses to associate with your 
environments.


## Environments & IP addresses

IP addresses are assigned when configuring an environments instances.

  * In the case of a Single Instance environment, the address is assigned to 
    this instance.  All incoming internet traffic is routed to this instance.
  * When deploying a clustered architecture, the IP address is assigned to the
    Application Master instance.  All incoming internet traffic is routed to this
    instance which is then load balanced to your application slave instances with
    HAProxy.


## Additional IP addresses

If you need to request extra IP addresses, you can [[submit a ticket|http://support.cloud.engineyard.com]] 
and we'll make the proper requests to Amazon to provision more IP addresses for your account.
**Note:** This process generally takes 24 - 72 hours.


## Articles

* ### [[Manage your IP addresses|ips-manage]]
  Learn how add, attach and detach IP addresses in your AppCloud environments.
  
* ### [[Delete your IP addresses|ips-delete]]
  Learn how to delete IP addresses from your AppCloud account.