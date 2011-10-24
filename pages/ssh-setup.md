# Setup SSH keys on Engine Yard Cloud

Engine Yard enables login access to application instances via SSH.  We have standardized
on the secure practice of using key based authentication.  This protects our customers' instances
from brute force attacks against a user/password based authentication.  An added benefit
of key based authentication is the ability to login to an instance without a password.


## Create a local SSH keypair

In order to SSH into an Engine Yard Cloud slice, you'll need to create an SSH keypair on your
local machine.


The command you run from a *nix based command line terminal is this:

    $ ssh-keygen -t rsa

You should see a similar output to the following:

    Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/tbird/.ssh/id_rsa): 
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in /Users/tbird/.ssh/id_rsa.
    Your public key has been saved in /Users/tbird/.ssh/id_rsa.pub.
    The key fingerprint is:
    c9:26:4a:1b:7d:35:9f:c3:c2:b0:b4:5a:7c:8c:65:d9 tbird@jupiter
    The key's randomart image is:
    +--[ RSA 2048]----+
    |                 |
    |           o     |
    |        o * E    |
    |     . + % + .   |
    |    o o S = =    |
    |   . + * . . .   |
    |    o .          |
    |                 |
    |                 |
    +-----------------+


  - The command prompt should ask you where to save the key, the default path is fine.
  - Entering a passphrase is more secure.  You can use an ssh-agent so that you won't have to type your passphrase every time you connect.
  - The rest of the output will automatically be generated.

### Outcome

Upon completion of the key generation command, two files have been generated in the location
you specified to save the key.  The default location is in a `.ssh` directory in your home 
directory.  You should see the following files in `~/.ssh`:

    id_rsa
    id_rsa.pub

The `id_rsa.pub` file is the public key file that you'll upload to Engine Yard Cloud.


## Next Steps

[[Add your public key|ssh-add-to-cloud]] to Engine Yard Cloud.
