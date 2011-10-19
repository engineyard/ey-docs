# Diagnosing Errors on Engine Yard Cloud

This document describes some common error conditions you might see while setting up your Engine Yard Cloud environment.

## Common Error Conditions

### 1. Insufficient Capacity Error

This message is displayed when EC2 is unable to provision servers for your environment due to transient overcapacity in your selected availability zone. To get around this, we recommend waiting a few minutes and retrying. If the error persists, you can try a different instance size or availability zone. You can choose a new one from the Edit Environment page.

### 2. Gem Not Found Error

While deploying an application, you might get an error condition because Gems required for your application are not found on the instance. You can add, remove and edit Gems for each application by clicking on the "Add Rubygems" link in the "Applications" tab on your environment.

### 3. Bundler Error

The easiest way to use Bundler is to include the Bundler gem (with the appropriate version) in your list of Gem dependencies. Then include the appropriate Bundler command (e.g. "bundle install") in your "Migrate with" command text-box. You can edit this when by clicking the "Deploy" link for your application, and this command will then run as as part of the post-deploy process.

### 4. Deploy Failed Error

If your deploy fails for other reasons,  you can check the deploy logs for information to help debug the problem. You can locate the "Deploy Logs" tab on your environment in the Dashboard. You can scroll down to the bottom of the logs section to see output from the process that caused the deploy failure. If you have multiple instances in the environment, make sure to check the logs of the instance that failed.

