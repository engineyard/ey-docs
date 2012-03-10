# Add unix packages to your application

You can add additional software packages to your application within Engine Yard Cloud. Packages are added at the account-level. After a package is applied to specific environment, it cannot be removed from that environment. (Although, after a package is dissociated from an application, new environments for that application do not have the package.)

##To configure additional software packages for your application within Engine Yard Cloud.

1. In the Dashboard, click the name of the application you want to modify.  
2. Click the Unix Packages icon.
3. Search for your package.  
    For example `rabbitmq` for RabbitMQ.  
    Results are returned under the heading "Available Unix Packages".
4. Click Add ->.  
    The package is added to the Selected list.  
5. To install the package on an existing environment:  
    a. Click Go to dashboard.  
    b. Click the environment name.  
    c. Click Apply.  
6. To install the package on new environment:  
	a. Click Go to dashboard.  
	b. Create and boot a new environment for the application.  

## To remove a software package

1. In the Dashboard, click the name of the application to remove the software package from.  
2. Click the Unix Packages icon.
3. Click x Remove for the package.  
   This removes the package from the UI but does not remove the package from any currently running environments.
