# SSH Keys and Configuration

If you need help generating an SSH keypair please see: [[Generating SSH Keys|generating_ssh_keys]].

## Manage Keys

In order to access your slice via command line interface like Terminal on Mac OS X, you'll need to upload your SSH public key to Engine Yard AppCloud, then attach it to an environment.

### Add a SSH Keypair

  - Under SERVER TOOLS in Engine Yard AppCloud, click on **SSH Public Keys** menu item.
  - Then click on **Add a new SSH public key** link in the top right.
  - Give your Keypair a **name**.
  - Click **Upload** button to save this keypair.

### Select Keypairs

  - Click on the **Dashboard** link under *Server Tools* on the left, then select the **More Options** tab for the environment you want to edit.
  - Click on **Edit Environment** and the *Edit the Environment* page will appear.
  - You then need to click on the **show advanced options** link under which you'll find a checkbox for each key you have entered in the system.  Check the box next to the keys you want in the environment.
  - Click the **Update environment** button to save your changes.

![Adding SSH Keys](images/manage_ssh_keys.jpg)

Repeat these steps for each environment you have.

### Deploy Your Keys

You **deploy** your keys to push them to your instance.

  - Go back to your **Dashboard**.
  - For the environment you've changed, click on the **Deploy** button.
  - Now you're ready to connect!

### Connect to Your Instance

From the Dashboard tab you'll be able to see an SSH link for your instance.  Click on that, then click on **Allow** to connect to your instance via SSH.

Otherwise you can SSH into the slice by using your IP or amazon hostname and your username.  By default your username is *depoy*.

  `ssh deploy@123.123.123.123`
  
  or 
  
  `ssh deploy@ec2-123-123-123-123.compute-1.amazonaws.com`

## SSH Configuration Tips

### SSH Hostname Alias

Setup an SSH hostname alias and you'll be able to save your fingers some walking.  Once you've setup the alias you can access your instance by typing:

  `ssh myapp`

On your local computer open the `~/.ssh/config` file in your favorite text-editor.  And add an entry like this:

    Host myapp
      Hostname     123.123.123.123
      User         deploy

Where the *Hostname* is the IP Address you've assigned to your instance and the *User* is the one you have configured in your environment.

### Warning: Remote host identification has changed!

You may find that you receive this message when attempting to SSH into your instance:

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
    Someone could be eavesdropping on you right now (man-in-the-middle attack)!
    It is also possible that the RSA host key has just been changed.

The sequence of events that will cause this warning are:

  - You create an instance with an IP address.
  - You SSH into that instance, no warnings happen (as expected).
  - You shutdown that instance.
  - You create a new instance, assigning it the previously used IP address.
  - You SSH into this new instance, and receive the warning.

#### Don't Panic

When you create a new instance, it is a new virtualized computer.  So when you return to the same IP address, your computer is smart enough to realize that it's not the same computer as before.  While this could in some scenarios indicate malicious activity as the warning indicates, in this scenario it is expected and fine.

### Solution

To get around this you can add the following directive to your ''~/.ssh/config'':

`StrictHostKeyChecking no`

This will give you the alert, but now it will still let you connect.

