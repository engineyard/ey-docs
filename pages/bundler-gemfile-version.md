# Bundler version issue "unitialized contant Gem::SilentUI (NameError)"

The EngineYard platform defaults to Bundler version
1.0.10, which throws the above error with newer versions of Rubygems. A
common fix for this is to specify the Bundler version.

If the version of Bundler you're using is 1.0.15, add this to your Gemfile

    gem 'bundler', '1.0.15'

and then run

    bundle update bundler

from the command line.

## Common mistakes

* Make sure to specify `'1.0.15'` and not `'~>1.0.15'` to ensure against
future changes.
* Run `bundle update bundler` from your local machine to create
  a new Gemfile.lock in your application. Otherwise this change won't
show up.
