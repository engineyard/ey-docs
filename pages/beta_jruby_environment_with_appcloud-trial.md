# Using a JRuby environment with a trial account


### Introduction

JRuby is a Beta feature on AppCloud. To deploy a JRuby application on a trial account, follow this process: 

*	[Get started and create an application and environment.][2]
*	[Reconfigure the environment for JRuby.][3]

<h2 id="topic2"> Get started and create an application and environment  </h2>

### Introduction  

For detailed help with these steps, see [[docs.engineyard.com|home]], for example, [[Setting up a trial account and deploying a sample application|tutorial_deploy_fat_free_crm]]. These steps are the same for any trial account setup. 


###To get started and create an application and environment  
1. Sign up for a trial account.  
2. Validate and start the trial account.  
3. Create your (JRuby) application.  
    If you don’t have a JRuby application, choose the ToDo application: `git://github.com/engineyard/todo.git`

<h2 id="topic3"> Reconfigure the environment for JRuby </h2>

###Introduction  
This procedure applies only to the JRuby Beta on the trial account. 

The trial was set up with a streamlined workflow that automatically creates a Ruby-based environment. To work around this, you stop the environment, reconfigure it as a JRuby one, and then boot the JRuby environment.

###To reconfigure the environment for JRuby

1. Make sure that the instance is loaded (that the indicator light is green).  
2. Click Stop to stop the environment.  
3. On the Environment page, click More Options > Edit Environment.  
4. On the Edit the Environment page, set Application Server Stack to Trinidad.  
    The Ruby Runtime changes to JRuby 1.6.2 (beta).  
    **Note:** If you can’t edit the Application Server Stack, make sure that you have stopped the environment. Only stopped environments can be edited.
5. Click Update Environment.  
6. On the Environment page, click Boot.  
    This boots the JRuby environment for your application.  




<h2 id="topic4"> What next? </h2>

You can:

* Click HTTP to visit the application.

* Modify and redeploy your application.




[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
