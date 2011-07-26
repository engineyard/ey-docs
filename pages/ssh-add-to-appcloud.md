# Add SSH keypair to AppCloud

To use a public key generated for your development machine on AppCloud it will
need to be uploaded through our web interface.  Follow these steps:

1. Login to your AppCloud account.
2. Click on the **SSH Public Keys** menu item.
3. Click the button **Add a new SSH public key**.
    * Locate the public key on your local machine. <br />
      The default location of this file is `~/.ssh/id_rsa.pub`
    * Give your key a name.
    * Paste your public key in the text area.
    * Click the **Add Key** submit button to save your key.

You should receive a confirmation that your ssh public key has been created and added to your
AppCloud account.

## Next Steps

[[Install your public key|ssh-install]] to your application environment(s).