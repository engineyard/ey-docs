# Getting Started

This guide assumes that you have already [[signed up for an Engine Yard account|sign-up-for-engine-yard-cloud]] If you have not yet done so, go ahead and get started now -> [[Engine Yard Cloud|http://cloud.engineyard.com]]

## Application Information

When you first sign up, you need to configure your first application. 

![Entering your application's details](images/1sm.png)

We need to have your **Git repository URI** to checkout your code and deploy it to the instance. If you are using GitHub, you can find your Git repository URI here:

![Where to find your GitHub repository URL](images/2sm.png)

We will try to guess a good name for your application from the git URI. If we choose poorly, please enter a better name. 

Next we need to know how to setup your application. This depends largely on what framework you used to develop your application. For all modern frameworks (including Sinatra and Rails 3), simply select Rack and everything will work. If you are using an older framework, please select the appropriate one. 

## Set up a git deploy key

If you use a private repository, set up your git deploy key. Engine Yard automatically generates a deploy key for applications with private repositories. 

#### To set up a git deploy key

1. In the Show Deploy Keys page, copy the git deploy key.

    ![Where to find your deploy key on Engine Yard Cloud](images/3sm.png)

2. Add the git deploy key to your github repository. 

    See [github:help](http://help.github.com/deploy-keys) for how to add a deploy key.

## Environment Information

Next we need to ask a few questions about the environment where your application will run.

![New environment setup](images/5sm.png)

For help completing this page, see [[Environment options|environment-create#options]]. In most cases, the defaults are fine.

## Boot Your Cluster

The final step is to select the servers you would like to boot for this environment. 

We recommended starting with a **Basic Cluster** in almost all cases. This will give you room to expand in the future and also allows us to implement takeovers if your application master server goes down. 

If this is a staging environment without strict uptime requirements and which you don't expect to grow in the future, a **Single Server** environment is recommended.

If you have larger needs right now, please select **Custom** and configure your cluster as necessary. 

## Where to Go from Here

You can set up various Internet and networking technologies.

  * [[IP addresses on Engine Yard Cloud|ips-intro]]
  * [[SSH Keys and Configuration|ssh-intro]]
  * [[SSL Certificates|ssl-certificates]]

Learn more about the different types of [[instances|instance-types]] available to you, including Application, Utility, and Database instances.
