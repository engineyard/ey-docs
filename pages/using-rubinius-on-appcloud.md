#Using Rubinius with Engine Yard AppCloud

##Introduction

Rubinius is currently in Beta support on Engine Yard AppCloud. This version of Rubinius brings substantial performance improvements.

##Getting Started

Each environment is associated with a specific version of the runtime that is used to run all applications contained in that environment.

##Support

Support for users of Rubinius is provided via the dedicated [[Rubinius forum|signup-rubinius]]. All AppCloud customers can access support for Rubinius via this forum until it is promoted from the [[Engine Yard Beta Program|beta_home]].

##To use Rubinius for a new environment

1. Create a new environment using the Create New Environment link on the dashboard. 

2. Select Passenger 3 for the web server.  
    Rubinius works only with Passenger 3.
  
3. In the Ruby Runtime section, select Rubinius.  

![Figure 1](images/rubinius_environment.png)

##To edit an existing environment to use Rubinius

1. On the environment, click the More Options tab.  
2. Click Edit Environment.  
2. Select Passenger 3 for the web server.  
	Rubinius works only with Passenger 3.

3. In the Ruby Runtime section, select Rubinius.  
    If you have existing applications running in the environment, the dashboard prompts you to rebuild the environment, which will re-run chef recipes and update the runtime to use Rubinius.
