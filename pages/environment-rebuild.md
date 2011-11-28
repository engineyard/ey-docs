# Rebuilding an environment

This page describes how to rebuild an environment and how to minimize downtime.

## Why would an environment need to be rebuilt?

* An instance in an environment has become [[frozen|instance-frozen]].

* You need to attach a new or different ip address to the environment.

* When upgrading a database instance there is no way to "terminate" and re-provision 
  the DB instance separately.  You need to rebuild the complete environment.



## Taking snapshots

When deciding to rebuild an environment, it is important to take a snapshot 
before stopping the environment. The reason for this is because **snapshots are
incremental**.

When a snapshot is taken before the environment is stopped, the snapshot captures
all changes up to that point.  Then when requesting to stop an environment, the snapshot
taken at the time of termination runs faster because of the recent prior snapshot.

## Steps to rebuild an environment

**Note:** It is highly recommended to perform a test rebuild using a 
  <a href="/environment-clone.html">cloned environment</a> first.


  1. Put your site into [[maintenance mode|deployment-maintenance-pages]] using the Engine Yard gem:
    
          ey web disable
    
  2. Click Snapshot in your environment to start a snapshot.
  3. *After snapshots have completed*, click Stop to shutdown your environment.
  4. Click Boot after all instances are terminated.
  5. Choose the Custom option from the configuration screen.
  6. Configure new instances using previous settings or select new options if desired.
  7. Ensure that the most recent snapshots from the Application snapshot and Database snapshot drop-downs are selected.
  8. Click Boot This Configuration to start rebuilding your environment.

Engine Yard recommends using the maintenance mode at 
the beginning of the rebuild process as it effectively stops traffic 
(especially database writes) for the period of time between finishing 
snapshots and stopping the environment.
