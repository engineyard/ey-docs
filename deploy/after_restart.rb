run "cd #{current_path} && rm -rf _site"
run "cd #{current_path} && bundle exec gollum-site generate"
sudo "cd #{current_path} && bundle exec gollum-site serve --port 80 &"
