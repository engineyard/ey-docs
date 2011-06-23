# Adding Redis to your Application

Redis is an open source, advanced key-value store. It is often referred to
as a data structure server since keys can contain strings, hashes, lists,
sets and sorted sets.

Getting Redis working on AppCloud is not as daunting a task as it may
seem. It's as easy as bundling the `redis` gem into your application.

## Install the Redis Gem

The easiest way to add Redis to your Ruby application is to add `gem
'redis'` to your Gemfile. Then just run `bundle install` from your
development machine and deploy the application to AppCloud.

## Redis Version

The Redis version on the Engine Yard Platform was recently updated to
v2.2.10. For new instances, you won't have to do anything to use this
version. If you have a current running application, you may need to
actually restart the Redis server to apply the changes. Just SSH into
your instance and run `/etc/init.d/redis restart`.

    solo i-dd3970b3 ~ # /etc/init.d/redis restart
      * Starting Redis server ...                      [ ok ]
    solo i-dd3970b3 ~ # 

To check your Redis version, the easiest way is SSH into your instance
and view the info from the command line. From your instance, run
`redis-cli` which will startup the Redis prompt and then type in `info`
to see all of the information about Redis on your instance.

    solo i-dd3970b3 ~ # redis-cli
      redis 127.0.0.1:6379> info
      redis_version:2.2.10
      redis_git_sha1:00000000
      redis_git_dirty:0
      arch_bits:32
      multiplexing_api:epoll
      process_id:20701
      uptime_in_seconds:449867
      uptime_in_days:5
      lru_clock:862724
      used_cpu_sys:0.03
      used_cpu_user:0.04
      used_cpu_sys_childrens:0.00
      used_cpu_user_childrens:0.00
      connected_clients:1
      connected_slaves:0
      client_longest_output_list:0
      client_biggest_input_buf:0
      blocked_clients:0
      used_memory:547420
      used_memory_human:534.59K
      used_memory_rss:1138688
      mem_fragmentation_ratio:2.08
      use_tcmalloc:0
      loading:0
      aof_enabled:0
      changes_since_last_save:0
      bgsave_in_progress:0
      last_save_time:1308411617
      bgrewriteaof_in_progress:0
      total_connections_received:2
      total_commands_processed:1
      expired_keys:0
      evicted_keys:0
      keyspace_hits:0
      keyspace_misses:0
      hash_max_zipmap_entries:512
      hash_max_zipmap_value:64
      pubsub_channels:0
      pubsub_patterns:0
      vm_enabled:0
      role:master
      allocation_stats:4=32,6=1,8=33,9=71,10=58,11=111,12=10176,13=36,14=24,15=81,16=116,17=10,18=6,19=16,20=9,21=5,22=5,23=40,24=18,25=5,26=6,27=3,28=5,29=5,30=5,31=1,32=6,34=3,35=1,36=7,37=7,38=6,39=16,40=5,41=3,42=2,43=3,44=2,45=1,46=1,47=1,48=68,49=2,50=1,51=1,52=1,53=2,56=4,57=2,58=3,59=4,60=1,61=1,62=1,63=1,64=4,65=2,66=2,67=1,68=4,69=5,70=1,71=2,72=7,73=2,74=3,75=1,76=2,77=3,78=5,79=6,80=12,81=17,82=19,83=10,84=27,85=16,86=17,87=13,88=7,89=10,90=4,128=3,>=256=15
      redis 127.0.0.1:6379>

## Enjoy Redis

Assuming deployment completed without errors, you should then be able to
do `Redis.new` to connect to the server and start having fun with
Redis in your application. Some of the things you can do with Redis
are: [using Redis as your Rails cache](http://jimneath.org/2011/03/24/using-redis-with-ruby-on-rails.html#using_redis_as_your_rails_cache_store),
use Redis for application notifications, [create a note-taking app](https://gist.github.com/86714),
[[configure and deploy Resque|configure-and-deploy-resque]] and much more.

