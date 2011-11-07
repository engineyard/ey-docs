# Linking a GitHub account to an Engine Yard account

You can link your Engine Yard account to a GitHub account. 

The _advantage_ of linking your Engine Yard account to a GitHub account is that you don't need to cut-and-paste deploy keys if the accounts are linked. 

The _disadvantage_ of linking your Engine Yard account to a GitHub account is that it gives your Engine Yard Cloud collaborators read access to **all** repositories in that GitHub account. 

This page contains the following procedures:

  * [Link your Engine Yard account to a GitHub account] [2]  
  * [Create an application from a repository in a linked GitHub account] [3]  
  * [Unlink your Engine Yard account from a GitHub account] [4] 

<h2 id="topic1">Which GitHub account to link to?</h2>

You can link your Engine Yard account to only one GitHub account. Make sure that you choose the GitHub account that contains:

*  The repositories for the applications that you want to host on Engine Yard Cloud. 

*  Only repositories that you want your collaborators to see.

For example, you might have two GitHub accounts: a personal GitHub account for early phase and private projects and a group account that contains the mainline versions of your company's applications and that your colleagues/collaborators already have access to. You choose the group account to link your Engine Yard account to.

<h2 id="topic2">To link your Engine Yard account to a GitHub account</h2>

1. Log into the GitHub account that you want to link to. 

2. In your Engine Yard account, go to Account > Account Settings.

2. Click on the account you want to link to a GitHub account.

3. Under the Services heading, click Link your account to GitHub.

     ![github link](images/github_icon.png)

4. Click OK.

5. Click Allow to authorize.

6. On your Accounts page, verify that the account is linked to the GitHub account.

     ![confirm the link](images/confirm_github_link.png)

<h2 id="topic3">To create an application from a repository in a linked GitHub account</h2>

* Create an application for Engine Yard Cloud, making sure to do the following: 

    (For general instructions on creating an application, see [[Getting Started|getting_started_home]].):

    a. In the Git Repository URI, select the name of the application from the dropdown menu or begin typing the name of application.

    b. After you click Create Application, do not copy a Git deploy key to your GitHub account. <br>
     Instead, the key is added directly to the linked GitHub account. The deploy key is named "Engine Yard Deploy Key <i>app_name</i>".

<h2 id="topic4">To unlink your Engine Yard account from a GitHub account</h2>

1. Log into the GitHub account that you want to unlink your Engine Yard account from. 

2. In your Engine Yard account, go to Account > Account Settings.

2. Click on the account that you want to unlink from GitHub account.

3. Under the Services heading, click un-link.



[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[5]: #topic5        "topic5"
[6]: #topic6        "topic6"