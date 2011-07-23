# Engine Yard CLI User Guide

Welcome to the user guide for deploying to Engine Yard AppCloud with the `engineyard` gem.  The `engineyard` gem provides a command line
interface to perform tasks such as deploying your application, rebuilding your applications environment, opening an ssh session to 
any of your instances, uploading and applying custom chef recipes, and more.

## Getting Started

1. Install the `engineyard` gem: 
        gem install engineyard

2. Switch to your local app directory that contains your git repo:
        cd ~/my_application

3. Deploy your app:
        ey deploy
      
4. You will be prompted for your EY AppCloud login (email address) and password. You'll only have to enter these once. 
    If your application is running in multiple environments, tack on `-e ENV_NAME` to disambiguate.
- Congratulations! Your application is now deployed.


## Command Reference

** Formatting Warning: ** This wiki renders two dashes (- -) as an em-dash (--). All single-letter options start with a single dash (e.g. -e), but all long options start with two dashes (- - environment). We are working on making this wiki not screw up the formatting. Until then, watch out for missing dashes.

- - -
#### `ey help`

   - Print a short help message.

   - `ey help COMMAND` will print out the help for that command. For example, `ey help deploy` will print out the help for the `ey deploy` command, while `ey help recipes apply` will show the help for `ey recipes apply`. 

- - - 
#### `ey version`

   - Print the version of the engineyard gem.

   - Arguments: none

- - -
#### `ey deploy`

   - Deploy your application.

   - This command must be run from a checked-out copy of your application.

   - Arguments: 
      - `--environment/-e NAME` (optional): the environment to which you want this application to deploy. 
        - If this application is only deployed in one environment, this argument may be omitted. 
        - This argument may be specified by unambiguous substring; for example, if this app is in environments `myapp_staging` and `myapp_production`, then any one of `myapp_production`, `production`, `prod`, or even just `p` is sufficient to indicate `myapp_production`.
      - `--ref/-r GIT-REF` (optional): the reference to deploy 
        - You can specify a branch, a tag, or a SHA. 
        - This argument defaults to the current branch. 
        - Note: the deployment process pulls the code from the git remote that was previously entered into the EY AppCloud web application. Thus, the named branch must exist in that git remote for your deployment to succeed.
    - `--branch`: alias for `--ref`
    - `--tag`: alias for `--ref`
    - `--app/-a NAME` (optional): the application to deploy. If the current working directory is inside the application's Git repository and `--app` is omitted, `ey` will infer the application from the configured Git remotes.
    - `--migrate/-m COMMAND`: the command to use for database migrations. Default is `rake db:migrate`.
    - `--no-migrate`: Skip migrations.
    - `--force/-f`: Allow deployment of non-default branch. Only useful if you have a default branch configured in `ey.yml`.


   - Deployment takes place in several stages. For more information, see our documentation on [[Steps of Deployment|deployment_steps]].

- - -
#### `ey environments`

   - List your applications and environments. By default, lists only the environments for the current application.

   - Arguments: 
      - `--all`: list all applications and environments

- - -
#### `ey rebuild`

  - Ensure the configuration of your environment is up-to-date.

  - Arguments:
    - `--environment/-e NAME` (optional): the environment to rebuild. 
      - This argument may be specified by unambiguous substring.

- - -
#### `ey ssh`

  - SSH into a session or run a command on the application master. A command can also be run on `--all` servers.

  - Arguments:
    - `--environment/-e NAME` (optional): the environment to SSH into. 
      - This argument may be specified by unambiguous substring.
    - `--all/-a` (optional): run command on all servers.

- - -
#### `ey logs`

  - Show the most recent configuration logs.

  - Arguments:
    - `--environment/-e NAME` (optional): the environment in whose logs you are interested. 
      - This argument may be specified by unambiguous substring.

- - - 
#### `ey recipes apply`

  - Run already uploaded custom chef recipes.

  - Arguments:
    - `--environment/-e NAME` (optional): the environment in which to run the recipes. 
      - This argument may be specified by unambiguous substring.

