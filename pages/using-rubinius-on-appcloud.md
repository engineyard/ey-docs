#Using Rubinius with Engine Yard AppCloud

##Introduction

Rubinius is currently in Beta support on Engine Yard AppCloud. This version of Rubinius brings substantial performance improvements.

##Getting Started

Each environment is associated with a specific version of the runtime that will be used to run all applications contained in that environment.

##Support

Support for users of Rubinius is provided via the dedicated [[Rubinius forum|signup-rubinius]]. All AppCloud customers can access support for Rubinius via this forum until it is promoted from the [[Engine Yard Beta Program|beta_home]].

###New Environment

  - Create a new environment using the **Create New Environment** link on the dashboard.
  - Right now Rubinius works with **Passenger 3** so make sure to choose that as the web server. Passenger 3 is currently in beta as well so make sure to [[request access|signup-passenger3]] for it.
  - In the Ruby Runtime section, pick **Rubinius**.

![Figure 1](images/rubinius_environment.jpg)

###Existing Environment

  - To edit an existing environment, click **More Options** -> **Edit Environment** for the environment you wish to modify.![Figure 2](images/existing_environment.jpg)
  - You can then use the same work-flow as above to pick **Rubinius** as your runtime.
  - If you have existing applications running in the environment, the dashboard will prompt you to rebuild the environment, which will re-run chef recipes and update the runtime to use Rubinius.
