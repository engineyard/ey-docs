# Deploy Hook API

## Introduction

Deploy hooks are plain old Ruby code. However, the engineyard gem does make 
some additional methods available within deploy hooks in order to simplify 
common tasks.

### Available methods

  * `all_releases()`: <br />
    array of paths to the deployments on this instance, ordered from oldest to newest.

  * `current_name()`: <br />
    on a utility instance, the name of the utility instance. On non-utility instances, nil.

  * `current_path()`: <br />
    path to the current deployment. This is the deployment pointed to by the `current` symlink, so the value of `current_path()` will change after the `symlink` step is executed.

  * `current_role()`: <br />
    the role of the current instance. Possible values:
    * `solo`: the sole instance for the environment
    * `app_master`: the application master
    * `app`: a non-master application server
    * `util`: a utility server. The `current_name` method will allow you to distinguish between different types of utility servers.

  * `environment()`: <br />
    the value of the `RAILS_ENV`, `RACK_ENV`, and `MERB_ENV` environment variable.

  * `latest_release()`: <br />
    path to the most recent deployment.

  * `migrate?()`: <br />
    true if migrations are being run in this deployment, false otherwise.

  * `node()`: <br />
    Various information about the current instance and other instances in the environment. See `/etc/chef/dna.json` on an instance for an example of what `node` will return. If the information you require is available via some other method, it is preferable to use the other method to get it. `node` is just here as a catch-all.

  * `previous_release(current=latest_release)`: <br />
    path to the deployment prior to `current`. If nil, then `current` is the newest deployment.

  * `oldest_release()`: <br />
    path to the oldest deployment

  * `on_app_master(&block)`: <br />
    execute `block` only on the environment's application master or single instance.

  * `on_app_servers(&block)`: <br />
    execute `block` only on the environment's application servers (master and slaves) or single instance.

  * `on_app_servers_and_utilities(&block)`: <br />
    execute `block` only on the environment's application servers and utility servers

  * `on_utilities(*utility_names, &block)`: <br />
    execute `block` on utility servers whose names are included in `utility_names`. `utility_names` can be passed as an array or as multiple arguments.
    * If called like `on_utilities() { ... }`, the block will be executed on all utility servers.
    * `on_utilities("alpha") { ... }` executes the block on all utility servers named "alpha".
    * `on_utilities("a", "b") { ... }` is equivalent to `on_utilities(%w[a b]) { ... }`.

  * `release_dir()`: <br />
    path to the directory containing the deployments

  * `release_path()`: <br />
    path to the deployment that is currently being deployed

  * `repo()`: <br />
    the URL of this application's git repository.

  * `repository_cache()`: <br />
    the path to the local clone of this application's git repository.

  * `revision()`: <br />
    the SHA of the commit currently being deployed.

  * `run(command)`: <br />
    execute `command` as a nonprivileged user (`deploy` by default)

  * `shared_path()`: <br />
    path to the `shared` directory

  * `stack()`: <br />
    the web server stack for this environment. Possible values:
    * `nginx_mongrel`: Nginx web server and Mongrel application server
    * `nginx_passenger`: Nginx web server and Passenger application server
    * `nginx_unicorn`: Nginx web server and Unicorn application server

  * `sudo(command)`: <br />
    execute `command` as root