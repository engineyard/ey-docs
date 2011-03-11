# Generating SSH Keys

In order to SSH into an Engine Yard AppCloud slice, you'll need to create an SSH keypair.

We use this to authenticate you on the system, it has the additional benefit of logging you in without a password.

The command you run from a *nix based command line terminal is this:

    $ ssh-keygen -t rsa

The output will come back like this:


<code>
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
</code>


  - When it prompts you where to save the key, the default path is fine.
  - Entering a passphrase is more secure.  You can use an ssh-agent so that you won't have to type your passphrase every time you connect.
  - The rest of the output will automatically be generated.

Then two files are generated in your home directory.

    id_rsa
    id_rsa.pub

The `id_rsa.pub` file is the public key file that you'll use to push to Engine Yard AppCloud.