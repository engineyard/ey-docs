# Using Passenger 3 with Engine Yard AppCloud

## Introduction

Phusion Passenger 3 is currently in Beta support on Engine Yard AppCloud. This version of Passenger brings substantial performance improvements. As a major version release, we decided to release it as an Alpha feature for opt-in customers.

## Overview

Each environment can choose to change from “Passenger” to “Passenger 3” independently. All applications on that environment will use the Passenger 3 web server.

See below for **Getting Started** instructions for New Environments or updating Existing Environments.

## FAQ

  - What is the differences between spawning methods? 
    [Answer](http://www.modrails.com/documentation/Users%20guide%20Nginx.html#spawning_methods_explained)

## Support

Support for users of Passenger is provided via emails to [Dr Nic Williams](mailto:drnic@engineyard.com). He will create internal development tickets and follow up with you on their solutions and/or temporary workarounds.

### New Environment

  - Create a new environment using the **Create New Environment** link on the dashboard.
  - In the “Web Stack Server” section, choose **Passenger 3**

{{:beta:change-web-server-stack.png|}}

### Existing Environment

To edit an existing environment:

  - **Terminate** your environment.

{{:beta:existing_environment.jpg|}}

  - Click **More Options** -> **Edit Environment** for the environment you wish to modify.
  
{{:beta:change-web-server-stack.png|}}
  
  - In the **Web Stack Server** section, choose “Passenger 3” 
  - If you have existing applications running in the environment, the dashboard will prompt you to rebuild the environment, which will re-run chef recipes and update the runtime to use Passenger 3.
