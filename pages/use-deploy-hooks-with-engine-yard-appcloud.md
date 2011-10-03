# Using deploy hooks

Deploy hooks are Ruby scripts that you write which are executed at 
designated points in the deployment process. This allows you to customize
the deployment of your application to meet its particular needs.

For example, if your application uses Resque, then deploy hooks provide 
a way for you to restart your Resque workers when you deploy a new version 
of your application. Hoptoad users can use deploy hooks to notify Hoptoad 
of a deploy.

Deploy hooks live in the `APP_ROOT/deploy` directory of your application. The order 
in which they run is specified in the documentation for the `ey deploy` command.


## Capistrano similarities

Our deployment system mimics Capistrano's filesystem layout so it will 
be familiar to you if you have ever used Capistrano. In fact, it is still 
backwards compatible with Capistrano so you can use both at the same time 
if so desired.


## Structure and sequence

To use deploy hooks, create an `APP_ROOT/deploy` directory in your application 
and save named hook files in this directory which will be triggered at the appropriate 
times during the deployment process. The files are defined as follows and run in the order listed:

    APP_ROOT/  
       deploy/
		before_bundle.rb
		after_bundle.rb
		before_migrate.rb
        after_migrate.rb
		before_compile_assets.rb
		after_compile_assets.rb
		before_symlink.rb
		after_symlink.rb
		before_restart.rb
		after_restart.rb
		
Remember that, in order for migrations to run, your entire environment 
is loaded. So if you have any symlinks that need to be created in 
order for the application to start properly, put them 
in `before_migrate.rb` instead of `before_symlink.rb`, because 
`before_symlink.rb` runs **after** the migration.

Any deploy hooks that you have defined are called, even if
they are hooking into a step that is not necessary for the deployment.
For example, `after_migrate` is called even if there are no new
migrations in your deployment.

## Shell commands

You have access to a `run` command and a `sudo` command. Both of these run shell commands. `run` runs as your normal unix user that the application is deployed as and `sudo` runs as root for when you need more permissions.

For example:
    run "echo 'release_path: #{release_path}' >> #{shared_path}/logs.log"
    run "ln -nfs #{shared_path}/config/foo.yml #{release_path}/config/foo.yml"
    sudo "echo 'sudo works' >> /root/sudo.log"


### Calling git commands

Here's an example where you can call a git command from a deploy hook:

    run "exec ssh-agent bash -c 'ssh-add /home/deploy/.ssh/<app>-deploy-key && git clone git@github.com:foo/bar.git #{current_path}/tmp/foo'"

Replace `<app>` with the name of your app and change the path for your git repo.

## Deploy hook variables

These scripts are instance_eval'd in the context of the chef-deploy 
resource. This means that you have certain commands and variables 
available to you in these hooks. For example:

* ### release_path
this is the full path to the current release: e.g. `/data/appname/releases/12345678`

* ### shared_path
this is the path to the shared dir: e.g. `/data/appname/shared`

* ### current_path
this is the path to the currently symlinked release: e.g. `/data/appname/current`

* ### node
node is the full hash object of all the info we know about your applications and deployments.

Here is an example JSON document that shows you what kind of info is inside the **node** object:

    {
      "aws_secret_key": "xxxxxxxxxxxxxxxxxxxx",
      "backup_interval": 24,
      "admin_ssh_key": "ssh-rsa xxxxxxx== awsm@engineyard.com",
      "user_ssh_key": [
    
      ],
      "mailserver": "smtp.engineyard.com",
      "instance_role": "solo",
      "crons": [
    
      ],
      "removed_applications": [
    
      ],
      "backup_window": 1,
      "gems_to_install": [
        {
          "name": "rails",
          "version": "2.3.2"
        }
      ],
      "alert_email": "foo@bar.com",
      "applications": {
        "railsapp": {
          "auth": {
            "active": false
          },
          "type": "rails",
          "https_bind_port": 443,
          "repository_name": "git:\/\/github.com\/engineyard\/rails-2.2.2-app.git",
          "migration_command": "rake db:migrate",
          "http_bind_port": 80,
          "run_deploy": true,
          "revision": "",
          "branch": "HEAD",
          "deploy_key": "-----BEGIN RSA PRIVATE KEY-----\nxxxx\n-----END RSA PRIVATE KEY-----\n",
          "run_migrations": true,
          "deploy_action": "deploy",
          "services": [
            {
              "resource": "mongrel",
              "mongrel_base_port": 5000,
              "mongrel_mem_limit": 150,
              "mongrel_instance_count": 3
            },
            {
              "resource": "memcached",
              "base_port": 11211,
              "mem_limit": 128
            }
          ],
          "recipes": [
            "memcached",
            "monit",
            "nginx",
            "nginx-passenger"
          ],
          "vhosts": [
            {
              "name": "foo.com",
              "role": "velocity"
            }
          ]
        }
      },
      "reporting_url": "https:\/\/cloud.engineyard.com\/reporting\/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "aws_secret_id": "xxxxxxxxxxxxxx",
      "environment": {
        "name": "myenvironment",
        "framework_env": "production"
      },
      "users": [
        {
          "gid": "1000",
          "username": "ez",
          "uid": "1000",
          "comment": "",
          "password": "xxxxxxxxxxxx"
        }
      ],
      "packages_to_install": [
    
      ]
    }


