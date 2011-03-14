# Add Application 

![Add Application Page]()

## Git Repository URI 

This page is where you will add your git repo that host the code for your application.

[[Do I have to use Git?]]
[How do I sign up for a GitHub account?]()

## Application Type / Select your app version

We support multiple types of applications. Choose the version of your application.

* [[Rack|https://github.com/rack/rack]]
* [[Merb|https://github.com/merb/merb]]
* [[Sinatra|https://github.com/sinatra/sinatra]]
* [[Rails 2|https://github.com/rails/rails]]
* [[Rails 3|https://github.com/rails/rails]]

## Framework Environment 

This is the type of environment for your application. This will set the `RAILS_ENV`, `MERB_ENV`, or `RACK_ENV` that will be used by the application.

## Ruby Runtime 

Choose the version of Ruby that is needed for your application. Currently we offer Ruby 1.8.6, Ruby 1.8.7, and REE. In our Beta program, we are offering [Ruby 1.9.2]() and [JRuby]().

## Web Server Stack

Choose the Web Server Stack that best suits your application.

* [[Passenger|http://www.modrails.com/]] - This is great for multi-application environments.
* [[Mongrel|https://github.com/fauna/mongrel]] - For most applications, this is the tried and true old standby. However, this **will not work** for Rails 2.3.8+ or Rails 3.
* [[Unicorn|http://unicorn.bogomips.org/]] - Light and fast Rack server. Supports zero-downtime deploys. Make sure you have the Unicorn gem installed to use this.
* [[Passenger 3|http://www.modrails.com/]] - This is currently in our Beta program. Visit [here]() for more information and to sign up.

[Can I change the Web Server Stack?]()

## Availability Zone

Availability Zones are Amazon's idea for data centers.

Currently we offer EC2 instances from the *us-east* Availability Zone. We offer the other regions in our [Multi-Region Alpha feature]().

[What are Availability Zones?]()
[What are EC2 Instances?]()
[I get a message *Amazon Out Of Capacity*. What do I need to do?]()