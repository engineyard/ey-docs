# Using Rubinius with a trial account

Rubinius is currently an Alpha feature on Engine Yard Cloud. To deploy a Rubinius application on a trial account, follow this process: 

*	[Sign up for the Rubinius Alpha program.][1]
*	[Create an application and environment.][2]
*	[Reconfigure the environment for Rubinius.][3]

<h2 id="topic1"> Sign up for the Rubinius Alpha program </h2>

Signup is required to access Alpha features. 

###To sign up for the Rubinius Alpha program

1. Navigate to [[docs.engineyard.com/signup-rubinius.html|signup-rubinius]]
2. Submit a request to join the Rubinius Alpha program.


<h2 id="topic2"> Create an application and environment </h2>

The following procedure _outlines_ how to create an application and environment with a trial account. (For a detailed procedure, see [[Get Started|getting-started-intro]].)    


###To create an application and environment  
1. Sign up for a trial account.  
2. Validate and start the trial account.  
3. Create your (Rubinius) application.  
    If you don't have a Rubinius application, choose our ToDo application, located at: `git://github.com/engineyard/todo.git`

<h2 id="topic3"> Reconfigure the environment for Rubinius </h2>

This procedure applies only to the Rubinius Alpha on the trial account. 

The trial is setup with a streamlined workflow that automatically creates a Ruby-based environment. To work around this, you reconfigure the environment as a Rubinius one.

###To reconfigure the environment for Rubinius

1. Make sure that the instance is loaded (that the indicator light is green).  
3. On the Environment, click Edit Environment.    
4. On the Edit the Environment page, set the Runtime to Rubinius 1.2.4 (beta). 
5. Click Update Environment.  
6. On the Environment page, click !Update.  
    This reboots the Rubinius environment, changing the Runtime to Rubinus.  

<h2 id="topic4"> What next? </h2>

You can:

* Click HTTP to visit the application.

* Modify and redeploy your application.

<h2 id="topic5"> Troubleshooting </h2>

This table contains troubleshooting tips related to the trial account with the Rubinius Alpha program.

<table>
  <tr>
    <th>Symptom</th><th>Solution</th>
  </tr>
   
   <tr>
    <td>I don't have the Rubinius option for the Runtime.</td><td>You don't yet have access to the Rubinius Alpha program. <br> Try submitting the request again, noting in the comments field that you are unable to see the Rubinius option. </td>
   </tr>
</td>

<tr>
	<td> Other problems? <td>Post to the [[Beta Conversations Google group|http://groups.google.com/group/ey-beta-talk]]. To subscribe to the group, see [[Beta Conversations|beta-intro]]. <br> <br>
   </tr>

  </tr>
</table>


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
[4]: #topic4        "topic4"
[4]: #topic5        "topic5"
