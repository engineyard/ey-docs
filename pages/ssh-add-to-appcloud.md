# Add an SSH keypair to Cloud

To use a public key generated for your development machine on Cloud, the key must be uploaded through the Cloud dashboard. 

##To add an SSH key to Cloud

1. Locate and copy the public key on your local machine.  
    The default location of this file is `~/.ssh/id_rsa.pub` 
2. In your Cloud dashboard, click SSH Public Keys.
3. Click Add a new SSH public key.
4. Enter a name for the key.
5. Paste the key (from step 1) into the Public Key field.
6. Click Add Key.  
  You receive a confirmation that your ssh public key has been created and added to your
Cloud account.

## Next step

[[Install your public key|ssh-install]] to your application environment(s).