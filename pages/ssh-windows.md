# Adding SSH keys to AppCloud from Windows

On Windows there are a number of ways to create an SSH key pair including
RailsInstaller, PuTTY, and Cygwin. Engine Yard supports the RailsInstaller
method since it is the most straight-forward method. Using another method
is out of the scope of this document.

This is a two step process:

* [[Create keys|ssh-windows#create]]
* [[Add keys to AppCloud|ssh-windows#add]]

<h2 id="create"> To create keys</h2>

RailsInstaller automatically creates SSH keys in `~/.ssh`
`C:\Users\<user_name>\.ssh`. If you need to re-create them, follow the steps below. This procedure uses unix-style commands and paths because that is what git-bash uses.

1. Navigate to Start -> Programs -> RailsInstaller -> git-bash.

1. Change directories into your home folder

        cd ~

2. Generate the SSH keys (make sure to use a strong password or AppCloud will
reject it)

        ssh-keygen -t rsa

3. Change the permissions of the SSH folder and keys

        chmod -R 644 ~/.ssh

You should now have a private and public key, `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`, respectively.

<h2 id="add"> To add keys to AppCloud </h2>

1. In your AppCloud Dashboard, click SSH Public Keys.

2. Click Add new SSH public key.

3. Enter a name in the Name field to identify the key.

4. Open the public key (`~/.ssh/id_rsa.pub`) in Notepad.

        notepad ~/.ssh/id_rsa.pub
        
5. Copy the key to the clipboard.

6. Paste into the Public Key field.

7. Make sure to select the environments that you want to add this key to. If you don't
have any environments, this key is automatically added to the ones you create.

8. Click Add Key and your new key is setup in AppCloud.
