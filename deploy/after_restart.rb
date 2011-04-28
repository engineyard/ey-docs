sudo "/etc/init.d/nginx stop"

sudo "cd #{current_path} && rm -rf _site"

run "cd #{current_path} && bundle exec gollum-site generate --allow_elements iframe --allow_attributes src --allow_protocols http,https"
sudo "c/etc/init.d/nginx start"