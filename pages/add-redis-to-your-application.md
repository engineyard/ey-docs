# Adding Redis to your application

[Redis](http://redis.io) is an open source, advanced key-value store. It is often referred to
as a data structure server since keys can contain strings, hashes, lists,
sets and sorted sets.

Getting Redis working on Engine Yard Cloud is not as daunting a task as it may
seem. It is as easy as bundling the [Redis gem](http://rubygems.org/gems/redis) gem into your application.

## Install the Redis Gem

The one way to add Redis to your Ruby application on Engine Yard Cloud is to:

* Add the Redis gem to your gemfile
        gem 'redis'
* Install the Redis gem using bundler from your development machine
        bundle install
* Deploy your application

## Redis Version

The Redis version on the Engine Yard platform was recently updated to
v2.4.2. For new instances, you won't have to do anything to use this
version. If you have a current running application, you may need to
actually restart the Redis server to apply the changes. Just SSH into
your instance and run `/etc/init.d/redis restart`.

    solo i-dd3970b3 ~ # /etc/init.d/redis restart
      * Starting Redis server ...                      [ ok ]
    solo i-dd3970b3 ~ # 

To check your Redis version, the easiest way is to SSH into your instance
and view the info from the command line. From your instance, run
`redis-cli` which will startup the Redis prompt and then type in `info`
to see all of the information about Redis on your instance.

    solo i-dd3970b3 ~ # redis-cli
      redis 127.0.0.1:6379> info
      redis_version:2.2.10
      redis_git_sha1:00000000
      redis_git_dirty:0
      .
      .
      .
      redis 127.0.0.1:6379>
      
## Install Redis on utility instance

If you plan on using Redis in-depth, installing on a Utility instance is
recommended so it doesn't share resources with your Application server. In
order to do this, a custom Chef recipe is required. You can about custom Chef 
recipes [[here|custom-chef-recipes]]. 

Below are the steps for adding it to a Utility instance. They assume a Utility
instance named 'redis'. You'll need to adjust for your specific environment.

1. Download the [ey-cloud-recipes](http://github.com/engineyard/ey-cloud-recipes)
to your local computer.

        $ git clone git@github.com/engineyard/ey-cloud-recipes.git
        
2. Uncomment `require_recipe "redis"` from the main cookbook (main/recipes/default.rb)
3. Add a Utility instance named 'redis' to your application if you haven't done so
already.
4. Upload and apply the recipes to your environment

        $ ey recipes upload -e <environment_name>
        $ ey recipes apply -e <environment_name>

You can now connect to the Utility Redis from your Rails application. 
[Here](https://gist.github.com/1417571) is a link to a Gist that will write out a 
`redis.yml` configuration file. You can then connect to Redis in an initializer or
environment file using the following:

    # Load the redis.yml configuration file
    redis_config = YAML.load_file(Rails.root + 'config/redis.yml')[Rails.env]
    
    # Connect to Redis using the redis_config host and port
    if redis_config
      $redis = Redis.new(host: redis_config['host'], port: redis_config['port'])
    end


## Enjoy Redis

Some of the things you can do with Redis
are: [using Redis as your Rails cache](http://jimneath.org/2011/03/24/using-redis-with-ruby-on-rails.html#using_redis_as_your_rails_cache_store),
use Redis for application notifications, [create a note-taking app](https://gist.github.com/86714),
[[configure and deploy Resque|configure-and-deploy-resque]] and much more.

