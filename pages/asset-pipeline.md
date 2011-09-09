# Rails 3.1 Asset pipeline tips for AppCloud

The asset pipeline is arguably the biggest new feature in Rails 3.1. There are some important things to know when deploying applications using the asset pipeline to AppCloud.

Topics covered on this page:

* [[Precompile your assets|asset-pipeline#precompile]]
* [[Asset paths|asset-pipeline#paths]]

<h2 id="precompile">Precompiling assets</h2>

When deploying your Rails 3.1 application, you may notice that there is no
styling or your javascript behavior is not working. The fix for this is requires adding a [[deploy hook|use-deploy-hooks-with-engine-yard-appcloud]] to your application.

###To precompile assets

1. Create a `/deploy/before_symlink.rb` file in your application.

2. Add the following command to your deploy hook file:
      
        run "cd #{release_path}; RAILS_ENV=#{framework_env} bundle exec rake assets:precompile"
    
This command compiles the assets to the `public/assets` directory anytime you deploy your application
to AppCloud. This directory is used as a location to store and serve store your application assets.

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
    
For more information, check out the 
[Rails Guides](http://edgeguides.rubyonrails.org/).
    