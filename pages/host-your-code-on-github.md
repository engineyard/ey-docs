# Host your code on GitHub

After your local machine is setup and you have created your first Ruby on Rails application, place your code in a git repository. You have options on where to host your code, but the simplest is hosting it on [GitHub](http://www.github.com). This page describes how to host your code on GitHub.

**Note:** If your code is in a Subversion (SVN) repository, see [[GitHub:Help Import from Subversion|http://help.github.com/import-from-subversion/]].

##To host your code on GitHub  

1. Create a [[GitHub|https://github.com/]] account.
2. After logging in, create a new repository. (Click New repository.)
3. Give your project a name and description and click Create Repository.
4. Follow the GitHub instructions to connect your local git repository with your GitHub repository.
  
    ![GitHub instructions 2012](images/github-repo-guide.png)

    After you have completed the GitHub, your application code is stored remotely on GitHub. Whenever you make any local changes in your git repository and want to have it pushed to your remote GitHub repository, type `git push` while inside of your local repository; git will push your newly committed code to GitHub.

**Important!** Make sure to put your Rails root directory at the root level of your git repository. Don't put it in a subdirectory. (The Rails root directory is the one that contains the app, config, and public directories.)

<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
    <td>Setting up your local machine</td><td>[[Set up your local environment|setup-environment]].</td>
  </tr> 
  <tr>
	<td>hosting your code on GitHub</td><td>this [[Spanish translation of the Host your Code on GitHub tutorial|http://www.decisionesinteligentes.com/guides/github-como-repositorio]], courtesy of Mario Alberto Chavez Cardenas of [[Decisiones Inteligentes|http://www.decisionesinteligentes.com/]] and [[Tiajuana.rb|http://tijuanarb.org/]].</td>
  </tr>
</table>