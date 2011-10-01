# How your code is deployed on Engine Yard Cloud

## General concepts

There are two components that facilitate code deployment:

* **Client-side component**. 
This component connects (via SSH) to the application master of your environment and ensures that the server-side component is installed and is the correct version.  The client-side
component then invokes the server-side component on the application master to coordinate code deployment.
* **Server-side component**. 
This component ensures that it is installed on all other instances in the environment.  Server-side then manages and coordinates the code deployment process
whenever the client-side component requests a deployment.

## 1. Code fetch

- On the application master, the source code is fetched from the git repository, then the chosen branch is checked out into `/data/<appname>/shared/cached-copy`. The application master then copies this (via rsync) to all the other instances in your environment.
- On each instance, the contents of `/data/<appname>/shared/cached-copy` are copied to `/data/<appname>/releases/<timestamp>`. 

## 2. Gem bundling
After your code is copied to all instances in your environment, the server-side component checks for the existence of a Gemfile.


- If a Gemfile is found, the bundler gem is installed and the command `bundle install` is run on each application instance.
- If you need a specific version of bundler, specify it in your Gemfile.
- We suggest you generate a `Gemfile.lock` to ensure consistency across deployment environments.

## 3. Default configuration
After your application gems are installed, the server-side component generates and symlinks configuration files and directories for your application.

- Configuration files and directories necessary for your application are generated or symlinked and put into place.
  Examples of these files include: `config/database.yml`, `config/mongrel_cluster.yml`, `config/newrelic.yml`, the `log` directory and more.

## 4. Database migration
After default configuration has been setup, your database migrations are run with appropriate deploy hooks.

* The deploy hook `deploy/before_migrate.rb` is run.
* The migration command specific to your application is run (see the `--migrate` option).
* Finally, the deploy hook `deploy/after_migrate.rb` is run.

## 5. Application Symlink
After migrations and their deploy hooks have been executed, your application symlink is created.

* The deploy hook `deploy/before_symlink.rb` is run.
* Your application symlink is created. <br />
`/data/<appname>/current` points to `/data/<appname>/releases/<timestamp>`
* Finally, the deploy hook `deploy/after_symlink.rb` is run.

## 6. Restart application servers
After your application code is in place and has been appropriately symlinked, restart your application servers.

* The deploy hook `deploy/before_restart.rb` is run.
* Your application servers in your environment are now restarted. For example, if your environment is using Passenger, the server-side component will touch the file `/data/<appname>/current/tmp/restart.txt` to tell Passenger to restart.
* Finally, the deploy hook `deploy/after_restart.rb` is run.

## 7. Final cleanup

If there are more than three previous releases in `/data/<appname>/releases`, all but the most recent three are removed. **Your deployment is now finished**.