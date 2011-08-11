# How to add SSH keys to AppCloud from Windows

On Windows there are a number of ways to create an SSH key pair including
RailsInstaller, PuTTY, and Cygwin. Engine Yard supports the RailsInstaller
method since it is the most straight-forward method. Using another method
is out of the scope of this document

## Creating keys

RailsInstaller automatically creates SSH keys in `~/.ssh`
(`C:\Users\<user_name>\.ssh`). If you need to re-create them, this is the
supported way. This document also used Unix-style commands and paths because
that is what git-bash uses.

1. Using git-bash (Start -> Programs -> RailsInstaller -> git-bash), change directories into your home folder

        cd ~

2. Generate the SSH keys (make sure to use a strong password or AppCloud will
reject it)

        ssh-keygen -t rsa

3. Change the permissions of the SSH folder and keys

        chmod -R 644 ~/.ssh

You should now have a private and public key, `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`, respectively

## Add keys to AppCloud

1. From the AppCloud Dashboard, click 'SSH Public Keys'

2. Click the 'Add new SSH public key' button

3. Fill in the 'Name' field with whatever you want to identify the key

4. Open the public key (`~/.ssh/id_rsa.pub`) in Notepad

        notedpad ~/.ssh/id_rsa.pub
        
5. Copy everything

        Ctrl-a Ctrl-c

6. Paste into the 'Public Key' field

        Ctrl-v

7. Make sure and select which environments to add this key to. If you don't
have any environments it will automatically be added to the ones you create.

8. Click the 'Add Key' button and everything should be setup in AppCloud
