# Find your key information about your database

When an Engine Yard Cloud environment is created, a database is set up for the application. 

The database.yml is written to the /data/app_name/shared/config/ directory. 

The database.yml file contains key information about your database:  

* **database name.** This is always the same name as your application. In examples, we use myapp as the application name.
* **username.** This is the name of the database user?. This username is always deploy.
<!--questions about user: is this the database owner or administrator? What permissions does this database user have? What other database users are created? There's a root user too, right? And the root user's password is the same as the deploy user's.>
* **password.** This is the password for the deploy database user and also the root database user. It is an automatically-generated, case-sensitive, alpha numeric string.  (MyP4ssW0rd)
* **host.** In a single server environment...


Before you begin, you must be running at least one application instance. When you configure your application on Engine Yard Cloud, we generate a random password for you and render it on your instance. Your database password can be obtained by connecting over SSH into your instance and viewing your `database.yml` file.

## Access your database.yml file

SSH into an application slice and run this command:

    cat /data/app_name/shared/config/database.yml

For example:

    production:
      adapter:   mysql
      database:  app_name_production
      username:  deploy
      password:  eQlmeEqGxv
      host:      localhost


## Login to a MySQL database

Now you're ready to log into mysql from the command line:

    mysql -u deploy -p eQlmeEqGxv -h localhost app_name_production