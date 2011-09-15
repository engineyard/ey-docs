# Glossary

The following terminology is used in the web interface.

## Applications

An application is your web application that you are deploying to the cloud.  Specifically this will be a definition of the various details regarding your application, such as where the code repository is, any gem or package requirements it has, etc.

## Availability Zone

See [[What are availability zones?|amazon_faq]] in the Cloud FAQ section.

## Ebuilds

The gentoo linux distribution uses ebuilds to specify instructions on how to "built" from source a specific library or binary.  So if your application requires the "ImageMagick" library you'll need to install the library.  See [[Manage Unix Packages|application_home]] for more detailed instructions.

## Environments

Environments are a way to separate and categorize your instances according to intended usage.  For example, you may have a "staging" environment and a "production" environment.

## Git Clone URL

This is the URL of your repository from which your application will be deployed.  For example, a Git repository at GitHub will have a URL that looks similar to:

    git@github.com:engineyard/vertebra.git

## Instances

These are the virtualized servers that your applications will run on.  

## IP Addresses

IP Addresses are a means of identifying a specific entity on a computer network.  Specifically you will use the IP address to connect to your instance via SSH, and to point your domain's DNS' records to.

## Root Partition

In the file system we refer to the root partition as the primary volume that the gentoo linux filesystem resides on.

## SSH Keys

SSH Keys are a means of secure, passwordless authentication.  The "public" key will be installed on your instance.  The "private" key will be on your local computer, and grant you access to the instance when you SSH in.

## Takeover

Takeover is the Engine Yard failover process for recovering from an AppCloud application master failure. For more information about takeovers, see [[AppCloud application master takeover|instance-takeover]].

## Volumes

These are the virtual disks which will be mounted at /data and /db on your instance.  These are used to store data that needs to be persistent.