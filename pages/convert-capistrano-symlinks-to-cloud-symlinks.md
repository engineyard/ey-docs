# Convert Capistrano Symlinks to Engine Yard Cloud Symlinks

Many people use Capistrano to configure symlinks to shared folders.  
Ideally you'd be able to fully deploy your app from the Dashboard without Capistrano.

## Example Capistrano recipe

Here's an example of a common Capistrano recipes for symlinking folders:


    after "deploy:update_code", "symlink_files"
    after "deploy:update_code", "symlink_geo_ip"
    
    task :symlink_files do
      %w(photo card).each do |folder|
        path  = "#{release_path}/../../shared/files/#{folder}"
        symlink_path = "#{release_path}/public/#{folder}"
        run "mkdir -p #{path}"
        puts "Symlinking #{folder} folder"
        run "rm -rf #{symlink_path}"
        run "ln -sf #{path} #{symlink_path}"
      end
    end
    
    task :symlink_geo_ip do
      path  = "#{release_path}/../../shared/GeoIPCity.dat"
      symlink_path = "#{release_path}/db/GeoIPCity.dat"
      puts "Symlinking GeoIP"
      run "rm -rf #{symlink_path}"
      run "ln -sf #{path} #{symlink_path}"
    end

## Using deploy hooks

To replace the above Capistrano recipes, we suggest using our deploy hooks to customize your
application deployment when using the Dashboard or the CLI to deploy your code.

### Before Symlink deploy hook

Create a file `$RAILS_ROOT/deploy/before_symlink.rb` with these contents:


    %w(photo card).each do |folder|
        run "echo 'release_path: #{release_path}/public/#{folder}' >> #{shared_path}/logs.log"
        run "ln -nfs #{shared_path}/files/#{folder} #{release_path}/public/#{folder}"
    end
    run "echo 'release_path: #{release_path}/db/GeoIPCity.dat' >> #{shared_path}/logs.log"
    run "ln -nfs #{shared_path}/shared/GeoIPCity.dat #{release_path}/db/GeoIPCity.dat"


**Note** we are using the "Release" path instead of "Current" as it hasn't been symlinked yet.

Learn more about our [[Custom Deploy Hooks|use-deploy-hooks-with-engine-yard-cloud]].

## Conclusion

By converting to deploy hooks, your application can now be deployed from the 
Dashboard without having to use Capistrano.
