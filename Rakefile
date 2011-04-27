require 'bundler'

desc "Generate the gollum site. $PORT defaults to 3011"
task :generate do
  sh "bundle exec gollum-site generate --working --allow_elements iframe --allow_attributes src --allow_protocols http,https"
end

desc "Run the gollum server"
task :serve do
  port = ENV['PORT'] || "3011"
  sh "bundle exec gollum-site serve --watch -p #{port}"
end

desc "Generate and run the gollum site in development mode"
task :dev => [:generate, :serve]