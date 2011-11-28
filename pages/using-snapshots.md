# Using snapshots on Engine Yard Cloud

## Single Instance

If you're upgrading a single instance from a small to a medium instance, 
you'd want to use snapshots to migrate everything (database and application files).

Single instance environments cannot add more instances. For this capability, 
consider booting a cluster of multiple instances instead.

## Multiple Instance

When you boot a cluster for the first time, you may choose to boot from a new 
volume or existing snapshot for your app servers, each utility server, and 
master database.

When you are adding an instance to an existing cluster, then you'll need follow 
these practices:

### Application Master and Slaves

The idea behind application servers is for the entire ring of servers 
(app master + slaves) to be equivalent as much as possible. This supports 
the use case of Engine Yard's automatic failover that can replace a failed 
master with an existing app slave.

For this reason, it is a bad idea to treat the app master as a special server, 
or treat a slave with the expectation that it will never become the master server.
That being said, if you boot all app servers from the same snapshot and never 
change data stored on your volume (under `/data`) after that, then booting an 
app server from a snapshot can be an acceptable practice.

### Utilities

Utility instances can be used for a variety of purposes. For example, you could 
host a MongoDB on a utility instance. When booting this the first time, you would 
choose a new volume. However, if the instance dies and you are booting a replacement, 
you would choose the latest snapshot to restore all your data.

### Database Slaves

Adding a database slave will always take a snapshot from the master database and 
start replicating data over to the new slave.
