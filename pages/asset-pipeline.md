# Rails 3.1 asset pipeline tips for Engine Yard Cloud

Rails 3.1 introduced the asset pipeline. It is enabled by default. This means that unless you specifically disable the asset pipeline, assets are precompiled for you.

Topics covered on this page:

* [[Using asset path helper methods|asset-pipeline#paths]]
* [[Resolving CSS or JavaScript file problems in a staging environment|asset-pipeline#staging]]
* [[Disabling the asset pipeline|asset-pipeline#disabling]]

<h2 id="paths">Using asset path helper methods</h2>

With the asset pipeline, static assets are served from a flat file system in the `public/assets` directory. 

Sprockets is integrated with Rails 3.1. Sprockets makes it easier to manage your asset files. Using Sprockets and its asset path helper methods can make ERB more readable.

This section shows two ways to use `asset_path` helper methods:

* [With the Sprockets preprocessor for (regular) CSS][1]
* [With the Sprockets preprocessor and the sass-rails gem][2]


<h3 id="sprockets"> To use the Sprockets preprocessor and helper methods to manage assets</h3>

1. Add an `.erb` extension to your stylesheets.

2. Use Ruby code in the stylesheets in the same way as in the view files. For example, 

        url('../images/rails.png')

    becomes

        url(<%= asset_path 'rails.png' %>)
    
<br>
You can also use Sprockets helper methods with the sass-rails gem.

<h3 id="sass">To use the Sprockets preprocessor and helper methods with the sass-rails </h3>

1. Install the [sass-rails](https://github.com/rails/sass-rails) gem.

2. Use Ruby code in the stylesheets in the same way as in the view files. For example, 

        url('../images/rails.png')
    
    becomes

       url(asset-path('rails.png', image))

	**Note:** Use a hyphen instead of an underscore.

<h2 id="staging">Using the correct CSS or JavaScript files in the staging environment</h2>

By default in Rails 3.1, config.assets.digest is set to true for production environments but to false for staging and development environments. If you deploy to your staging environment and your application looks like it has no CSS applied or is using the wrong JavaScript files even though you are precompiling assets (as described above), then you might need to set config.assets.digest to true. 

###To use the correct CSS and JavaScript files in staging

* In your `environments/staging.rb` file, add this line:

        config.assets.digest = true

    When config.assets.digest is true, when you view a source page for your deployed application, asset names appear with a unique fingerprint. For example:

        <script src="/assets/application-908e25f4bf641868d8683022a5b62f54.js" type="text/javascript"></script>
        <link href="/assets/application-4dd5b109ee3439da54f5bdfd78a80473.css" media="screen" rel="stylesheet" type="text/css" />

	 instead of:

	        <script src="/assets/application.js" type="text/javascript"></script>
	        <link href="/assets/application.css" media="screen" rel="stylesheet" type="text/css" />

The config.assets.digest option turns on "fingerprinting" for each asset. For information about fingerprinting, see the Rails Guides. 

<h2 id="disabling">Disabling the asset pipeline</h2>

There are specific cases where you need to disable precompliation of assets; for example, if your assets are not in the same git repository as your application. 

###To disable the asset pipeline

1. Add the line `config.assets.enabled = false` to the `config/application.rb` file.   
    For example:  

        module Listr
		  class Application < Rails::Application
		    # Disable the asset pipeline  
		    config.assets.enabled = false  

3. Save and commit the change.  

<!-- Coming soon: The config.assets.enabled = false line can be added to other application files, for example to the environment declarations or to plugins. -->
        
##More information
    
For more information about the asset pipeline, see the 
[Rails Guides](http://guides.rubyonrails.org/asset_pipeline.html).

[1]: #sprockets        "sprockets"
[2]: #sass        "saas"
