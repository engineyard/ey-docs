# Engine Yard CLI User Guide

Welcome to the user guide for deploying to Engine Yard Cloud with the engineyard gem.  The engineyard gem provides a command line
interface (CLI) to perform tasks such as deploying your application, rebuilding your applications environment, opening an ssh session to 
any of your instances, uploading and applying custom chef recipes, and more.

## Getting Started

###To deploy an application from the CLI

1. Install the engineyard gem: 
        gem install engineyard

2. Switch to your local application directory that contains your git repository:
        cd ~/my_application

3. Deploy your application:
        ey deploy  
    If your application is running in multiple environments, append `-e environment_name` to disambiguate, for example, `ey deploy -e production`.
      
4. The first time you run the engineyard gem, enter your Engine Yard account credentials (email address and password) at the prompts. You only have to enter these once. 

    Your application is now deployed.

<h2 id="topic2">Switching Engine Yard accounts</h2>

If you want to log out of one Engine Yard account and log in to another, use the logout command to delete the API token from ``~/.eyrc`` or `env $EYRC`. This token is created at Step 4 above.

###To switch accounts within the CLI

1. Type:
        ey logout

2. Run any engineyard gem command, for example, `ey login`

3. At the prompt, enter the credentials for the account you want to use.

## Command Reference

#### `ey help`

   - Print a short help message.

   - `ey help COMMAND` prints out the help for that command. For example, `ey help deploy`  prints out the help for the `ey deploy` command, while `ey help recipes apply` shows the help for `ey recipes apply`. 

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
        - **Note:** the deployment process pulls the code from the git remote that was previously entered into the Engine Yard Cloud web application. Thus, the named branch must exist in that git remote for your deployment to succeed.
    - `--branch`: alias for `--ref`
    - `--tag`: alias for `--ref`
    - `--app/-a NAME` (optional): the application to deploy. If the current working directory is inside the application's git repository and `--app` is omitted, `ey` infers the application from the configured git remotes.
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
#### `ey recipes download`

  - Download custom chef recipes from an instance.

  - Arguments: 
    - `--environment/-e NAME` (optional): the environment to download the recipes from.
      - This argument may be specified by unambiguous substring.
    - `--account/-c ACCOUNT` (optional): the account that the environment belongs to.
      - This argument may be specified by unambiguous substring.

  - Use download on instances where you have previously uploaded recipes. For example, you might want to download custom chef recipes when troubleshooting--to review the recipes that you are running on your instance. 

  - The recipes are unpacked into a directory called "cookbooks" in the current directory. If the cookbooks directory already exists, you get an error.

- - - 
#### `ey web disable`

  - Put up a maintenance page.

  - Arguments:
    - `--environment/-e NAME` (optional): the environment in which to put up the maintenance page.
    - `app/-a APP` (optional): name of the application whose maintenance page will be put up

  - This command has to be invoked from the application's git repository so it can figure out which application gets the maintenance page.

- - -
#### `ey web enable`

  - Take down the maintenance page.

  - Arguments:
    - `--environment/-e NAME` (optional): the environment in which to take down the maintenance page.
    - `app/-a APP` (optional): name of the application whose maintenance page will be put up

  - This command has to be invoked from the application's git repository so it can figure out which application gets its maintenance page taken down.

  - For more information, see [[Application maintenance pages|deployment-maintenance-pages]].

- - -
#### `ey logout`

  - Take down the maintenance page.


---

## Environment Variables


* ### CLOUD_URL
Location of Engine Yard Cloud. Mainly used in development. Default is https://cloud.engineyard.com/

* ### DEBUG
Debug the engineyard gem (print a lot of stuff). Default is off.

* ### EYRC
Specifies the location of the `.eyrc` file to use. The `.eyrc` file is where the API token is stored. Default is `~/.eyrc`.

* ### NO_SSH
If set, all commands (e.g. `ey deploy`, `ey rollback`) that require an SSH connection will short-circuit. Mainly used in the engineyard gem's integration tests.



### ey.yml Customizations

Extra customization can be accomplished with an `ey.yml` file. [[More about the ey.yml file.|customize-your-deployment#first]]

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


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"