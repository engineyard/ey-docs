#Using Rubinius with Engine Yard Cloud

##Introduction

Rubinius 2 (language mode Ruby 1.8) is currently available with Alpha support. This version of Rubinius brings improved performance, parallelism, and better memory usage.

##Support

Support for users of Rubinius is provided via the dedicated [[Rubinius forum|signup-rubinius]]. All Engine Yard users can access support for Rubinius via this forum until it is promoted from the [[Engine Yard Early Access program|beta-intro]].

##To use Rubinius for a new environment

1. Create a new environment using the Create New Environment link on the Dashboard. 

2. Select Passenger 3 or Unicorn for the Application Server Stack.  
  
3. In the Runtime section, select Rubinius 2.0 (ruby-1.8.7-p352) (beta).  

##To edit an existing Passenger 3 environment to use Rubinius 

1. On the Environment page, click Edit Environment.  

2. In the Runtime section, select Rubinius 2.0 (ruby-1.8.7-p352) (beta).

3. Click Update Environment.

4. Click !Apply.

##To edit an existing non-Passenger 3 environment to use Rubinius

If your environment is not already running Passenger 3, you need to stop the environment to edit it.

1. Stop the environment.

2. On the Environment page, click Edit Environment. 
 
2. Select Passenger 3 or Unicorn for the Application Server Stack.  

3. In the Runtime section, select Rubinius 2.0 (ruby-1.8.7-p352) (beta).  

4. Click Update Environment.

5. Click Boot.
  
