# 404 errors when using AssetsController

Our AppCloud Nginx configuration is now standardized on Rails 3.1; this configuration 
is set to serve static asset files from the `public/assets` directory. If a pre-Rails 3.1 
application makes use of an AssetsController, the application does not receive the request 
because Nginx is configured to handle them. Subsequently, the application returns 404 errors 
for these types of requests.

## To reconfigure nginx.conf so AssetsController receives requests

1. Create a keep file for nginx.conf:

        keep.nginx.conf  

    For information about keep files on AppCloud, see [[Using keep files|configuration-keep-files]].

2. Edit the keep.nginx.conf file:  
    Replace

        location ~ ^/(images|assets|javascripts|stylesheets)/ { 
		  expires 10y; 
		}  
		
    With

        location ~ ^/(images|javascripts|stylesheets)/ { 
		  expires 10y; 
		}
		
3. Restart ngnix: 
 
        /etc/init.d/nginx restart

For information about assets in Rails 3.1, see [[Rails 3.1 Asset Pipeline tips for AppCloud|asset-pipeline]] and the [[Rails Guide for asset pipeline|http://guides.rubyonrails.org/asset_pipeline.html]].