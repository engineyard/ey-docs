#Using Rubinius with Engine Yard Cloud

##Introduction

Rubinius is currently in Beta support on Engine Yard Cloud. This version of Rubinius brings substantial performance improvements.

##Support

Support for users of Rubinius is provided via the dedicated [[Rubinius forum|signup-rubinius]]. All Engine Yard users can access support for Rubinius via this forum until it is promoted from the [[Engine Yard Beta Program|beta-intro]].

##To use Rubinius for a new environment

1. Create a new environment using the Create New Environment link on the Dashboard. 

2. Select Passenger 3 for the web server.  
    Rubinius works only with Passenger 3.
  
3. In the Runtime section, select Rubinius.  

##To edit an existing Passenger 3 environment to use Rubinius 

1. On the Environment page, click Edit Environment.  

2. In the Runtime section, select Rubinius.

3. Click Update Environment.

4. Click !Apply.

##To edit an existing non-Passenger 3 environment to use Rubinius

If your environment is not already running Passenger 3, you need to stop the environment to edit it.

1. Stop the environment.

2. On the Environment page, click Edit Environment. 
 
2. Select Passenger 3 for the Application Server Stack.  
	Rubinius works only with Passenger 3.

3. In the Runtime section, select Rubinius.  

4. Click Update Environment.

5. Click Boot.
  
