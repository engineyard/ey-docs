require 'bundler'

desc "Generate the gollum site. $PORT defaults to 3011"
task :generate do
  sh "bundle exec gollum-site generate --allow_elements iframe,div --allow_attributes src --allow_protocols http,https --working"
end

desc "Run the gollum server"
task :serve do
  port = ENV['PORT'] || "3011"
  sh "bundle exec gollum-site serve -p #{port} --watch"
end

desc "Generate and run the gollum site in development mode"
task :dev => [:generate, :serve]

desc "Deploy to stage environment"
task :stage do
  sh "ey deploy --no-migrate -e EY_Documentation_clone"
end

desc "Deploy to production environment"
task :production do
  sh "ey deploy --no-migrate -e EY_Documentation"
end
