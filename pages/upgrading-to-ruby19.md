# Upgrading to Ruby 1.9

Ruby 1.9 is version of MRI which brings substantial performance improvements. Engine Yard's version of Ruby 1.9 also has garbage collection enabled, which allows customization for your specific requirements.

Each environment is associated with a specific version of the runtime that is used to run all applications contained in that environment.

**Important!** It is highly recommended that you first test Ruby 1.9 in a new staging environment with your existing application.

## To create a Ruby 1.9 environment for your application

1. In the Dashboard, click the name of your application.

2. On the Environment, click Create New Environment.

3. Complete the fields for the environment. Make sure to select Ruby 1.9.2 for the Runtime.

![Figure 1](images/ruby_192.png)


##To edit an existing environment to use Ruby 1.9

After you test Ruby 1.9 with your application(s), you can switch your production environment to Ruby 1.9.

1. Stop the environment.
2. On the Environment page, click Edit Environments.
4. Under Runtime, select Ruby 1.9.2.
5. Update and boot the environment.