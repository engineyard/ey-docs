# Glossary

The following terminology is used in the web interface.

## applications

An application is your web application that you are deploying to the cloud.  Specifically this will be a definition of the various details regarding your application, such as where the code repository is, any gem or package requirements it has, etc.

## availability zones

See [[What are availability zones?|cloud_faq#FAQ21]]

## CLI

Command Line Interface. For information about using the Engine Yard CLI, see [[Engine Yard CLI User Guide|ey_cli_user_guide]].

## ebuilds

The Gentoo linux distribution uses ebuilds to specify instructions on how to "built" from source a specific library or binary.  So if your application requires the "ImageMagick" library you'll need to install the library.  See [[Manage Unix Packages|application_home]] for more detailed instructions.

## environments

Environments are a way to separate and categorize your instances according to intended usage.  For example, you may have a "staging" environment and a "production" environment.

## git clone URL

This is the URL of your repository from which your application will be deployed.  For example, a Git repository at GitHub will have a URL that looks similar to:

    git@github.com:engineyard/vertebra.git

## instances

These are the virtualized servers that your applications will run on.  

## IP addresses

IP Addresses are a means of identifying a specific entity on a TCP/IP network.  Specifically, you use the IP address to connect to your instance via SSH and to point your domain DNS records to.

## root partitions

In the file system we refer to the root partition as the primary volume that the gentoo linux filesystem resides on.

## SSH keys

SSH Keys are a means of secure, passwordless authentication.  The "public" key will be installed on your instance.  The "private" key will be on your local computer, and grant you access to the instance when you SSH in.

## takeovers

Takeover is the Engine Yard process for recovering from an application master failure. For more information about takeovers, see [[Cloud application master takeover|instance-takeover]].

## volumes

These are the virtual disks which will be mounted at /data and /db on your instance.  These are used to store data that needs to be persistent.
