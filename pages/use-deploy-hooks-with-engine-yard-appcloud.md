# How To Use Deploy Hooks with AppCloud

## Introduction

Deploy hooks are Ruby scripts that you write which are executed at 
designated points in the deployment process. This allows you to customize
the deployment of your application to meet its particular needs.

For example, if your application uses Resque, then deploy hooks provide 
a way for you to restart your Resque workers when you deploy a new version 
of your application. Hoptoad users can use deploy hooks to notify Hoptoad 
of a deploy.

Deploy hooks live in the `APP_ROOT/deploy` directory of your application. The order 
in which they run is specified in the documentation for the `ey deploy` command.


## Capistrano Similarities

Our deployment system mimics Capistrano's filesystem layout so it will 
be familiar to you if you have ever used Capistrano. In fact it is still 
backwards compatible with Capistrano so you can use both at the same time 
if so desired.


## Structure

To use deploy hooks on AppCloud, create an `APP_ROOT/deploy` directory in your application 
and save named hook files in this directory which will be triggered at the appropriate 
times during the deployment process. The files are defined as follows:

    APP_ROOT/  
    deploy/
        before_migrate.rb
        before_symlink.rb
        before_restart.rb
        after_restart.rb

Remember that, in order for migrations to run, your entire environment 
will be loaded. So if you have any symlinks that need to be created in 
order for the application to start properly you will want to put them 
in `before_migrate.rb` instead of `before_symlink.rb`, since 
`before_symlink.rb` runs **after** the migration.


## Shell Commands

You have access to a `run` command and a `sudo` command. Both of these will run shell commands. `run` will run as your normal Unix user that the app is deployed as and `sudo` will run as root for when you need more permissions.

For example:
    run "echo 'release_path: #{release_path}' >> #{shared_path}/logs.log"
    run "ln -nfs #{shared_path}/config/foo.yml #{release_path}/config/foo.yml"
    sudo "echo 'sudo works' >> /root/sudo.log"


### Calling Git Commands

Here's an example where you can call a git command from a deploy hook:

    run "exec ssh-agent bash -c 'ssh-add /home/deploy/.ssh/<app>-deploy-key && git clone git@github.com:foo/bar.git #{current_path}/tmp/foo'"

Replace `<app>` with the name of your app and change the path for your git repo.

## Deploy Hook Variables

These scripts will be instance_eval'd in the context of the chef-deploy 
resource. This means that you will have certain commands and variables 
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


## More Information
* [[Deploy Hooks API|deploy-hooks-api]].<br />
  Learn more about additional methods available to your deploy hooks.