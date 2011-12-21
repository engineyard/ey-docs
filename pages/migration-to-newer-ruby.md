#Migrate to Ruby 1.9.2

This page outlines how to migrate an application to Ruby 1.9.2.

This page assumes that you have a pre-Ruby 1.9.2 application running on Engine Yard Cloud.

You can do the migration yourself as outlined [below][3], or you can ask [[Engine Yard Professional Services|http://www.engineyard.com/services]] to do the migration for you.

##Why migrate to Ruby 1.9.2?

Ruby 1.9 is a version of MRI which brings substantial performance improvements. Engine Yard's version of Ruby 1.9 also has garbage collection enabled, which allows customization for your specific requirements.

**Note:** You can also follow the procedure below to upgrade from Ruby 1.8.6 to 1.8.7. (Ruby 1.8.7 is recommended over 1.8.6; it is more stable and has better performance.) 

<h2 id="topic3">To migrate to Ruby 1.9.2</h2>
1. Run your application locally:  
    a. If you use unix or Mac OS X, update your local environment to 1.9.2 using the instructions here: [[beginrescueend.com|http://beginrescueend.com/rvm/install/]].  
    b. If you use Windows, update your local environment to 1.9.2 using the instructions here: [[railsinstaller.org|http://railsinstaller.org/]].  
    b. Reinstall the gems required for application.  
    c. Test the application in your local environment; make fixes if needed.
4. Run your application in a staging environment:  
    a. Clone a staging environment and edit the Runtime to Ruby 1.9.2. (Alternatively, create a new staging environment.)  
    c. Deploy the application to the staging environment.  
    d. Test the application in the staging environment; make fixes if needed.
7. Run your application in a production environment:  
    a. Clone a production environment and edit the Runtime to Ruby 1.9.2. (Alternatively, create a new production environment.)  
    b. Deploy the application to the staging environment.  

<h2 id="topic6"> Troubleshooting tip</h2>

<table>
  <tr>
    <th>Symptom</th><th>Solution</th>
  </tr>
  <tr>
    <td>Bundle install and gem errors after upgrading an application to Ruby 1.9.2. This can be caused by Ruby 1.8 gems not being updated.</td> 
    <td>
      <ol>
        <li>Remove the bundled_gems directory: <br> <code>rm -rf /data/myapp/shared/bundled_gems</code> 
        </li> 
        <li>Re-deploy the "myapp" application.
        </li>
       </ol>
    </td>
  </tr>
</table>		


<h2 id="topic5"> More information</h2>


<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>Cloning an environment</td><td>[[Clone an environment|environment-clone]] </td>
	  </tr>
	  <tr>
	    <td>Creating an environment</td><td>[[Create an environment|environment-create]]</td>
	  </tr>
	  <tr>
	    <td>Deploying an application</td><td>[[Deploying your application|deployment-intro]]</td>
	  </tr>
</table>
	
[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
