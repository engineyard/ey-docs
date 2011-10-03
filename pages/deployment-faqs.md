# Engine Yard Deployment FAQs


* <a href="#cloud-svn">Does Engine Yard Cloud support deploying from an SVN repository?</a>
* <a href="#cli-multiple"> Can I use the CLI with multiple accounts? </a>
* <a href="#cli-ssh"> How do I use the CLI with separate SSH keys for each project? </a>
* <a href="#deploy-log"> Where is the deploy log? </a>
* <a href="#bundle-lock"> How do I 'bundle lock' before doing a deploy? </a>
* <a href="#avoid-copy"> How do I avoid copying my large .git directory with every deploy? </a>



<h2 id="cloud-svn"><a href="#cloud-svn">Does Engine Yard Cloud support deploying from an SVN repository?</a></h2>

SVN is not supported at this time. Git is the only supported 
version control system for deployment on Engine Yard Cloud. Your repository 
will need to be ported to Git before your application can be 
deployed on Engine Yard Cloud. GitHub has a great article on porting 
an existing SVN repository to Git.





<h2 id="cli-multiple"><a href="#cli-multiple"> Can I use the CLI with multiple accounts? </a></h2>


Yes, though it requires a little bit of work to set up.

The `ey` command looks at the `EYRC` environment variable to determine what `rc` file to use.  The file located at `~/.eyrc` is used by default. To work with both Alice's and Bob's accounts, have Alice do this:


    $ rm -f ~/.eyrc                              # clean slate
    $ ey environments                            # <-- this prompts for login + saves credentials
    $ mv ~/.eyrc ~/.eyrc-alice
    $ EYRC=~/.eyrc-alice ey environments         # <-- this uses Alice's saved credentials


Then have Bob do the same, but save his credentials in `~/.eyrc-bob`.

With a bit of shell aliasing, you can have `alice-ey` and `bob-ey` commands that operate as Alice and Bob, respectively.

<h2 id="cli-ssh"><a href="#cli-ssh"> How do I use the CLI with separate SSH keys for each project? </a></h2>


  - You can simply set an entry in your SSH config with the key you want set as the identity file for the correct hostname. 
  - Copy the SSH url for the App Master of your cluster from the UI and just take the hostname from it. 
  - Then create or modify `~/.ssh/config` with the following contents:


    Host HOSTNAME_OF_APP_MASTER
    IdentityFile ~/.ssh/my_cloud_priv_key


If you are using an elastic IP for your cluster, this hostname will not change and will continue to work across cluster reboots. 



<h2 id="deploy-log"><a href="#deploy-log"> Where is the deploy log? </a></h2>

If there is a problem deploying your application, the Dashboard
tells you to view the deploy log for the failed deployment.  You can 
view the deploy log two ways:

  * **On your Dashboard**. Your Dashboard displays a View Log link next to the deployment status message.  
    Click this link to open the log file in a separate browser window.
    
  * **On your instances**. View your log file by connecting to your instances via SSH. 
    After you are connected to your instance, locate the log file in your
    home directory with a filename like the following: `yourapp-deploy.log`, where
    'yourapp' is the name of your application deployed on this instance.

    You can view the log using the UNIX commands `cat`, `more` or `less`.



<h2 id="bundle-lock"><a href="#bundle-lock"> How do I 'bundle lock' before doing a deploy? </a></h2>


The best way to do it is to check in `Gemfile.lock` with your application. There are many good reasons to do this.

  - It ensures that the gems you get in production are the same ones you develop and test with. 
  - It speeds up your deploys. Taking your `Gemfile` and figuring out which gem versions to use is a (NP-)hard problem. Checking in the `Gemfile.lock` lets `bundle install` skip all that expensive computation and get right to fetching and installing your gems.
  - It ensures that the gems on each of your application servers are the same. While unlikely, if the author were to release a new version of a gem just in the middle of your deploy, you could wind up with some of your application servers running `version 1.2.0` of some gem and the rest running `version 1.2.1`. 



<h2 id="avoid-copy"><a href="#avoid-copy"> How do I avoid copying my large .git directory with every deploy? </a></h2>

If you have a large `.git` directory and you do not want it copied over on every deploy, add a `config/ey.yml` to your application's repository with the following contents:

    environments:
      YOUR-ENVIRONMENT-NAME-GOES-HERE:
        copy_exclude:
         - .git
