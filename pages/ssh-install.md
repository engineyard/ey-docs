# Install a public key to an environment

Once a key has been uploaded your AppCloud account, it needs to be associated with one or more
environments. This will ensure that all instances contained within the environment
have the ssh key installed and are therefore accessible via an SSH client. 

To successfully install a ssh key you will need to:

* [[Update an environment|ssh-install#update]] with the ssh key.
* [[Deploy keys|ssh-install#deploy]] to environment instances.


<h2 id="update">Update an environment</h2>

  1. Login to your AppCloud account.
  2. Click the **Dashboard** menu item.
  3. Click the environment name you want to add the key to.
  4. Click the **More Options** tab.
  5. Click the **Edit Environment** link.
  6. Locate the SSH Keys section and select the keys you want to install.
  
     ![Adding SSH Keys](images/manage_ssh_keys.jpg)
  
  7. Click the **Update environment** button to save your changes.
  8. *Optionally* repeat these steps for each environment you want to install a key on.


<h2 id="deploy">Deploy keys</h2>

After an environment has been updated with one or more new keys they will need to be
**deployed** to the environment instances.

  1. Go to your **Dashboard**.
  2. Click the environment name you want to deploy your key(s) to.
  3. Click the **Update** button.

Clicking the update button rebuilds your environment instances and installs your key(s).
When this process completes, you are now ready to connect to your instances via ssh.

## Next Steps

[[Connect via SSH|ssh-connect]] to your application instance(s).