<h2 id="api">Deploy hooks API</h2>

Deploy hooks are plain old Ruby code. However, the engineyard gem does make 
some additional methods available within deploy hooks in order to simplify 
common tasks.

These are the available methods:

  * `all_releases()`: <br />
    array of paths to the deployments on this instance, ordered from oldest to newest.

  * `current_name()`: <br />
    on a utility instance, the name of the utility instance. On non-utility instances, nil.

  * `current_path()`: <br />
    path to the current deployment. This is the deployment pointed to by the `current` symlink, so the value of `current_path()` will change after the `symlink` step is executed.

  * `current_role()`: <br />
    the role of the current instance. Possible values:
    * `solo`: the sole instance for the environment
    * `app_master`: the application master
    * `app`: a non-master application server
    * `util`: a utility server. The `current_name` method will allow you to distinguish between different types of utility servers.

  * `environment()`: <br />
    the value of the `RAILS_ENV`, `RACK_ENV`, and `MERB_ENV` environment variable.

  * `latest_release()`: <br />
    path to the most recent deployment.

  * `migrate?()`: <br />
    true if migrations are being run in this deployment, false otherwise.

  * `node()`: <br />
    Various information about the current instance and other instances in the environment. See `/etc/chef/dna.json` on an instance for an example of what `node` will return. If the information you require is available via some other method, it is preferable to use the other method to get it. `node` is just here as a catch-all.

  * `previous_release(current=latest_release)`: <br />
    path to the deployment prior to `current`. If nil, then `current` is the newest deployment.

  * `oldest_release()`: <br />
    path to the oldest deployment

  * `on_app_master(&block)`: <br />
    execute `block` only on the environment's application master or single instance.

  * `on_app_servers(&block)`: <br />
    execute `block` only on the environment's application servers (master and slaves) or single instance.

  * `on_app_servers_and_utilities(&block)`: <br />
    execute `block` only on the environment's application servers and utility servers

  * `on_utilities(*utility_names, &block)`: <br />
    execute `block` on utility servers whose names are included in `utility_names`. `utility_names` can be passed as an array or as multiple arguments.
    * If called like `on_utilities() { ... }`, the block will be executed on all utility servers.
    * `on_utilities("alpha") { ... }` executes the block on all utility servers named "alpha".
    * `on_utilities("a", "b") { ... }` is equivalent to `on_utilities(%w[a b]) { ... }`.

  * `release_dir()`: <br />
    path to the directory containing the deployments

  * `release_path()`: <br />
    path to the deployment that is currently being deployed

  * `repo()`: <br />
    the URL of this application's git repository.

  * `repository_cache()`: <br />
    the path to the local clone of this application's git repository.

  * `revision()`: <br />
    the SHA of the commit currently being deployed.

  * `run(command)`: <br />
    execute `command` as a nonprivileged user (`deploy` by default)

  * `shared_path()`: <br />
    path to the `shared` directory

  * `stack()`: <br />
    the web server stack for this environment. Possible values:
    * `nginx_mongrel`: Nginx web server and Mongrel application server
    * `nginx_passenger`: Nginx web server and Passenger application server
    * `nginx_unicorn`: Nginx web server and Unicorn application server

  * `sudo(command)`: <br />
    execute `command` as root