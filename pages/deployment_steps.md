# Deployment Steps

##Preparation

The client-side component connects (via SSH) to the application master of your environment and ensures that the server-side component is of a reasonable version. The client-side component then invokes the server-side component on the application master. The server-side component ensures that it is installed on all other instances in the environment. 

## Code Fetch

  - On the application master, the source code is fetched from the git repository, then the chosen branch is checked out into `/data/<appname>/shared/cached-copy`. The application master then copies this (via rsync) to all the other instances in the cluster.
  - On each instance, the contents of `/data/<appname>/shared/cached-copy` are copied to `/data/<appname>/releases/<timestamp>`. 

## Gem Bundling

  - If a Gemfile is found, `bundle install` is run.
  - If you need a specific version of bundler, specify it in your Gemfile
  - We suggest you generate a `Gemfile.lock` to ensure consistency across deployment environments

## Default Configuration

  - Configuration files are put in place (e.g. `config/database.yml`, `config/mongrel_cluster.yml`, the `log` directory)

## Database Migration

The deploy hook `deploy/before_migrate.rb` runs.

Then the migration command is run (see the `--migrate` option).

Finally, the deploy hook `deploy/after_migrate.rb` runs.

## Symlink

The deploy hook `deploy/before_symlink.rb` runs.

Then the symlink `/data/<appname>/current` is created pointing to `/data/<appname>/releases/<timestamp>`.

Finally, the deploy hook `deploy/after_symlink.rb` runs.

## Restart Application Servers

The deploy hook `deploy/before_restart.rb` runs.

Then the application servers are restarted. For example, if your environment is using Passenger, then the server-side component will touch `/data/<appname>/current/tmp/restart.txt` to tell Passenger to restart.

Finally, the deploy hook `deploy/after_restart.rb` runs.

## Cleanup

If there are more than 3 releases in `/data/<appname>/releases`, all but 3 are removed. The deployment is now finished.