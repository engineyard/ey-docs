# Deploying with Git

The Orchestra platform allows developers to deploy their Applications using **Git**. We also allow people to deploy **<a href="#private-repository">Private</a>** and **<a href="#public-repository">Public</a>** repositories. 

## <a name="public-repository"></a>Public Repository Deployment

All developers have to do in order to deploy public Git repositories is copy the public Git URL from their repository and enter it in the **Repo URL** when deploying an Orchestra application. The system will then take care of the rest and deploy your Application.

For instance, on [GitHub](https://github.com/signup/micro?referral_code=orchestra) the Public URL is named the **Git Read-Only** URL and is usually found right below the project description:

![deploy-with-git-github-read-only.png](/images/o-deploy-git-1.png)

For other projects, the public repository URL usually starts with `git://`.

## <a name="private-repository"></a>Private Repository Deployment

Deploying a Private repository requires one more step of interaction by the **Deployer**. When you enter your **Repo URL** we present you with a **Generate Key** button that appears under your **Index File** like such:

![getting-started-ssh-key-one.png](/images/o-deploy-git-2.png)

After you've clicked on this button, the input will disappear and your generated public-ssh-key will appear:

![getting-started-ssh-key-public.png](/images/o-deploy-git-3.png)

The developer needs to copy this **Generated Public Key** and add its content to the developer's Git Deployment Keys or Git Account Keys. If you aren't using GitHub or do not have **Deploy Keys** available, the generated public key can be added to a user's SSH Keys. We do however encourage creating a "Deployer" user that will hold the Deploy keys to the applications it has access to.

## <a name="popular-repositories"></a>Other Popular Code Repositories

### GitHub

Private URLs on GitHub are found in the project page under the label: "SSH"

![deploy-with-git-ssh-url.png](/images/o-deploy-git-4.png)


### Assembla 

Private URLs on Assembla are found in the projects "Source/Git" tab:

![deploy-with-git-assembla-private.png](images/o-deploy-git-5.png)
