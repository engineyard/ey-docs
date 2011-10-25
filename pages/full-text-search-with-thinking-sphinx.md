# Implement full text search with Sphinx on Engine Yard Cloud

## Introduction

Full text searching is a technique for searching all the words in every stored document in a database or other collection. This is done through a process of indexing the words and then searching through the indexes. Although it is possible to search documents for words using SQL, it is not efficient when dealing with a large number of files. Instead, specific full text tools such as [[Sphinx|http://sphinxsearch.com/]] are generally used.

This page describes how to implement Sphinx (full text search) in a Rails 3 application using the Thinking Sphinx gem.  

Thinking Sphinx connects ActiveRecord and the Sphinx search daemon, allowing your application to communicate with a Sphinx server.
	
## Using Sphinx with your application

1. Add the Thinking Sphinx gem to your Gemfile for Rails 3 ([[Thinking Sphinx|http://freelancing-god.github.com/ts/en/]]).

        gem 'thinking-sphinx', '2.0.3'
	
2. Read the page on using [[Custom Chef|custom-chef-recipes]].

3. Make the following edits to the [[sphinx default recipe|http://github.com/engineyard/ey-cloud-recipes/tree/master/cookbooks/sphinx]] in `cookbooks/sphinx/recipes/default.rb`

    * Set your application name.  

        ![Set appname](images/sphinx_appname.png)

    * Uncomment the thinking_sphinx flavor. 

        ![Uncomment flavor](images/sphinx_flavor.png)

	* Set the cron_interval. For example, `cron_interval=10` reindexes your data every 10 minutes. 

        ![Cron interval](images/sphinx_cron.png)

4. 	Add deploy hooks by adding these lines to before_migrate.rb. For information about deploy hooks, see [[How To Use Deploy Hooks|use-deploy-hooks-with-engine-yard-cloud]]:  

        run "ln -nfs #{shared_path}/config/sphinx #{release_path}/config/sphinx"  
        run "ln -nfs #{shared_path}/config/sphinx.yml #{release_path}/config/sphinx.yml"  

5. Use the ey gem to upload the cookbook: 

        ey recipes upload -e environment_name

5. After the cookbook is uploaded, update your environment from the Dashboard.

	![Update environment](images/sphinx_update.jpg)
	

<h2 id="topic6"> Troubleshooting</h2>

This table contains troubleshooting tips related to setting up Sphinx with your application.

<table>
	  <tr>
	    <th>Symptom</th><th>Solution</th>
	  </tr>
	  <tr>
	    <td>My files aren't being indexed. </td> 
		<td> Make sure you have edited the cron_interval in default.rb (step 3 above). If the cron_interval=nil files are not indexed.  </td>
	  </tr>
	  <tr>
	    <td>I set up Sphinx without using chef recipes. It worked fine at first but then stopped working.</td>
		<td>If you do not use chef recipes to set up Sphinx, Sphinx configuration is lost whenever your instance is restarted.</td>
	</tr>
	<tr>
		<td>I can't connect to the Sphinx server / Sphinx server not found.</td>
		<td>Make sure that you have added the deploy hooks and that the sphinx.yml file is present (step 4 above).
</td>
	  </tr>
	</table>

	
