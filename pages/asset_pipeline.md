# Rails 3.1 Asset Pipeline and AppCloud

The Asset Pipeline is arguably the biggest new feature in Rails 3.1. It is also a bit confusing and there are some things to know when deploying to AppCloud.

## Precompiling assets

When deploying your a Rail 3.1 application, you may notice that there is no
styling. The fix for this is easy and just requires adding a 
[[deploy hook|use-deploy-hooks-with-engine-yard-appcloud]] to your 
application.

In your `before_symlink.rb` file, add the following code:

    run "cd #{release_path}; RAILS_ENV=#{rails_env} bundle 
      exec rake assets:precompile"
    
This command compiles the assets to the `public/assets` directory and serves 
them as static files.

## Asset path

With the Asset Pipeline, static assets are served from a flat file system in `public/assets`. Because of this, the recommended practice is to use the new `asset_path` helpers. This can either be done using a preprocessor or by
using [sass-rails](https://github.com/rails/sass-rails) built in helpers.

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
[Rails Guides](http://edgeguides.rubyonrails.org/)
    