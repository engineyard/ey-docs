# Boot Instances

Here you need to decide how you want to architect your environment. There are three main choices:

* Single Server - Use this for test applications that do not require significant load, or for staging/development environments. These use a HighCPU Medium.
* Basic Cluster - This is the basic recommendation for production applications. It offers high availability, a dedicated database, and horizontal scalability.
* Custom - Here you can create your own cluster configuration. This allows you to choose different instance sizes, set up Utility instances, and slave databases.

This will also give you the IP Address for your environment. If you have any non-allocated IP addresses, you can choose one in the drop-down menu or Amazon will provision a new one for you.

Moving from a single instance to a cluster can be done, but it requires some downtime. Follow [these instructions]() to learn how to make this move.

[Learn more about EC2 Instances]()
[Learn more about Elastic IP Addresses]()
[Learn about the instance bootstrap process]()