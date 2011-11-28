# SSH Keys and configuration

If you need help generating an SSH keypair please see: [[Generating SSH Keys|generating_ssh_keys]].

## Manage keys

In order to access your slice via command line interface like Terminal on Mac OS X, you'll need to upload your SSH public key to Engine Yard Cloud, then attach it to an environment.

### Add a SSH keypair

  - Under SERVER TOOLS in Engine Yard Cloud, click SSH Public Keys menu item.
  - Then click Add a new SSH public key link in the top right.
  - Give your Keypair a name.
  - Click Upload button to save this keypair.

### Select keypairs

  - Click on the Dashboard link under *Server Tools* on the left, then select on the Environment page, click Edit Environment and the *Edit the Environment* page appears.
  - You then need to click the show advanced options link under which you'll find a checkbox for each key you have entered in the system.  Check the box next to the keys you want in the environment.
  - Click Update Environment to save your changes.

![Adding SSH Keys](images/manage_ssh_keys.jpg)

Repeat these steps for each environment you have.

### Deploy your keys

You deploy your keys to push them to your instance.

  - Go back to your Dashboard.
  - For the environment you've changed, click the Deploy button.
  - Now you're ready to connect!

### Connect to your instance

On the Environment page, there is an SSH link for your instance.  Click on that, then click Allow to connect to your instance via SSH.

Otherwise you can SSH into the slice by using your IP or amazon hostname and your username.  By default your username is *depoy*.

    ssh deploy@123.123.123.123
  or
    ssh deploy@ec2-123-123-123-123.compute-1.amazonaws.com

## SSH configuration tips

### SSH hostname alias

Setup an SSH hostname alias and you'll be able to save your fingers some walking.  After you've setup the alias you can access your instance by typing:
    
    ssh myapp

On your local computer open the `~/.ssh/config` file in your favorite text-editor.  And add an entry like this:

    Host myapp
      Hostname     123.123.123.123
      User         deploy

Where the *Hostname* is the IP Address you've assigned to your instance and the *User* is the one you have configured in your environment.


## Warning: Remote host identification has changed!

You may find that you receive this message when you SSH into your instance:

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    @ WARNING: POSSIBLE DNS SPOOFING DETECTED! @ 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    The RSA host key for ec2-46-137-83-49.eu-west-1.compute.amazonaws.com has changed, 
    and the key for the corresponding IP address 10.56.63.182 
    is unknown. This could either mean that 
    DNS SPOOFING is happening or the IP address for the host 
    and its host key have changed at the same time. 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    @ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @ 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY! 
    Someone could be eavesdropping on you right now (man-in-the-middle attack)! 
    It is also possible that the RSA host key has just been changed. 
    The fingerprint for the RSA key sent by the remote host is 
    69:4e:bb:70:6a:64:e3:78:07:6f:b4:00:41:07:d8:9c. 
    Please contact your system administrator. 
    Add correct host key in /home/deploy/.ssh/known_hosts to get rid of this message. 
    Offending key in /home/deploy/.ssh/known_hosts:1 
    Keyboard-interactive authentication is disabled to avoid man-in-the-middle attacks.

The sequence of events that will cause this warning are:

  - You create an instance with an IP address.
  - You SSH into that instance, no warnings happen (as expected).
  - You shutdown that instance.
  - You create a new instance, assigning it the previously used IP address.
  - You SSH into this new instance, and receive the warning.

#### Don't panic

When you create a new instance, it is a new virtualized computer.  So when you return to the same IP address, your computer is smart enough to realize that it's not the same computer as before.  While this could in some scenarios indicate malicious activity as the warning indicates, in this scenario it is expected and fine.

### Solution

The best solution is to remove the line from your 'known_hosts' file `~/.ssh/known_hosts` or delete the file altogether. You will then be re-prompted to save the secure keys the next time you SSH into the server.

(DUE TO SECURITY RISKS, THIS METHOD IS NO LONGER RECOMMENDED) Another solution is to add the following directive to your ''~/.ssh/config'':

    StrictHostKeyChecking no

