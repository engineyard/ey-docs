# Manage your IP addresses on Engine Yard Cloud

This page provides information on adding, detaching, and 
attaching IP addresses.

This page describes:

  * [[Environments and IP addresses|ips-manage#info]]
  * [[Adding an address|ips-manage#add]]
  * [[Detaching an address|ips-manage#detach]]
  * [[Attaching an address|ips-manage#attach]]
  * [[Getting more addresses for your account|ips-manage#getmore]]



<h2 id="info">Environments and IP addresses</h2>

IP addresses are assigned when configuring an environments instances.

  * In the case of a single instance environment, the address is assigned to 
    this instance.  All incoming internet traffic is routed to this instance.
  * When deploying a clustered architecture, the IP address is assigned to the
    Application Master instance.  All incoming internet traffic is routed to this
    instance which is then load balanced to your application slave instances with
    HAProxy.



<h2 id="add">Add an address</h2>

* ### For new environments:

  1. [[Create a new environment|environment-create]].
  2. Configure your instance(s) as needed.
  3. Under External Address select the ip address you want to attach to this environment.
  4. Click the Boot this Configuration button. 


* ### For stopped or non-running environments:

  1. Navigate to your environment in the Dashboard.
  2. Click the Boot button.
  3. Configure your instance(s) as needed.
  4. Under External Address select the ip address you want to attach to this environment.
  5. Click the Boot this Configuration button.


<h2 id="detach">Detach an address</h2>

  1. Login to your Engine Yard account.
  2. Click the IP Addresses menu item.
  3. Locate the IP address you want to detach.
  4. Click the Detach link.

The address is now detached from the associated environment.  You can now reuse
the ip address and attach to another environment, or delete the ip address if you
are sure it is no longer needed.
  
  
<h2 id="attach">Attach an address</h2>

After you detach an IP address you can move it to a different environment (in the same region). 
You need to shut down the environment before attaching it.  We recommend 
taking a manual snapshot of your data to help speed the termination of the 
environment.

1. Take notes of your current environment settings including all instance configurations.
2. Click the Snapshot button in your environment to take a snapshot.
3. Click the Stop button to shutdown your environment after snapshots have completed.
4. Click the Boot button after all instances are terminated.
5. Configure your environment using the notes taken in Step 1.
6. Under External Address select the ip address you want to attach to this environment.
7. Complete your environment configuration.
8. Click the Boot this Configuration button.


## Delete an address
There are special considerations to take when deleting an ip address from your account.
Learn how to [[delete an ip address|ips-delete]] from your Engine Yard account.

<h2 id="getmore"> Get more IP addresses for your account</h2>

Each Engine Yard account is initially allotted five IP addresses. You can request more:

* Submit a ticket with [[Engine Yard Support|http://support.cloud.engineyard.com]] requesting more IP addresses.

    **Note:** The standard turnaround time for this is 3 - 5 business days.
    