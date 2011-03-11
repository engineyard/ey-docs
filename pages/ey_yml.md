# Configuring ey.yml

## Structure

`ey.yml` is a YAML file that lives in your application's `config/` directory. It allows you to customize the deploy process to a limited, but still useful, extent.

`ey.yml` contains a single top-level hash called "environments". Its keys are environment names, and its values are themselves hashes of settings for that particular environment.

## Examples

All these examples assume your environment is **myapp_staging**. Replace that with your environment's actual name.

### Example 1: ***Don't copy .git directory to each release***

<code>
environments:
 myapp_staging:
   copy_exclude:
     - .git
</code>

### Example 2: ***Set a default branch***

<code>
environments:
 myapp_staging:
   branch: master
</code>

### Example 3: ***Use thor to run migrations, but only run them when --migrate is specified***

<code>
environments:
  myapp_staging:
    migration_command: thor db:migrate
    migrate: false
</code>


## Fields of Note

The engineyard gem pays attention to four keys in the per-environment hash. They are:

  * `copy_exclude (array)`: items that will be excluded when copying from your repository to each release. See rsync(1), in particular the `--exclude` option, for more details. Default is empty.

  * `branch (string)`: the branch to deploy by default. Default is `master`.

  * `migration_command (string)`: the command to invoke in order to run migrations. Default is `rake db:migrate`.

  * `migrate (boolean)`: whether or not to run migrations. Default is `true`.
