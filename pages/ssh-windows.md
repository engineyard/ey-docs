# Adding SSH keys to Engine Yard Cloud from Windows

On Windows there are a number of ways to create an SSH keypair, including
RailsInstaller, PuTTY, and Cygwin. Engine Yard supports the RailsInstaller
method because it is straight-forward. 

This is a two step process:

* [[Create keys.|ssh-windows#create]]
* [[Add keys to Engine Yard Cloud.|ssh-windows#add]]

<h2 id="create"> To create keys</h2>

RailsInstaller automatically creates SSH keys in `~/.ssh`
`C:\Users\<user_name>\.ssh`. To re-create them, follow the steps below. This procedure uses unix-style commands and paths because that is what git-bash uses.

1. Navigate to Start -> Programs -> RailsInstaller -> git-bash.

1. Change directories into your home folder:

        cd ~

2. Generate the SSH keys: (make sure to use a strong password or Engine Yard Cloud will
reject it)

        ssh-keygen -t rsa

3. Change the permissions of the SSH folder and keys:

        chmod -R 644 ~/.ssh

You now have a private and public key: `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`.

<h2 id="add"> To add keys to Engine Yard Cloud </h2>

1. Locate and copy the public key on your local machine:
  
    a. Open the public key (`~/.ssh/id_rsa.pub`) in Notepad.  

        notepad ~/.ssh/id_rsa.pub 

    b. Copy the key to the clipboard.  

1. In your Dashboard, click SSH Public Keys.

2. Click Add new SSH public key.

3. Enter a name in the Name field to identify the key.

4. Open the public key (`~/.ssh/id_rsa.pub`) in Notepad.

        notepad ~/.ssh/id_rsa.pub

6. Paste the key (copied in Step 1b) into the Public Key field.

7. Select the environments that you want to add this key to. If you don't
have any environments, this key is automatically added to the ones you create.

6. Click Add Key.  
  You receive a confirmation that your ssh public key has been created and added to your Engine Yard account.

## Next step

[[Install your public key|ssh-install]] to your application environment(s).