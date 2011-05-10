# Upgrading to Ruby 1.9

## Introduction

Ruby 1.9 is version of MRI which brings substantial performance improvements. Engine Yard's version of Ruby 1.9 also has garbage collection enabled which allows customization for your specific requirements.

## Getting Started

Each environment is associated with a specific version of the runtime that will be used to run all applications contained in that environment.

## Support

Ruby 1.9 is supported under all Engine Yard AppCloud Support programs.

### Ruby 1.9 with New Environment

It is highly recommended that you first test Ruby 1.9 in a new staging environment with your existing application:

  - Create a new environment using the **Create New Environment** link on the dashboard.
  - Find your application in the list, and click "Add environment".
  - Specify an environment name for the new environment.
  - Click on **Show Advanced Options**.
  - In the Ruby Runtime section, pick **Ruby 1.9.2**.

![Figure 1](images/new_environment.jpg)

### Upgrading your existing Environment

Once you have tested Ruby 1.9 with your application(s), up can switch your production environment to Ruby 1.9.

Note: all applications in an environment use the same version of Ruby.

  - To edit an existing environment, click **More Options** -> **Edit Environment** for the environment you wish to modify.![Figure 2](images/existing_environment.jpg)
  - You can then use the same work-flow as above to pick Ruby 1.9 as your runtime.
  - If you have existing applications running in the environment, the dashboard will prompt you to rebuild the environment, which will re-run chef recipes and update the runtime to use Ruby 1.9.
