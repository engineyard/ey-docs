# Frequently Asked Questions for the Engine Yard CLI:

### Can I use the CLI with multiple accounts?

Yes, though it requires a little bit of work to set up.

The `ey` command looks at the `EYRC` environment variable to determine what `rc` file to use (`~/.eyrc` by default). To work with both Alice's and Bob's accounts, have Alice do this:


    $ rm -f ~/.eyrc                              # clean slate
    $ ey environments                            # <-- this prompts for login + saves credentials
    $ mv ~/.eyrc ~/.eyrc-alice
    $ EYRC=~/.eyrc-alice ey environments         # <-- this uses Alice's saved credentials


Then have Bob do the same, but save his credentials in `~/.eyrc-bob`.

With a bit of shell aliasing, you can have `alice-ey` and `bob-ey` commands that operate as Alice and Bob, respectively.

### How do I 'bundle lock' before doing a deploy?

The best way to do it is to check in `Gemfile.lock` with your application. There are many good reasons to do this.

  - It ensures that the gems you get in production are the same ones you develop and test with. 
  - It speeds up your deploys. Taking your `Gemfile` and figuring out which gem versions to use is a (NP-)hard problem. Checking in the `Gemfile.lock` lets `bundle install` skip all that expensive computation and get right to fetching and installing your gems.
  - It ensures that the gems on each of your application servers are the same. While unlikely, if the author were to release a new version of a gem just in the middle of your deploy, you could wind up with some of your application servers running `version 1.2.0` of some gem and the rest running `version 1.2.1`. 

### How do I use the CLI with separate SSH keys for each project?

  - You can simply set an entry in your SSH config with the key you want set as the identity file for the correct hostname. 
  - Copy the SSH url for the App Master of your cluster from the AppCloud web interface and just take the hostname from it. 
  - Then create or modify `~/.ssh/config` with the following contents:


    Host HOSTNAME_OF_APP_MASTER
    IdentityFile ~/.ssh/my_cloud_priv_key


If you are using an elastic IP for your cluster, this hostname will not change and will continue to work across cluster reboots. 

### How do I avoid copying my large .git directory with every deploy?

If you have a large `.git` directory and you do not want it copied over on every deploy, add a `config/ey.yml` to your application's repository with the following contents:

    environments:
      YOUR-ENVIRONMENT-NAME-GOES-HERE:
        copy_exclude:
         - .git
         - 
         - 

### Where is the deploy log?

If there is a problem deploying your application, the dashboard will tell you to view the deploy log. This is currently viewable via the dashboard or by logging in over SSH.

Once logged in, you will find the log in your home directory with a filename like the following:

    yourapp-deploy.log

Where 'yourapp' is the name of your application in the environment.

You can view the log using the usual UNIX commands `cat`, `more` or `less`.
