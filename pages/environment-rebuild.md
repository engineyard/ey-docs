# Rebuilding an environment

This article will walk you through how to rebuild an environment and advise you on the 
steps necessary to ensure minimal downtime.

## Why would an environment need to be rebuilt?

When upgrading a Database Instance there is no way to "terminate" and re-provision 
the DB instance separately.  You will need to rebuild the complete environment.

## Taking snapshots

When deciding to rebuild an environment, it is important to take a snapshot 
before stopping the environment. The reason for this is because **snapshots are
incremental**.

When a snapshot is taken before the environment is stopped, the snapshot captures
all changes up to that point.  Then when requesting to stop an environment, the snapshot
taken at the time of termination runs faster because of the recent prior snapshot.

## Steps to rebuild an environment

  1. Put your site into [[maintenance mode|deployment-maintenance-pages]] using the Engine Yard gem:
    
          ey web disable
    
  2. Click the **Snapshot** button in your environment to take a snapshot.
  3. Click the **Stop** button to shutdown your environment *after snapshots have completed*.
  4. Click the **Boot** button once all instances are terminated.
  5. Choose the **Custom** option from the configuration screen.
  6. Configure new instances using previous settings or select new options if desired.
  7. Ensure that the most recent snapshots from the **Application snapshot** and **Database snapshot** drop-downs are selected.
  8. Click **Boot This Configuration** to start rebuilding your environment.

<p class="note">
  <strong>Note:</strong> Engine Yard recommends using the maintenance mode at 
  the beginning of the rebuild process as it effectively stops traffic 
  (especially database writes) for the period of time between finishing 
  snapshots and stopping the environment.
</p>