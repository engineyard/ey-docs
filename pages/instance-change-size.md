# Change an instance size

Currently, it's only possible to change the size of instances by terminating your environment and spinning up new instances at the size you want. The only exception to this is with utility instances, where you can choose the size at the time it's added to your cluster. Fortunately, snapshots are taken when you terminate your environment and you can restore onto your new instances from these snapshots.

One thing to keep in mind is that your existing instance configuration is *not stored after you terminate*. When you spin up new instances, the IP you had previously used will be used again by default, but the size and number of instances you used along with any utility instance names will not be saved, so you'll want to take note of what those settings are prior to terminating your environment.

This article covers the following topics:

* [[Disk Space Considerations|instance-change-size#space]]
* [[Resizing an Instance|instance-change-size#steps]]
* [[Snapshots|instance-change-size#snaps]]

<h2 id="space">Disk Space Considerations</h2>

Since resizing your instances will require stopping the whole environment, it's a 
good idea to also consider resizing your volume sizes during this process as 
well. The default volume size of 5GB (15GB for the database) is a good start, but 
at a cost of $0.10 per GB per month, it's cheap to switch to a larger volume size 
and give yourself room to grow later. A good amount to go with generally is 15GB 
for your application instances and maybe 30GB for your master database. It's best 
to give yourself a lot of growing room since it requires full termination to increase 
your volume size.

<h2 id="steps">Steps to resize an instance</h2>

  1. Make a note of the current instance sizes being used, their volume sizes, and any utility instance names you're using.
  2. Click Stop for the environment you want to change.
  3. Click Boot for the environment you stopped.
  4. Choose the Custom configuration option.
  5. Configure application instances:
      1. Choose the number of instances to boot.
      2. Choose the appropriate size for each instance.
      3. Choose the snapshot used to restore these instances.
  6. Configure database instances:
      1. Select the Use separate database instance checkbox. <br />
         (this will already be checked if you chose more than one application server)
      2. Choose the size you want for your database instance. <br />
         (add the number of slaves you want or had setup previously)
      3. Choose the snapshot used to restore these instances.
  7. Configure utility instances: (if you had any)
      1. Choose the appropriate size for each instance.
      2. Choose the snapshot used to restore these instances.
  8. Click Boot this Configuration.

Generally speaking, this process is fairly painless aside from how long it can take sometimes. It's highly recommended that you plan to perform this upgrade at a non-peak hour and give yourself plenty of time to sort out any potential issues you may run into.



<h2 id="snaps">Snapshots</h2>

Snapshot timestamps will show up in UTC when creating new instances, so the easiest 
way to find the snapshot you want is to take note of how far past the current hour 
it was when you terminated and then look for the most recent snapshot matching that. 
Unless you made changes when you created your environment, it will have defaulted to 
taking a snapshot once per day. As such, depending on the amount of data you have and 
how much changed since the last snapshot, the snapshotting process can take a while.

If your instance volumes are fairly small (e.g., less than 30GB), then the snapshotting 
process will likely only take a couple of minutes or less because only the data that 
changed from one snapshot to another has to be backed up. If you have a lot of data 
and/or a lot of data changed since the last backup, then it might take 30 minutes or 
more (though, that generally is only if you have a LOT of data). Just some things to 
keep in mind when scheduling this.