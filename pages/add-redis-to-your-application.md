# Adding Redis to your application

[Redis](http://redis.io) is an open source, advanced key-value store. It is often referred to
as a data structure server because keys can contain strings, hashes, lists,
sets and sorted sets.

This page describes getting Redis working on your Engine Yard Cloud Ruby application. 

## Install the Redis gem

Bundling the [Redis gem](http://rubygems.org/gems/redis) into your application.


To add Redis to your application

1. Add the Redis gem to your gemfile.
        gem 'redis'
2. Install the Redis gem using bundler from your development machine.
        bundle install
3. Deploy your application.

## Update the Redis version

New (or newly upgraded) environments have the Engine Yard recommended version of Redis installed. (See [[Engine Yard Technology Stack|cloud-tech-stack]].) If your application is running in an older environment, you might have to restart the Redis server to apply the changes. 

###To find out your Redis version

1. Via SSH, connect to the application and database instance (for single server environment) or the database instance (for a clustered environment).

2. Type:  
        redis-cli

3. At the Redis prompt, type:  
        redis 127.0.0.1:6379> info

    The response shows the version number on the first line:

          redis_version:2.2.10

4. If your version is older that the recommended version (see [[Engine Yard Technology Stack|cloud-tech-stack]]), follow the procedure below to update the Redis version.

### To update Redis

1. Via SSH, connect to the application and database instance (for single server environment) or the database instance (for a clustered environment).

2. Type:

        sudo /etc/init.d/redis restart

      * Starting Redis server ...                      [ ok ]

<!--  I get 
      * Starting Redis server ...                      [ !! ] -->


      
## Install Redis on a utility instance

If you plan to use Redis in-depth, we recommend that you install Redis on a utility instance. This way, Redis doesn't share resources with your application instance. To do this, you need a custom Chef recipe is required. For more information about custom Chef 
recipes see [[Custom Chef Recipes|custom-chef-recipes]]. 

Here is a procedure for adding Redis to a utility instance named "redis". You'll need to adjust this procedure for your specific environment.

###To install Redis on a utility instance

1. Download the [ey-cloud-recipes](http://github.com/engineyard/ey-cloud-recipes)
to your local computer.

        $ git clone git@github.com/engineyard/ey-cloud-recipes.git
        
2. Uncomment `require_recipe "redis"` from the main cookbook (main/recipes/default.rb).
3. Add a utility instance named "redis" to your application.
4. Upload and apply the recipes to your environment

        $ ey recipes upload -e <environment_name>
        $ ey recipes apply -e <environment_name>

<!-- Not sure how I should handle the stuff below. Is it part of a procedure or a procedure on its own. Why and when do I do this? What is Utility Redis? -->
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


## Things to do with Redis

Some of the things you can do with Redis are: 

* [Use Redis as your Rails cache](http://jimneath.org/2011/03/24/using-redis-with-ruby-on-rails.html#using_redis_as_your_rails_cache_store)  
* Use Redis for application notifications
* [Create a note-taking app](https://gist.github.com/86714)
* [[Configure and deploy Resque|configure-and-deploy-resque]]

<h2 id="topic5"> More information</h2>

<table>
	  <tr>
	    <th>For more information about...</th><th>See...</th>
	  </tr>
	  <tr>
	    <td>SSHing into an instance</td><td>[[Connect to your instance via SSH|ssh-connect]].</td>
	  </tr> 
</table>
