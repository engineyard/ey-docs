# Add an SSH keypair to Engine Yard Cloud

To use a public key generated for your development machine, the key must be uploaded through the Dashboard. 

##To add an SSH key to Engine Yard Cloud

1. Locate and copy the public key on your local machine.  
    The default location of this file is `~/.ssh/id_rsa.pub` 
2. In your Dashboard, click SSH Public Keys.
3. Click Add a new SSH public key.
4. Enter a name for the key.
5. Paste the key (from step 1) into the Public Key field.
6. Click Add Key.  
  You receive a confirmation that your ssh public key has been created and added to your
Engine Yard account.

## Next step

[[Install your public key|ssh-install]] to your application environment(s).