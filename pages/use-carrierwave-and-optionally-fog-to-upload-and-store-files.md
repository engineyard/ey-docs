# How to use CarrierWave (and optionally fog) to upload and store files #

CarrierWave is a Ruby gem used to upload and store files (typically images and documents) for 
Ruby applications. For example, you might use CarrierWave to associate and store 
photos with user identities. (CarrierWave is an alternative to the Paperclip gem.)

This page describes:

* [Setting up CarrierWave for local storage in Engine Yard Cloud][2]
* [Setting up CarrierWave for online storage with a web service][3]


<h2 id="update2">Setting up CarrierWave for local storage in Engine Yard Cloud</h2>

Uploading files using CarrierWave _without fog_ is a good choice for testing 
and for small applications as files are stored locally on your instances.

Use CarrierWave to store files locally on your Engine Yard Cloud instance if:  

* You want to try out CarrierWave with your application. 
* You have a small number of files. (The files take up disk space on your instance)

**Note**: Do not use CarrierWave locally if you are using a cluster of application
servers. Files uploaded to one instance are inaccessible from another without writing a custom replication process
to ensure files are replicated across all instances.  Instead, see [Setting up CarrierWave for online storage with a web service][3].

### To install and use CarrierWave for testing and small applications

(For Rails 3.0.X and CarrierWave 0.5.4)

1. Add the gem file to your Rails project.

        gem 'carrierwave'

2. Generate an uploader to manage the file to upload.   
    For example, uploading avatars for user profiles.

        rails generate uploader Avatar

3. Create a migration to add a column to the model that will use the uploader.  
    For example, adding avatar to our user model.

        add_column :users, :avatar, :string

4. In the model, mount the uploader:

        class User
            ...
            mount_uploader :avatar, AvatarUploader
            ...
        end

**Note:** You must set the form to be multipart for file uploads to work:
    
    <%= form_for @user, :html => {:multipart => true} do |f| %>

For more information, see [[github.com/jnicklas/carrierwave|http://github.com/jnicklas/carrierwave]].

<h2 id="update3">Setting up CarrierWave for online storage with a web service</h2>


Using CarrierWave with fog gives you flexibility to store your files on any cloud service supported by fog and to switch between them as needed. This also keeps your uploaded files separated from your Engine Yard Cloud instance -- making a cleaner application.
	
This example uses Amazon S3, which is a popular online storage web service. However, you can use any fog-supported service to store your files for retrieval with CarrierWave.

### To setup and use CarrierWave with fog

1. Follow steps 1-4 in the [example above][2] to install and implement CarrierWave.

2. In your generated uploader file, edit the file (in the app/uploaders directory) to set storage to fog:

        class AvatarUploader < CarrierWave::Uploader::Base
          storage :fog
        end

3. In the config/initializers directory, create fog.rb to store the service provider name and credentials.    
    For example, if the service is Amazon S3, the fog.rb might look like this:   

        CarrierWave.configure do |config|
	      config.fog_credentials = {
	        :provider               => 'AWS',
	        :aws_access_key_id      => 'secret',
	        :aws_secret_access_key  => 'secret',
	      }
	      config.fog_directory  = 'my_uploads'
	      config.fog_public     = false        
	    end


## More Information

For a general introduction to CarrierWave, see this [[Railscast 253|http://railscasts.com/episodes/253-carrierwave-file-uploads]].


[1]: #update1        "update1"
[2]: #update2        "update2"
[3]: #update3        "update3"
[4]: #update4        "update4"