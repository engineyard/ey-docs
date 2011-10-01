<h1>Upgrading an environment</h1>

From time to time, Engine Yard releases a new stack version. When a new stack is released, you have the option to upgrade your environment and take advantage of the latest features and fixes. Some reasons Engine Yard releases a new stack are:  

* Upgrading a stack component to a newer version 
* Addressing vulnerabilities
* Bug fixes     

When Engine Yard releases a new stack, an **! Upgrade...** button appears on the environment.

![upgrades available](images/upgrades_available.png) 

Before you upgrade, you can review the changes that will be applied to your current environment.

<h3>Process</h3>

This is the process for upgrading a production environment:  

* [Test the upgraded environment on a clone.][3]  
* [Upgrade the production environment.][2]

<h3> Cloned environments vs. new environments</h3> 

When you clone an environment, the cloned stack is the same version as the original stack. However, if you create a new environment, it is always the latest stack version. 

<h3>About adding instances to an existing environment</h3>

When you add a new instance to an existing environment, the added instance is the same stack version as the other instances in that environment. You do not have to upgrade before adding an instance.


<h2 id="test">Test an upgrade</h2>

Best practice is to test in a non-production environment before upgrading a production environment. Don't upgrade your production environment until you have validated the upgrade in a test environment. 


<h3>To test an upgrade</h3>
1. Clone the environment. (See [[Clone an environment|environment-clone]].)  
2. Upgrade the cloned environment, following the procedure [below][4].
3. Test the application on the cloned environment.
4. Upgrade the production environment, following the procedure [below][4].
5. Decommission the cloned environment. (See [[Delete an environment|environment-delete]].)


<h2 id="topic2">Upgrade an environment</h2>

When a new stack is available, you see a "Please Upgrade" message on your Dashboard and the ! Upgrade button on the environment pages.

<b>Important!</b> If your stack is very out-of-date, you see this message: "Upgrading will enable Stack Change Management." Remember, when updating a very out-of-date stack for a production environment, always test in a cloned environment first. 

<h3 id="upgrade">To upgrade an environment</h3>
1. In your Dashboard, click the environment name.    
2. Click ! Upgrade...  
    The Upgrades Available page appears.  
3. Review the Changes list.  
3. Click Upgrade Environment.

[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #test        "test"
[4]: #upgrade        "upgrade"