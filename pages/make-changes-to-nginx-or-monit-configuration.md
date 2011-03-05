# Make Changes to Nginx or Monit Configuration

A **keep file** gives you the flexibility to modify configuration settings on your `/data` EBS volume.  Basically rename the default file from `file.name` to `keep.file.name`.

## Nginx

Your application named **myapp** you'd take your standard:

    /data/nginx/servers/myapp.conf

And you need to rename that file to:    

    /data/nginx/servers/keep.myapp.conf

Then make all your changes and they will be used in your nginx server.

This also works for other files in the folder:

    /data/nginx/servers/*    


### Extra Step for `nginx.conf`

Changing the `nginx.conf` file requires an additional step because it's a file required by nginx itself.

  - Rename the file from `/data/nginx.conf` to `/data/nginx/keep.nginx.conf`
  - Add a deploy hook to create a symlink:

       ln -nfs /data/nginx/keep.nginx.conf /data/nginx/nginx.conf


## Monit 

You can also edit and keep any monit configs inside of:

    /etc/monit.d/*

This can be useful if you're trying to increase the memory limit for mongrels or background processes, etc.