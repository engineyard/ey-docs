# Using JRuby on Engine Yard Cloud

This page provides some information about running a JRuby application on Engine Yard Cloud.

This is the process:

* [Set up your local environment for JRuby development and CLI deployment][1].  
* [Run a JRuby application on Engine Yard Cloud][2].

**Note:** If you are using a free trial account, see [Deploy JRuby applications in trial accounts](deploy-jruby-trial).


<a href=#topic1><h2 id="topic1">Prepare your local machine for JRuby</h2></a> 

If you are new to JRuby, follow the procedure below to prepare your local machine to develop and test JRuby code. 

If you are already running JRuby on your local machine, review the procedure below. If you use the Engine Yard CLI, do Step 5.


###To prepare your local environment and application for JRuby

1. Install JRuby.

        rvm install jruby
  		rvm jruby

2. Verify that you have installed Bundler 1.0.10 or later.  

        bundle -v

3. Add the following to your Gemfile:

  		platforms :jruby do
    		gem 'jruby-openssl'
    		gem 'trinidad'
			gem 'activerecord-jdbc-adapter'

    	# Choose the jdbc driver according to your database engine
    		gem 'jdbc-mysql', :require => false
    		gem 'jdbc-sqlite3', :require => false
  		end

4. Run these commands to update your Gemfile.lock:

  		bundle install

  		git commit -a -m "Gemfile updated for JRuby/Trinidad"
  		git push origin

5. (Optional) To use the Engine Yard CLI tool, run these commands:

  		rvm --create jruby@ey exec gem install engineyard
  		rvm wrapper jruby@ey --no-prefix ey


<a href=#topic2><h2 id="topic2">Run a JRuby application on Engine Yard Cloud</h2></a>

Running a JRuby application is similar to running any Ruby application. The main difference is that you set the Application Server to Trinidad.   

**Note:** Engine Yard's Trinidad application server does not support the `:web_apps` option. (The `:web_apps` option allows configuration of several Rails applications within the same Tomcat container.)


###To run a new JRuby application on Engine Yard Cloud

1. In your Dashboard, create an application.  

3. Create the environment, setting the Application Server to Trinidad.  
    When the Application Server is set to Trinidad, the Runtime defaults to JRuby 1.6.5 compatible with Ruby 1.8.7.  
    For JRuby compatible with Ruby 1.9.2, set the Runtime to JRuby 1.6.5 (ruby-1.9.2-p136).
	
4. Deploy the application.


<h2 id="topic5"> More information</h2>

<table>
  <tr>
    <th>For more information about...</th><th>See...</th>
  </tr>
  <tr>
    <td>JRuby</td><td>[[jruby.org|http://jruby.org/]]</td>
  </tr> 
  <tr>
	<td>configuring Trinidad</td><td>[[Advanced configuration|https://github.com/trinidad/trinidad/wiki/advanced-configuration]]</td>
  </tr>
  <tr>
    <td>the Engine Yard CLI</td><td>[[Engine Yard CLI User Guide|ey_cli_user_guide]] </td>
  </tr>
  <tr>
    <td>Bundler</td><td>[[Bundler tips|bundler-tips-for-cloud]]</td>
  </tr>
</table>


[1]: #topic1        "topic1"
[2]: #topic2        "topic2"
[3]: #topic3        "topic3"
