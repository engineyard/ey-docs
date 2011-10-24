# Customize your deployment on Engine Yard Cloud

If your application has special deployment requirements, read this page about methods to customize the deployment process.

The following methods can help you customize your deployment:

* <a href="#first">Using ey.yml to customize your deployment</a>
* <a href="#second">Advanced customization with override files</a>
* <a href="#third">Deploy Hooks</a>


<h2 id="first">Using ey.yml to customize your deployment</h2>

`ey.yml` is a YAML file that lives in your application's `config/` directory. 
It allows you to customize the deploy process to a limited, but still useful, extent.

`ey.yml` contains a single top-level hash named **environments**. Its keys are 
environment names, and its values are themselves hashes of settings for that 
particular environment.

### Examples

All these examples assume your environment is **myapp_staging**. Replace that 
with your environment's actual name.

* **Don't copy .git directory to each release**

        environments:
          myapp_staging:
            copy_exclude:
            - .git

* **Set a default branch**

        environments:
          myapp_staging:
            branch: master


* **Use thor to run migrations, but only run them when --migrate is specified**

        environments:
          myapp_staging:
            migration_command: thor db:migrate
              migrate: false



### Fields to note

The engineyard gem pays attention to four keys in the per-environment hash. They are:

  * `copy_exclude (array)` <br />
    items that are excluded when copying from your repository to each release. See rsync(1), in particular the `--exclude` option, for more details. Default is empty.

  * `branch (string)` <br />
    the branch to deploy by default. Default is `master`.

  * `migration_command (string)` <br />
    the command to invoke in order to run migrations. Default is `rake db:migrate`.

  * `migrate (boolean)` <br />
    whether or not to run migrations. Default is `true`.


<h2 id="second">Advanced customization with override files</h2>

Deploy overrides offer an advanced level of customization via overrides file.  This 
file is instance_eval'd into the main deploy class so that you can over ride core 
functionality of the deploy.  You should not use this for simple modifications 
around a deploy (<a href="#third">deploy hooks</a> are a better choice for those tasks). 

### Using deploy overrides

To use deploy overrides, create a file in your code repository at either 
`config/eydeploy.rb` or `eydeploy.rb`.  This file should contain a list 
of methods, and is instance_eval'd into the main `EY::Deploy` class.  You 
can super into any of the methods that you override. You 
can see the source of the class that your customization will be instance_eval'd 
into on GitHub at [[https://github.com/engineyard/engineyard-serverside/blob/master/lib/engineyard-serverside/deploy.rb]] 
We guarantee the top level tasks (bundle, symlink_configs, enable_maintenance_page, migrate, symlink, restart, disable_maintenance_page, and cleanup_old_releases) 
will remain consistent and in a consistent order.  All other methods in the 
class are subject (but unlikely) to change.

### Example: GitHub style deploy

    # This is an overrides file for ey deploy that uses git to do all
    # moving around, rather than using multiple directories and symlinks
    
    class ::EY::Serverside::Deploy::Configuration
      # no separate releases directories
      def release_path(*args)
        current_path
      end
      
      def all_releases(*args)
        [current_path]
      end
    end
    
    def copy_repository_cache
      # Don't need to do this, just make sure current is linked to
      # cached-copy
      run "ln -nfs #{c.repository_cache} #{c.current_path}"
    end
    
    def symlink(*args)
      # do nothing
    end
    
    def cleanup_old_releases(*args)
      # do nothing
    end

<h2 id="third">Deploy Hooks</h2>
Deploy hooks are Ruby scripts that you write which are executed at designated 
points in the deployment process. This allows you to customize the deployment 
of your application to meet its particular needs. We discuss deploy hooks in [[Using deploy hooks|use-deploy-hooks-with-engine-yard-cloud]].
