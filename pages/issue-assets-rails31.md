<h1>404 errors when using AssetsController</h1>

The AppCloud nginx configuration is now standardized on Rails 3.1; this configuration serves assets from a static directory. If a pre-3.1 application uses AssetsController, the Rails application does not receive the asset request and serves a 404 error page. 

To resolve this issue, reconfigure the nginx.conf file to as follows.

<h2>To reconfigure nginx.conf so that AssetsController receives asset requests</h2>

1. Create a keep file for nginx.conf:

        keep.nginx.conf  

    For information about keep files, see [[Use keep files to customize and maintain configurations on AppCloud|configuration-keep-files]]

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
