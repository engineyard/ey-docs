# Find Your Generated MySQL Password and Connect to Your DB

Before you begin, you must be running at least one application instance. When you configure your application on AppCloud we generate a random password for you and render it on your instance. Your database password can be obtained by connecting over SSH into your instance and viewing your `database.yml` file.

## Access Your database.yml File

SSH into an application slice and run this command:

    cat /data/app_name/shared/config/database.yml

For example:

    production:
      adapter:   mysql
      database:  app_name_production
      username:  deploy
      password:  eQlmeEqGxv
      host:      localhost


## Login to a MySQL Database

Now you're ready to log into mysql from the command line:

    mysql -u deploy -p eQlmeEqGxv -h localhost app_name_production