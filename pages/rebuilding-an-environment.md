# Rebuilding an Environment

We will walk you through how to rebuild an environment.  And advise you on the steps necessary to ensure the minimal downtime.

Why would you need to rebuild an environment?

  * When upgrading a Database Instance there is no way to "terminate" the separate DB instance.

## Snapshots

Before we talk rebuild, we want to stress the importance of taking a snapshot before you terminate the instance.

Snapshots are incremental.  

When you take a snapshot before you terminate the environment, it catches up all changes to that point.  And then when you terminate all instances in your environment, the snapshot that is taken at the time of termination runs very quickly because you've already got a recent snapshot.

## Step-by-Step

  - Put your site into maintenance mode.  You can run `ey web disable` to put up a maintenance page.
  - Take a snapshot before you begin by clicking on the **Snapshot** button in your environment.  
  - Click on the **Terminate** button to shutdown your environment.
  - Once all instances are terminated, you can click the **Boot Instances** button.
  - From the Configuration screen, you need to choose the **Custom** option.
  - Configure the appropriate instances (as you have done before, or with the new options you desire.)
  - Ensure that the most recent snapshots from the **Application snapshot** and **Database snapshot** drop-downs are selected.  (They are by default.)
  - Click **Boot This Configuration** to restart your environment.

In **Step 1** we recommend that you put the site into maintenance mode.  But you might ask, when I turn off the instances won't that maintenance mode turn into "completely unavailable mode".  Well yes, *but* it does stop new writes to the database, which you might lose if they are not finished and snapshotted before you terminate.

Also you'll need to have installed the engineyard gem and configured your CLI environment in order to run the `ey web disable` command.
