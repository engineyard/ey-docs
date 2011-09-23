# Rails 3.1 Asset pipeline tips for AppCloud

The asset pipeline is arguably the biggest new feature in Rails 3.1. There are some important things to know when deploying applications using the asset pipeline to AppCloud.

Topics covered on this page:

* [[Precompile your assets|asset-pipeline#precompile]]
* [[Asset paths|asset-pipeline#paths]]
* [[Show the latest version of CSS or JavaScript files in the staging environment|asset-pipeline#staging]]

<h2 id="precompile">Precompiling assets</h2>

**Note:** Only try this fix if styles are not displayed correctly.

<!-- The note above says to only try this if styles aren't displayed correctly. But the text below says try this if there is NO styling or if JavaScript behavior is not working. So, these seem to contradict each other -- when should I precompile assets? -->

When deploying your Rails 3.1 application, you may notice that there is no
styling or your JavaScript behavior is not working. The fix for this is requires adding a [[deploy hook|use-deploy-hooks-with-engine-yard-appcloud]] to your application.


###To precompile assets

1. Create a `/deploy/before_symlink.rb` file in your application.

2. Add the following command to your deploy hook file:
      
    run "cd #{release_path}; RAILS_ENV=#{framework_env} bundle exec rake assets:precompile"
    
This command compiles the assets to the `public/assets` directory when you deploy your application
to AppCloud. This directory is used as a location to store and serve your application assets.

Assets cannot be compiled on an AppCloud instance (even if the config.assets.compile is set to true in `config/environment/production.rb`).

<h2 id="paths">Asset paths</h2>

With the asset pipeline, static assets are served from a flat file 
system in the `public/assets` directory. Because of this, the recommended 
practice is to use the new `asset_path` helpers. This can either be done 
using a preprocessor or by using [sass-rails](https://github.com/rails/sass-rails) 
built in helpers.

To use Sprockets pre-processors, add a `.erb` extension to your stylesheets. 
You can then use Ruby code in the stylesheets just like you would in the view 
files.

    url('../images/rails.png')

becomes

    url(<%= asset_path 'rails.png' %>)
    
There are also helper methods built into sass-rails. They resemble the `.erb`
ones except use a hyphen instead of an underscore.

    url('../images/rails.png')
    
becomes

    url(asset-path('rails.png', image))
    
You can also use the `-url` helper and paired with the type of asset, this
makes for very intuitive code

    url('../images/rails.png')
    
becomes

    image-url('rails.png')


---
<!-- Below is my attempt at a rewrite for the above section. I can't figure out what the section above is telling the customer to do. -->

<h2 id="paths">Asset paths</h2>

<!-- The title of this section is "Asset paths" but it seems to be telling me to DO something with asset paths. Can we add a verb to this heading?  What do I achieve with asset paths?   -->

With the asset pipeline, static assets are served from a flat file 
system in the `public/assets` directory. Because of this, the recommended 
practice is to use the new `asset_path` helpers. 

<!-- Question: Why does serving static assets from a flat file system require a new helper? Are there old `asset_path` helpers too? What happens if I don't use new helpers? It says I don't have to use new helpers, only that it's recommended. -->

There are two ways to use `asset_path` helpers:

* [With a preprocessor such as Sprockets][1]
* [With built-in helpers in sass-rails gem][2]

This can either be done 
using a preprocessor or by using [sass-rails](https://github.com/rails/sass-rails) 
built in helpers.


<h3 id="sprockets"> To precompile assets with the Sprockets pre-processor</h3>

<!-- How do you get Sprockets? -->

1. Add an `.erb` extension to your stylesheets.

    <!-- Should we indicate how this is done? --> 

2. Use Ruby code in the stylesheets in the same way as in the view files. For example, 

        url('../images/rails.png')

    becomes

        url(<%= asset_path 'rails.png' %>)
    
<h3 id="sass"> To precompile assets with helper methods in sass-rails</h3>

<!-- Is a "helper method" the same as a "helper" ? If so, can we use one consistently? -->

1. Install the [sass-rails](https://github.com/rails/sass-rails) gem.

2. Use Ruby code in the stylesheets in the same way as in the view files ?? For example, 

        url('../images/rails.png')
    
    becomes

       url(asset-path('rails.png', image))

	**Note:** Use a hyphen instead of an underscore.
	
<!-- Does this `-url` piece apply to sass  or to Sprockets or both or neither? -->	
    
You can also use the `-url` helper and paired with the type of asset, this
makes for very intuitive code

    url('../images/rails.png')
    
becomes

    image-url('rails.png')



---

<h2 id="staging">Show the latest version of CSS or JavaScript files in the staging</h2>

If your staging environment doesn't show the latest fingerprinted 
version of your CSS or JavaScript files, then explicitly set `config.assets.digest`
variable in your `environments/staging.rb` file, as follows.

<!-- Does the term "fingerprinted version" need to be explained or clarified -- I asked Danish and he didn't seem familiar with the phrase. -->

This variable is set to true by default in production environments, but not in staging or development environments.

<!-- Tyler, can you give a bit more information about why someone wants to do this? What problem does it solve? -->


###To show the latest version of CSS and JavaScript files in staging

* In your `environments/staging.rb` file, add this line:

        config.assets.digest = true

    This generates something like:

        <script src="/assets/application-908e25f4bf641868d8683022a5b62f54.js" type="text/javascript"></script>
        <link href="/assets/application-4dd5b109ee3439da54f5bdfd78a80473.css" media="screen" rel="stylesheet" type="text/css" />

<!-- Where does this get generated? Is it at the beginning of each asset? -->

##More information
    
For more about the asset pipeline, check out the 
[Rails Guides](http://guides.rubyonrails.org/asset_pipeline.html).

[1]: #sprockets        "sprockets"
[2]: #sass        "saas"
    