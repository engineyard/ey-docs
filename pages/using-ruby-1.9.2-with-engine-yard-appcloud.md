# Using Ruby 1.9.2 with Engine Yard AppCloud

## Introduction

Ruby 1.9.2 is currently in Beta support on Engine Yard AppCloud. This version of MRI brings substantial performance improvements, and is a great way to get started with the 1.9 series.

## Getting Started

Each environment is associated with a specific version of the runtime that will be used to run all applications contained in that environment.

## Support

Support for users of Ruby 1.9.2 is provided via the dedicated [Ruby 1.9.2 forum](http://docs.engineyard.com/beta/signup-ruby-192). All AppCloud customers can access support for Ruby 1.9.2 via this forum until it is promoted from the [Engine Yard Beta Program](http://docs.engineyard.com/beta/home).

### New Environment

  - Create a new environment using the **Create New Environment** link on the dashboard.
  - On the new environment page, click on **Show Advanced Options**.
  - In the Ruby Runtime section, pick **Ruby 1.9.2 (beta)**. You will also need to pick the latest Experimental Stack to use MRI 1.9.2.

{{:beta:new_environment.jpg|}}

### Existing Environment

  - To edit an existing environment, click **More Options** -> **Edit Environment** for the environment you wish to modify.{{:beta:existing_environment.jpg|}}
  - You can then use the same work-flow as above to pick Ruby 1.9.2 as your runtime.
  - If you have existing applications running in the environment, the dashboard will prompt you to rebuild the environment, which will re-run chef recipes and update the runtime to use Ruby 1.9.2.
