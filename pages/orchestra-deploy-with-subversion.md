# Deploying with Subversion

The Orchestra platform allows developers to deploy their Applications using **SVN**. We also allow people to deploy **<a href="#private-repository">Private</a>** and **<a href="#public-repository">Public</a>** repositories. 

## <a name="public-repository"></a>Public Repository Deployment

All developers have to do in order to deploy public SVN repositories is copy the public SVN URL from their repository and enter it in the **Repo URL** when deploying an Orchestra application. The system will then take care of the rest and deploy your Application.

## <a name="private-repository"></a>Private Repository Deployment

Deploying a Private repository requires one more step of interaction by the **Deployer**. When you enter your private **Repo URL** in the Orchestra application deployment interface, we present you with a **Generate Key** button that appears under your **Index File** like such:

![getting-started-ssh-key-one.png](/images/o-deploy-svn-1.png)

After you've clicked on this button, the button will disappear and your generated public-ssh-key will appear:

![getting-started-ssh-key-public.png](/images/o-deploy-svn-2.png)

You need to copy this **Generated Public Key** and add its content to your SVN Authorized Access Keys. We do encourage creating a "Deployer" user that will hold the Deploy keys to the applications it has access to.

Should your repository authentication mechanism be HTTP Authentication, please see <a href="#http-authenticated-repositories">HTTP Authenticated Repositories</a> below.

## <a name="http-authenticated-repositories"></a>HTTP Authenticated Repositories

It is not unheard of from Subversion users to use HTTP Authentication to deploy their applications. Even though we discourage this method, we still have the ability for people to deploy Subversion repositories that use either HTTP Basic Authentication or HTTP Digest Authentication. 

In order to deploy an Application hosted in an HTTP Authenticated repository, the user has to enter the username and password within the Repository URL like such:

> http://username:password@svn.server.com/path/to/repo
>
> https://username:password@svn.server.com/path/to/repo

This method is strongly discouraged as the username and password are then saved in cleartext on the application server but it will allow people to deploy repositories *secured* by HTTP Authentication.
