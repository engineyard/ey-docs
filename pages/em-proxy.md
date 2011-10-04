# Load testing your environment using em-proxy

With [em-proxy](http://github.com/igrigorik/em-proxy), a proxy built with [eventmachine](http://rubyeventmachine.com/), you can send some real traffic to your Engine Yard Cloud environment for load testing.  This allows you to test your application's performance prior to migrating giving you peace of mind that things will perform great once you do migrate. It will also allow you to compare your [New Relic](http://rpm.newrelic.com) stats and make any needed adjustments. 

***WARNING: Since you will be sending real traffic to Engine Yard Cloud using this technique you need to be absolutely sure to disable things like email and billing in your application while you test.  You do not want to be double billing or spamming your users.***

[Thoughbot](http://thoughtbot.com) did a great blogpost on their experience [using this benchmarking technique](http://robots.thoughtbot.com/post/486653439/hopping-in-the-cloud).  Additionally you can read [Igvita's post](http://www.igvita.com/2009/04/20/ruby-proxies-for-scale-and-monitoring) on the topic as well.

Using this example configuration, requests returning from Engine Yard Cloud will be dropped at the proxy. This will make your testing completely transparent to your end users. 

## Configuration and Installation

You perform the proxy setup and configuration on your current production servers.  It resides between your load balancer and your web server.  As a few adjustments will need to be made, we'll describe those in detail in a moment.

### Install The Gem and Create Your Config File
    sudo gem install em-proxy --no-ri --no-rdoc

Create a `proxy.rb` file to the root users home directory.


### Update Nginx

Since em-proxy will be running on port `80`, nginx will have to run on port `8080`.  Change your nginx vhost listening on port `80` to port `8080`, then restart nginx using `/etc/init.d/nginx restart` command.

### Start The Proxy

Start the proxy up on one server at a time, if you run into issues along the way it will be much easier to back out any changes.

Run the `proxy.rb` inside of a screen session.


    $ screen
    $ ruby proxy.rb


To detach from the screen session simply hit `ctrl+a+d` and you will detach.

To later resume the screen session:

    $screen -x


The proxy will start up and start taking traffic on port `80`. It will proxy traffic to nginx, locally, on port `8080` 

### Test The Setup

Make sure you can curl your app and receive the response you expect.


    $ curl -H host:yourhostname.com http://localhost


## Disabling The Proxy

To turn the proxy off:

  - First kill the ruby process you fired up. 
  - Next revert the nginx config changes so that your vhosts are listening on port `80` instead of port `8080`.
  - Then restart nginx using the command: `/etc/init.d/nginx restart`

Now you are back to your default configuration. 

## Example Code

An example of `proxy.rb`


    `#` proxy.rb
    require 'em-proxy'
    
    Proxy.start(:host => "0.0.0.0", :port => 80) do |conn|
      conn.server :production, :host => '127.0.0.1', :port => 8080
      conn.server :ey_cloud, :host => '192.0.32.10', :port => 80
      conn.on_data do |data|
        data
      end
      conn.on_response do |server, resp|
        resp if server == :production
      end
    end


Let's step through this script and describe what it does.

1. This starts the proxy up on port `80`, and listens for any incoming requests.
        Proxy.start(:host => "0.0.0.0", :port => 80) do |conn|
2. This proxies the traffic to the servers you define. Your production server proxies locally to nginx and listens on port `8080`. **NOTE**: Replace `192.0.32.10` with the IP of your Engine Yard Cloud environment.
        conn.server :production, :host => '127.0.0.1', :port => 8080
        conn.server :ey_cloud, :host => '192.0.32.10', :port => 80
3. This sends the response back to the user if the traffic came from the production server.
        conn.on_response do |server, resp|
          resp if server == :production
        end