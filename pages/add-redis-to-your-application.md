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
v2.2.10. For new instances, you won't have to do anything to use this
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

## Enjoy Redis

Assuming deployment completed without errors, you should then be able to
do `Redis.new` to connect to the server and start having fun with
Redis in your application. Some of the things you can do with Redis
are: [using Redis as your Rails cache](http://jimneath.org/2011/03/24/using-redis-with-ruby-on-rails.html#using_redis_as_your_rails_cache_store),
use Redis for application notifications, [create a note-taking app](https://gist.github.com/86714),
[[configure and deploy Resque|configure-and-deploy-resque]] and much more.