- - -
#### `ey recipes upload`

  - Upload custom chef recipes.

  - Arguments:
    - `--environment/-e NAME` (optional): the environment in which to place the recipes.
      - This argument may be specified by unambiguous substring.

- - - 
#### `ey web disable`

  - Put up a maintenance page.

  - Arguments:
    - `--environment/-e NAME` (optional): the environment in which to put up the maintenance page.
    - `app/-a APP` (optional): name of the application whose maintenance page will be put up

  - This command has to be invoked from the application's Git repository so it can figure out which application gets the maintenance page.

- - -
#### `ey web enable`

  - Take down the maintenance page.

  - Arguments:
    - `--environment/-e NAME` (optional): the environment in which to take down the maintenance page.
    - `app/-a APP` (optional): name of the application whose maintenance page will be put up

  - This command has to be invoked from the application's Git repository so it can figure out which application gets its maintenance page taken down.

  - For more information, see [[Maintenance Pages|maintenance_pages]].


## Environment Variables


* ### CLOUD_URL
Location of Engine Yard AppCloud. Mainly used in development. Default is https://cloud.engineyard.com/

* ### DEBUG
Debug the engineyard gem (print a lot of stuff). Default is off.

* ### EYRC
Specifies the location of the `.eyrc` file to use. The `.eyrc` file is where the API token is stored. Default is `~/.eyrc`.

* ### NO_SSH
If set, all commands (e.g. `ey deploy`, `ey rollback`) that require an SSH connection will short-circuit. Mainly used in the engineyard gem's integration tests.



## Advanced Customization

In addition to deploy hooks, we also provide a more advanced level of customization via an overrides file.  This file is instance_eval'd into the main deploy class so that you can over ride core functionality of the deploy.  You should not use this for simple modifications around a deploy (deploy hooks are a better choice for those tasks). 

To use deploy overrides, create a file in your code repository at either `config/eydeploy.rb` or `eydeploy.rb`.  This file should contain a list of methods, and will be instance_eval'd into the main `EY::Deploy` class.  You will be able to super into any of the methods that you override. You can see the source of the class that your customization will be instance_eval'd into on GitHub at [[https://github.com/engineyard/engineyard-serverside/blob/master/lib/engineyard-serverside/deploy.rb]] We guarantee the top level tasks (bundle, symlink_configs, enable_maintenance_page, migrate, symlink, restart, disable_maintenance_page, and cleanup_old_releases) will remain consistent and in a consistent order.  All other methods in the class are subject (but unlikely) to change.

### Example: GitHub style deploy

    # This is an overrides file for ey deploy that uses git to do all
    # moving around, rather than using multiple directories and symlinks
    
    
    class ::EY::Serverside::Deploy::Configuration
      # no separate releases directories
      def release_path(*args)
        current_path
      end
    
      def all_releases(*args)
        [current_path]
      end
    end
      
    def copy_repository_cache
      # Don't need to do this, just make sure current is linked to
      # cached-copy
      run "ln -nfs #{c.repository_cache} #{c.current_path}"
    end
    
    def symlink(*args)
      # do nothing
    end
    
    def cleanup_old_releases(*args)
      # do nothing
    end

### `ey.yml` Customizations

Extra customization can be accomplished with an `ey.yml` file. [[More about the ey.yml file.|ey_yml]]

#### Disable migrations

To prevent the `rake db:migrate` for certain environments, add `migrate: false` to the environment section ey.yml:

  environments:
    YOUR-ENVIRONMENT-NAME-GOES-HERE:
      migrate: false

#### Exclude the .git directory

If you have a large .git directory and you do not want it copied over on every deploy, add a `config/ey.yml` to your application's repository with the following contents:

  environments:
   YOUR-ENVIRONMENT-NAME-GOES-HERE:
     copy_exclude:
       - .git

## Useful Links

* [[Deployment Frequently Asked Questions|deployment_faq]]
* [[Customizing with ey.yml|ey_yml]]
