# Getting Started with the Orchestra Platform

Orchestra is a platform that changes the application deployment paradigms. Developers and companies have been developing applications, selling applications and releasing applications for many years. However, one thing has been impeding our evolution and it is systems administration and its predicaments.

With Orchestra, we bring the basics back by removing that extra layer of complexity that is managing servers and scaling servers. Developers can finally tie into their existing workflows and directly release their PHP applications without having to download extra tools or IDEs. Deployment is at your fingertip by developing locally and simply committing/pushing your code to your repository.

# Requirements

In order to deploy and launch your application on the Orchestra platform, you will need to make sure you comply with the following requirements:

  - **<a href="#local">Have a local development environment</a>**
  - **<a href="#gitsvn">Use either Git or Subversion</a>**
  - **<a href="#account">Create an Orchestra account</a>**

If you already have a local development environment, a git or svn repository that hosts your code and an Orchestra account, you can skip directly to <a href="#deploy-first-app">deploying your first application</a>.

## <a name="local"></a>Local Development Environment

Your local development environment should be able to run your PHP applications. If you require more information on how to run PHP depending on your platform see the **<a href="/faqs/getting-started/running-php">Running PHP</a>**. Once you are setup and your environment is setup, you can now proceed to **<a href="#gitsvn">Using Git or Subversion</a>**


## <a name="gitsvn"></a>Using Git or Subversion

The Orchestra platform ties into your existing Git or Subversion workflow. If you do not track your code using either of them, we recommend using Git and hosting your code at **GitHub**. If you are already using Git or Subversion, skip directly to <a href="#account">creating an Orchestra account</a>

## Installing Git

Here are a few links on how to install Git on your platform:
 
  - Mac OS X http://help.github.com/mac-git-installation/
  - Windows http://code.google.com/p/msysgit/
  - Linux http://book.git-scm.com/2_installing_git.html
  
## Installing Subversion

Here are a few links on how to install Subversion (SVN) on your platform:

  - **Mac OS X** We recommend using Versions http://versionsapp.com/. If you are looking for a free alternative, you can install the subversion CLI tools with http://mxcl.github.com/homebrew/. Please note that most modern editors have Subversion bindings so by using the CLI tools, your IDE is likely to be able to interact with your code repository. 
  - **Windows** For windows we recommend you use Tortoise SVN http://tortoisesvn.net/downloads.html
  - **Linux** RabbitCVS should give you all you need for a Linux Client
  

  
## <a name="account"></a>Creating an Orchestra Account

Go to https://my.orchestra.io/register and signup for an account. Once you've confirmed your account and logged-in, you are ready to <a href="#deploy-first-app" title="Deploy your first Orchestra application">deploy your first application</a>. 


# <a name="deploy-first-app"></a>Deploying Your First Application

In order to deploy an application on the Orchestra platform, one is required to login at https://my.orchestra.io/login. Once you've logged in, click on the **Deploy A New App** from your Dashboard. You will be taken to the Deployment interface where a few new terms might appear strange to you. Allow us to describe the fields you will see:

  - **Name**: The application is the name that you will see in your dashboard but also the _*.orchestra.io_ subdomain you will be assigned. The name must start with a letter, and contain only alpha-numerical characters and underscores ("_")
  - **Repo URL**: This is the repository URL you want to deploy from. Unlike others, Orchestra does not provide you with a repository system but instead connect into your existing code tracking system. We currently support *Git* and *Subversion*. Provide us with your repository and we'll deploy it.
  - **Index File**: The index file is essentially your main control file. For people used to apache, this is a mix of the DocumentRoot and your DirectoryIndex. This has to be the path of the main control file in your provided repository. If this index is faulty, you will have to Terminate the application and launch it again.
  - **SSH Key**: This field only appears when you enter a private, SSH-like URL into the **Repo URL** field. This generates a public SSH-key that you add to your authorized_keys or deploy keys to allow us to tie into your repository. If this sounds a bit confusing, see the <a href="#ssh-keys">SSH Keys and Private Repositories</a> section below for more information.
  
If you are deploying an elastic application, you will be presented with two more fields. 

  - **Domain**: The CNAME you want to have for this domain. Your personal domain name. 
  - **Scaling**: This field asks you if you want an elastic application or a basic application. An elastic application provides you with an application that will add resources automatically and then remove those resources when they are no longer needed. A basic application does not automatically add resources but the platform where your application is, is 100% dedicated to you and so are its resources.

Once you've entered all this information, you click on Launch and your application will be deploying. A status screen will indicate the status of your deployment. If you'd like to use a Database with your application, feel free to do so. You can find more documentation on <a href="/faqs/getting-started/using-a-database">using a database with Orchestra</a>.

## <a name="ssh-keys"></a>SSH Keys and Private Repositories

SSH Keys are the essence of private repositories. They tie in directly into your workflow in a secure and simplistic manner. 

Your repository shall be either private or public. Public repositories require no further action from you. Private repositories come in two varieties. Our favourite method, which is the most secure, is to allow us to connect using an SSH Key that we generate per application. When you enter your URL, we identify whether this repository is private or not. This is done identifying if the Repo URL contains an SSH-like protocol URL or if the HTTP URL Scheme contains svn+ssh. If we identify an SSH-like URL, you will be presented with a **Generate Key** button under your **Index File** like such:

![getting-started-ssh-key-one.png](images/o-getting-started-1.png))

After you've clicked on this button, the input will disappear and your generated public-ssh-key will appear:

![getting-started-ssh-key-public.png](images/o-getting-started-2.png)

Copy this generated key into your authorized Deployment Keys, Account SSH-keys or if you are using SVN, authorize this key on your Subversion server. Should you use HTTP Authentication for your repositories — something we discourage — you can pass your username and password information directly into the **Repo URL** like such:

> https://user:pass@svn.server.com/path/to/repo

If you are using HTTP Authentication for your repositories, please beware that your username and password will be saved in cleartext, thereby the reason why we strongly discourage people from using HTTP Authentication with **Subversion** and **Git** repositories. See our <a href="/faqs/getting-started-deploy-with-subversion">Deploy with SVN</a> and <a href="/faqs/getting-started-deploy-with-subversion">Deploy with Git</a> sections for more information on deployments with your favourite system and how authentication is handled.

# <a name="application-code-updatees-and-deployment"></a>Application Code Updates and Deployment

There is no manual `deploy` with Orchestra. Everytime you commit or push to your repository, we automatically retrieve your changes and deploy them. See our <a href="/faqs/getting-started-deploy-with-subversion">Deploy with SVN</a> and <a href="/faqs/getting-started-deploy-with-subversion">Deploy with Git</a> sections for more information on deployments with your favourite system.