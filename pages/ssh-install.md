# Install a public key to an environment

After a key is uploaded your Engine Yard account, it needs to be associated with one or more
environments. This ensures that instances contained within the environment
have the ssh key installed and are accessible via an SSH client. 

The process to install an ssh key:

* [[Update the environment|ssh-install#update]] with the ssh key.
* [[Deploy keys|ssh-install#deploy]] to environment instances.


<h2 id="update">To update an environment with an ssh key</h2>

1. In your Dashboard, click the environment name.  
    For example, the "production" environment of the "MyApp" application.
3. On the Environment page, click Edit Environment.
6. Locate the SSH Keys section and select the keys you want to install.  
  
    ![Adding SSH Keys](images/manage_ssh_keys.jpg)
  
7. Click Update Environment to save your changes.
8. (Optional) Repeat these steps for each environment you want to install a key on.


<h2 id="deploy">To deploy keys</h2>

After an environment has been updated with one or more new keys, the keys need to be
deployed to the environment instances.

1. In your Dashboard, click the environment that you want to deploy your key(s) to.
2. Click Apply to install the keys.

After the keys are deployed, you can connect to your instances via ssh.

## Next step

[[Connect via SSH|ssh-connect]] to your application instance(s).