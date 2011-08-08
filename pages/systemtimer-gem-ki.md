#SystemTimer gem is not supported in Ruby 1.9.2

Currently, Ruby 1.9.2 does not support the SystemTimer gem. 

If you are using the SystemTimer gem, either remove it as a dependency or use the following code to prevent errors:

        gem 'SystemTimer', :platforms => [:ruby_18]