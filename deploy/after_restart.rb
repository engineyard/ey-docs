if File.directory?("#{current_path}/_site")
  run "cd #{current_path} && rm -rf _site"
end

sudo "lsof -n -i 'TCP:80' -Fp"
run "cd #{current_path} && bundle exec gollum-site generate"
sudo "cd #{current_path} && bundle exec gollum-site serve --port 80 &"